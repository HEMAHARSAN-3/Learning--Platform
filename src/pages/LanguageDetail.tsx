import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getLanguageById } from "@/data/languages";
import { 
  ArrowLeft, 
  Star, 
  Play, 
  BookOpen, 
  Trophy, 
  History, 
  Lightbulb,
  Target,
  Code,
  CheckCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const LanguageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const language = id ? getLanguageById(id) : null;

  if (!language) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Language Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The programming language you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/languages">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Languages
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Advanced":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <ScrollReveal>
            <Button variant="ghost" asChild className="mb-8 hover-lift rounded-xl px-4">
              <Link to="/languages">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Languages
              </Link>
            </Button>
          </ScrollReveal>

          {/* Header */}
          <div className="mb-12">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 mb-8">
                <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center text-4xl font-bold text-background", language.colorClass)}>
                  {language.logo}
                </div>
                <div className="flex-1">
                  <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4 leading-tight">
                    {language.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4">
                    <Badge className={getDifficultyColor(language.difficulty)}>
                      {language.difficulty}
                    </Badge>
                    <Badge variant="outline" className="px-4 py-2 rounded-xl">{language.category}</Badge>
                    <div className="flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-xl">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold">{language.popularity}/5</span>
                    </div>
                    {language.trending && (
                      <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-xl">
                        Trending
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delayClassName="reveal-delay-1">
              <p className="text-xl text-muted-foreground mb-10 max-w-4xl leading-relaxed">
                {language.longDescription}
              </p>
            </ScrollReveal>

            <ScrollReveal delayClassName="reveal-delay-2">
              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="soft-glow px-8">
                  <Link to={`/editor?lang=${language.id}`}>
                    <Play className="w-5 h-5 mr-2" />
                    Try Interactive Tutorial
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover-lift px-8">
                  <Link to={`/editor?lang=${language.id}`}>
                    <Code className="w-5 h-5 mr-2" />
                    Open Code Editor
                  </Link>
                </Button>
                <Button asChild variant="soft" size="lg" className="hover-lift px-8">
                  <Link to={`/challenges?lang=${language.id}`}>
                    <Trophy className="w-5 h-5 mr-2" />
                    View Challenges
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-12 p-1 bg-muted/50 rounded-2xl">
              <TabsTrigger value="overview" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm">Overview</TabsTrigger>
              <TabsTrigger value="syntax" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm">Syntax</TabsTrigger>
              <TabsTrigger value="examples" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm">Examples</TabsTrigger>
              <TabsTrigger value="history" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm">History</TabsTrigger>
              <TabsTrigger value="learning" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm">Learning Path</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Use Cases */}
                <ScrollReveal>
                  <Card className="soft-card border-0 bg-background/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-xl">
                        <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <Target className="w-5 h-5 text-primary" />
                        </div>
                        <span>Use Cases</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {language.useCases.map((useCase, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 rounded-xl bg-muted/30">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-base leading-relaxed">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                {/* Advantages */}
                <ScrollReveal delayClassName="reveal-delay-1">
                  <Card className="soft-card border-0 bg-background/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-xl">
                        <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <Lightbulb className="w-5 h-5 text-primary" />
                        </div>
                        <span>Key Advantages</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {language.advantages.map((advantage, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 rounded-xl bg-muted/30">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-base leading-relaxed">{advantage}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>

              {/* Real World Applications */}
              <ScrollReveal>
                <Card className="soft-card border-0 bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl">Real-World Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Major companies and applications built with {language.name}:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {language.realWorldApps.map((app, index) => (
                        <Badge key={index} variant="secondary" className="px-4 py-2 text-sm rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </TabsContent>

            <TabsContent value="syntax" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(language.syntax).map(([key, value], idx) => (
                  <ScrollReveal key={key} delayClassName={`reveal-delay-${(idx % 3) + 1}`}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="capitalize">{key}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                          <code className="text-sm font-mono">{value}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="examples" className="space-y-6">
              <ScrollReveal>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Hello World Example</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-secondary/50 p-6 rounded-lg overflow-x-auto">
                      <code className="text-sm font-mono whitespace-pre-wrap">
                        {language.helloWorld}
                      </code>
                    </pre>
                    <Button asChild className="mt-4 hover:glow-primary transition-all duration-300">
                      <Link to={`/editor?lang=${language.id}`}>
                        <Play className="w-4 h-4 mr-2" />
                        Run This Code
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <ScrollReveal>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <History className="w-5 h-5 text-primary" />
                      <span>History & Background</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {language.history}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </TabsContent>

            <TabsContent value="learning" className="space-y-6">
              <ScrollReveal>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span>Recommended Learning Path</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {language.learningPath.map((step, index) => (
                        <div 
                          key={index} 
                          className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-lg hover-lift cursor-pointer"
                        >
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                            {index + 1}
                          </div>
                          <span className="font-medium">{step}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                      <Button asChild size="lg" className="hover:glow-primary transition-all duration-300">
                        <Link to={`/tutorials?lang=${language.id}`}>
                          <BookOpen className="w-5 h-5 mr-2" />
                          Start Learning Path
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LanguageDetail;