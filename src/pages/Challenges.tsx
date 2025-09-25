import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trophy, Search, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { languages } from "@/data/languages";

const Challenges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const challenges = useMemo(() => {
    // Derive simple challenges from language data
    return languages.map(l => ({
      id: `${l.id}-starter`,
      title: `${l.name} Starter Challenge`,
      description: `Solve beginner-friendly tasks to get comfortable with ${l.name} syntax and patterns.`,
      difficulty: l.difficulty,
      langId: l.id,
      langName: l.name,
    }));
  }, []);

  const filtered = useMemo(() => {
    return challenges.filter(c => {
      const bySearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       c.description.toLowerCase().includes(searchTerm.toLowerCase());
      const byDifficulty = difficulty === "All" || c.difficulty === difficulty;
      return bySearch && byDifficulty;
    });
  }, [challenges, searchTerm, difficulty]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4 leading-tight">Coding Challenges</h1>
            </ScrollReveal>
            <ScrollReveal delayClassName="reveal-delay-1">
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Practice with curated challenges by language and difficulty. Track your progress and improve.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mb-10 flex flex-col md:flex-row gap-6 items-center md:items-end">
              <div className="relative w-full md:max-w-lg">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search challenges..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 text-base rounded-2xl border-border/50 bg-background/80 backdrop-blur-sm smooth-focus"
                />
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-base font-medium text-muted-foreground">Difficulty:</span>
                {difficulties.map(d => (
                  <Badge
                    key={d}
                    variant={difficulty === d ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10 transition-all duration-300 px-4 py-2 text-sm rounded-xl"
                    onClick={() => setDifficulty(d)}
                  >
                    {d}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filtered.map((c, idx) => (
              <ScrollReveal key={c.id} delayClassName={`reveal-delay-${(idx % 3) + 1}`}>
                <Card className="soft-card hover-lift border-0 bg-background/80 backdrop-blur-sm h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2"><Trophy className="w-5 h-5 text-primary" />{c.title}</span>
                      <Badge className="rounded-xl" variant="secondary">{c.difficulty}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <p className="text-muted-foreground mb-6">{c.description}</p>
                    <Button asChild className="w-full mt-auto">
                      <Link to={`/editor?lang=${c.langId}&challenge=${c.id}`} className="flex items-center justify-center space-x-2">
                        <Target className="w-4 h-4" />
                        <span>Start Challenge</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
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

export default Challenges;
