import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { languages } from "@/data/languages";

const Compare = () => {
  const options = useMemo(() => languages.map(l => ({ id: l.id, name: l.name })), []);
  const [left, setLeft] = useState(options[0]?.id || "");
  const [right, setRight] = useState(options[1]?.id || options[0]?.id || "");

  const leftLang = languages.find(l => l.id === left);
  const rightLang = languages.find(l => l.id === right);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4 leading-tight">Compare Languages</h1>
            </ScrollReveal>
            <ScrollReveal delayClassName="reveal-delay-1">
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Select two languages to compare their difficulty, category, popularity, use-cases, and more.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <Select value={left} onValueChange={setLeft}>
                <SelectTrigger className="h-12 rounded-2xl"><SelectValue placeholder="Select language" /></SelectTrigger>
                <SelectContent>
                  {options.map(o => (
                    <SelectItem key={o.id} value={o.id}>{o.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={right} onValueChange={setRight}>
                <SelectTrigger className="h-12 rounded-2xl"><SelectValue placeholder="Select language" /></SelectTrigger>
                <SelectContent>
                  {options.map(o => (
                    <SelectItem key={o.id} value={o.id}>{o.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[leftLang, rightLang].map((lang, i) => (
              <ScrollReveal key={i} delayClassName={`reveal-delay-${(i % 3) + 1}`}>
                <Card className="soft-card border-0 bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={"w-10 h-10 rounded-2xl flex items-center justify-center text-xl font-bold text-background " + (lang?.colorClass || "bg-muted")}>{lang?.logo}</div>
                      <span>{lang?.name || "Select a language"}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {lang && (
                      <>
                        <div className="flex items-center gap-2">
                          <Badge className="rounded-xl" variant="secondary">{lang.category}</Badge>
                          <Badge className="rounded-xl">{lang.difficulty}</Badge>
                          <span className="text-sm text-muted-foreground">Popularity: {lang.popularity}/5</span>
                        </div>
                        <p className="text-muted-foreground">{lang.description}</p>
                        <div>
                          <h3 className="font-semibold mb-2">Use Cases</h3>
                          <div className="flex flex-wrap gap-2">
                            {lang.useCases.map((u, idx) => (
                              <Badge key={idx} variant="outline" className="rounded-xl">{u}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Advantages</h3>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {lang.advantages.map((a, idx) => (
                              <li key={idx}>{a}</li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Compare;
