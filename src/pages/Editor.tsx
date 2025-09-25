import { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocation } from "react-router-dom";
import { languages } from "@/data/languages";
import { Play, RefreshCw } from "lucide-react";
import { executeWithPiston } from "@/lib/piston";

const useQuery = () => new URLSearchParams(useLocation().search);

const languageToPiston: Record<string, string> = {
  javascript: "javascript",
  python: "python",
  java: "java",
  cpp: "cpp",
  go: "go",
  react: "javascript",
};

const getDefaultCode = (langId: string) => {
  const lang = languages.find(l => l.id === langId);
  if (!lang) return "";
  return String(lang.helloWorld || "");
};

const Editor = () => {
  const query = useQuery();
  const langIdParam = query.get("lang") || "javascript";
  const [langId, setLangId] = useState(langIdParam);
  const [code, setCode] = useState(getDefaultCode(langIdParam));
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [stderr, setStderr] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "input" | "output">("code");

  useEffect(() => {
    setLangId(langIdParam);
    setCode(getDefaultCode(langIdParam));
    setInput("");
    setOutput("");
    setStderr("");
  }, [langIdParam]);

  const lang = useMemo(() => languages.find(l => l.id === langId), [langId]);

  const run = async () => {
    if (!lang) return;
    setIsRunning(true);
    setOutput("");
    setStderr("");
    setActiveTab("output");
    try {
      // In-browser eval for JS/React, capturing console.log and stack traces
      if (lang.id === "javascript" || lang.id === "react") {
        const logs: string[] = [];
        const originalLog = console.log;
        try {
          console.log = (...args: any[]) => {
            logs.push(args.map(a => typeof a === "string" ? a : JSON.stringify(a)).join(" "));
            originalLog(...args);
          };
          // Use Function constructor for better error locality
          // eslint-disable-next-line no-new-func
          const fn = new Function(code);
          const result = fn();
          const finalOut = [logs.join("\n"), result != null ? String(result) : "(executed)"].filter(Boolean).join("\n");
          setOutput(finalOut);
        } catch (e: any) {
          const message = e?.stack || e?.message || String(e);
          setStderr(message);
        } finally {
          console.log = originalLog;
        }
        return;
      }

      const pistonLang = languageToPiston[lang.id];
      if (!pistonLang) {
        setStderr(`Execution not supported for ${lang.name}.`);
        return;
      }
      const res = await executeWithPiston({ language: pistonLang, code, stdin: input });

      const compileFailed = typeof res.compile?.code === "number" && res.compile?.code !== 0;
      const runFailed = typeof res.run?.code === "number" && res.run?.code !== 0;

      const out = (res.run?.stdout || "").trim();
      const compileErr = [res.compile?.stdout, res.compile?.stderr].filter(Boolean).join("\n").trim();
      const runErr = [res.run?.stderr].filter(Boolean).join("\n").trim();

      setOutput(out);

      const errParts: string[] = [];
      if (compileFailed && compileErr) {
        errParts.push(`Compilation error (exit ${res.compile?.code}):\n${compileErr}`);
      }
      if (runFailed && runErr) {
        errParts.push(`Runtime error (exit ${res.run?.code}):\n${runErr}`);
      }
      if (!errParts.length && (compileFailed || runFailed)) {
        errParts.push(`Process exited with code ${compileFailed ? res.compile?.code : res.run?.code}`);
      }
      setStderr(errParts.join("\n\n"));
    } catch (e: any) {
      setStderr(String(e?.message || e));
    } finally {
      setIsRunning(false);
    }
  };

  const reset = () => {
    setCode(getDefaultCode(langId));
    setInput("");
    setOutput("");
    setStderr("");
    setActiveTab("code");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold gradient-text leading-tight">{lang?.name || "Editor"} Playground</h1>
                  <p className="text-muted-foreground mt-2">Write and run sample code with user input support. JS runs locally; others are executed via a remote runner.</p>
                </div>
                <div className="w-full md:w-64">
                  <Select value={langId} onValueChange={(v) => { setLangId(v); setCode(getDefaultCode(v)); setInput(""); setOutput(""); setStderr(""); setActiveTab("code"); }}>
                    <SelectTrigger className="rounded-2xl h-10"><SelectValue placeholder="Select language" /></SelectTrigger>
                    <SelectContent>
                      {Object.keys(languageToPiston).map(k => (
                        <SelectItem key={k} value={k}>{languages.find(l => l.id === k)?.name || k}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <Card className="soft-card border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Editor</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="space-y-4">
                  <TabsList className="rounded-2xl">
                    <TabsTrigger value="code" className="rounded-xl">Code</TabsTrigger>
                    <TabsTrigger value="input" className="rounded-xl">Input</TabsTrigger>
                    <TabsTrigger value="output" className="rounded-xl">Output</TabsTrigger>
                  </TabsList>
                  <TabsContent value="code" className="space-y-4">
                    <textarea
                      value={code}
                      onChange={e => setCode(e.target.value)}
                      className="w-full h-80 p-4 rounded-xl bg-secondary/40 font-mono text-sm outline-none border border-border/50 smooth-focus"
                    />
                    <div className="flex gap-3">
                      <Button onClick={run} disabled={isRunning} className="px-6">
                        {isRunning ? <span>Running...</span> : <><Play className="w-4 h-4 mr-2" />Run</>}
                      </Button>
                      <Button variant="outline" onClick={reset} disabled={isRunning} className="px-6"><RefreshCw className="w-4 h-4 mr-2" />Reset</Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="input" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Standard Input (stdin)
                      </label>
                      <textarea
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Enter input for your program here..."
                        className="w-full h-32 p-4 rounded-xl bg-secondary/40 font-mono text-sm outline-none border border-border/50 smooth-focus"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        This input will be passed to your program when it runs. Use this for programs that read user input.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="output">
                    <div className="space-y-4">
                      {/* Terminal-like Output Display */}
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Terminal Output</h3>
                        <div className="w-full h-80 p-4 rounded-xl bg-gray-900 text-green-400 font-mono text-sm overflow-auto whitespace-pre-wrap border border-gray-700 relative">
                          <div className="absolute top-2 right-2 flex space-x-1">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          {input && (
                            <div className="mb-2 mt-6">
                              <span className="text-blue-400">$ Input:</span>
                              <div className="ml-2 text-white">{input}</div>
                            </div>
                          )}
                          {output && (
                            <div className="mb-2">
                              <span className="text-green-400">$ Output:</span>
                              <div className="ml-2">{output}</div>
                            </div>
                          )}
                          {stderr && (
                            <div className="mb-2">
                              <span className="text-red-400">$ Error:</span>
                              <div className="ml-2 text-red-300">{stderr}</div>
                            </div>
                          )}
                          {!output && !stderr && (
                            <div className="text-gray-500">No output yet. Click "Run" to execute your code.</div>
                          )}
                        </div>
                      </div>
                      
                      {/* Separate detailed views */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-2">Standard Output</h3>
                          <pre className="w-full h-32 p-4 rounded-xl bg-secondary/40 font-mono text-sm overflow-auto whitespace-pre-wrap">{output || "No output"}</pre>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-2">Standard Error</h3>
                          <pre className="w-full h-32 p-4 rounded-xl bg-secondary/40 font-mono text-sm overflow-auto whitespace-pre-wrap">{stderr || "No errors"}</pre>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Editor;
