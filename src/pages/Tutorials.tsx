import { useMemo, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, Filter, ArrowRight } from "lucide-react";
import { languages } from "@/data/languages";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const useQuery = () => new URLSearchParams(useLocation().search);

const Tutorials = () => {
  const query = useQuery();
  const initialLang = query.get("lang") || "";
  const [searchTerm, setSearchTerm] = useState(initialLang);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<typeof languages[number] | null>(null);

  useEffect(() => {
    if (initialLang) setSearchTerm(initialLang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLang]);

  const categories = useMemo(
    () => ["All", ...new Set(languages.map(l => l.category))],
    []
  );

  const filtered = useMemo(() => {
    return languages.filter(l => {
      const bySearch = l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       l.description.toLowerCase().includes(searchTerm.toLowerCase());
      const byCategory = selectedCategory === "All" || l.category === selectedCategory;
      return bySearch && byCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4 leading-tight">Interactive Tutorials</h1>
            </ScrollReveal>
            <ScrollReveal delayClassName="reveal-delay-1">
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Learn by doing. Pick a language to explore step-by-step tutorials and run examples.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mb-10 space-y-6">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="relative flex-1 max-w-lg">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Search languages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-12 text-base rounded-2xl border-border/50 bg-background/80 backdrop-blur-sm smooth-focus"
                  />
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center space-x-3">
                    <Filter className="w-5 h-5 text-muted-foreground" />
                    <span className="text-base font-medium text-muted-foreground">Category:</span>
                  </div>
                  {categories.map((c) => (
                    <Badge
                      key={c}
                      variant={selectedCategory === c ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary/10 transition-all duration-300 px-4 py-2 text-sm rounded-xl"
                      onClick={() => setSelectedCategory(c)}
                    >
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((lang, idx) => (
              <ScrollReveal key={lang.id} delayClassName={`reveal-delay-${(idx % 3) + 1}`}>
                <Card className="soft-card hover-lift border-0 bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{lang.name} Tutorials</span>
                      <Badge variant="outline" className="rounded-xl">{lang.category}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{lang.longDescription}</p>
                    <div className="space-y-2 mb-6">
                      {lang.learningPath.slice(0, 4).map((step, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                          <div className="w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold">{i+1}</div>
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" onClick={() => { setActiveLang(lang); setOpen(true); }}>
                      <BookOpen className="w-4 h-4 mr-2" />
                      Open Tutorial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Tutorial Modal */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{activeLang ? `${activeLang.name} Tutorial` : "Tutorial"}</DialogTitle>
                <DialogDescription>
                  {activeLang?.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                {activeLang && (
                  <>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">What you'll learn</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {activeLang.learningPath.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Hello world example</h3>
                      <pre className="w-full p-4 rounded-xl bg-secondary/40 font-mono text-sm overflow-auto whitespace-pre-wrap border border-border/50">
                        {activeLang.helloWorld}
                      </pre>
                    </div>
                  </>
                )}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
                {activeLang && (
                  <Button asChild>
                    <Link to={`/editor?lang=${activeLang.id}`}>Start in Editor</Link>
                  </Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tutorials;
