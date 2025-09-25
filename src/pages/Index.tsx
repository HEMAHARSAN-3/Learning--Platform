import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import LanguageCard from "@/components/LanguageCard";
import { languages, getTrendingLanguages } from "@/data/languages";
import { ArrowRight, Code2, Users, BookOpen, Trophy, Star, TrendingUp, Zap, Target, MonitorPlay } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const trendingLanguages = getTrendingLanguages();
  const featuredLanguages = languages.slice(0, 6);

  const stats = [
    { label: "Programming Languages", value: "15+", icon: Code2 },
    { label: "Active Learners", value: "50K+", icon: Users },
    { label: "Interactive Tutorials", value: "200+", icon: BookOpen },
    { label: "Coding Challenges", value: "500+", icon: Trophy },
  ];

  const features = [
    {
      icon: Zap,
      title: "Interactive Learning",
      description: "Learn by doing with our hands-on code editor and real-time feedback."
    },
    {
      icon: Target,
      title: "Structured Path",
      description: "Follow curated learning paths from beginner to advanced levels."
    },
    {
      icon: Trophy,
      title: "Challenges & Projects",
      description: "Test your skills with coding challenges and build real-world projects."
    },
    {
      icon: Star,
      title: "Compare Languages",
      description: "Side-by-side comparisons to help you choose the right language."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 -z-10">
          <img src={heroImage} alt="CodeCraft background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-[32rem] h-[32rem] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-blue-400/10 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left: Headline and CTAs */}
            <div className="text-center lg:text-left lg:ml-8 xl:ml-16">
              <ScrollReveal>
                <Badge className="mb-8 inline-flex px-6 py-3 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Now with 15+ Programming Languages
                </Badge>
              </ScrollReveal>
              
              <ScrollReveal delayClassName="reveal-delay-1">
                <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-6 gradient-text leading-tight">
                  Master Every
                  <br />
                  Programming Language
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delayClassName="reveal-delay-2">
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
                  Explore, learn, and compare programming languages with interactive tutorials, 
                  real-world projects, and hands-on coding challenges.
                </p>
              </ScrollReveal>

              <ScrollReveal delayClassName="reveal-delay-3">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    asChild 
                    className="text-lg px-8 py-4 soft-glow"
                  >
                    <Link to="/languages" className="flex items-center space-x-2">
                      <span>Start Learning</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild 
                    className="text-lg px-8 py-4 hover-lift"
                  >
                    <Link to="/compare" className="flex items-center space-x-2">
                      <Code2 className="w-5 h-5" />
                      <span>Compare Languages</span>
                    </Link>
                  </Button>

                  <Button 
                    variant="soft" 
                    size="lg" 
                    asChild 
                    className="text-lg px-8 py-4 hover-lift"
                  >
                    <Link to="/editor?lang=javascript" className="flex items-center space-x-2">
                      <MonitorPlay className="w-5 h-5" />
                      <span>Try Playground</span>
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Code preview card (shifted further right) */}
            <ScrollReveal delayClassName="reveal-delay-2">
              <Card className="soft-card border-0 bg-background/80 backdrop-blur-md shadow-xl max-w-md w-full mx-auto lg:mx-0 lg:ml-16 xl:ml-28">
                <CardHeader className="py-4 px-4">
                  <CardTitle className="text-left text-sm text-muted-foreground">Hello World in JavaScript</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-4 pb-4">
                  <pre className="bg-secondary/50 p-4 rounded-xl overflow-x-auto text-left">
                    <code className="text-xs font-mono whitespace-pre leading-6">
{`function greet(name) {
  return \`Hello, ${name}!\`;
}

console.log(greet('CodeCraft'));`}
                    </code>
                  </pre>
                  <div className="mt-3">
                    <Button asChild size="sm" className="w-full">
                      <Link to="/editor?lang=javascript" className="flex items-center justify-center">
                        <MonitorPlay className="w-4 h-4 mr-2" />
                        Run in Playground
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 md:mt-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={index} delayClassName={`reveal-delay-${(index % 3) + 1}`}>
                  <div className="text-center p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover-scale">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">CodeCraft</span>?
              </h2>
            </ScrollReveal>
            <ScrollReveal delayClassName="reveal-delay-1">
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Everything you need to master programming languages in one comprehensive, modern platform designed for learners of all levels.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={index} delayClassName={`reveal-delay-${(index % 3) + 1}`}>
                  <Card className="soft-card hover-lift text-center border-0 bg-background/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-3xl flex items-center justify-center">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-4">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trending Languages */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">Trending</span> Languages
                </h2>
              </ScrollReveal>
              <ScrollReveal delayClassName="reveal-delay-1">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Most popular languages in the developer community right now. Start with what's hot and in-demand.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delayClassName="reveal-delay-2">
              <Button variant="soft" asChild className="hover-lift flex-shrink-0">
                <Link to="/languages">
                  View All Languages
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingLanguages.map((language, idx) => (
              <ScrollReveal key={language.id} delayClassName={`reveal-delay-${(idx % 3) + 1}`}>
                <LanguageCard {...language} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Languages Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Explore All <span className="gradient-text">Languages</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delayClassName="reveal-delay-1">
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From web development to data science, mobile apps to machine learning - find the perfect language for your goals and career aspirations.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredLanguages.map((language, idx) => (
              <ScrollReveal key={language.id} delayClassName={`reveal-delay-${(idx % 3) + 1}`}>
                <LanguageCard {...language} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <ScrollReveal>
              <Button size="lg" asChild className="soft-glow">
                <Link to="/languages" className="flex items-center space-x-2">
                  <span>Explore All Languages</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <Card className="border-0 overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm soft-card">
              <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-[24rem] h-[24rem] rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
              <CardContent className="relative p-10 md:p-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  {/* Left: Headline + subcopy + buttons */}
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text leading-tight">
                      Ready to Start Your Coding Journey?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed max-w-xl">
                      Join thousands of learners building real skills with interactive tutorials,
                      guided paths, and hands‑on practice. Start free — no credit card required.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
                      <Button size="lg" asChild className="soft-glow text-lg px-8">
                        <Link to="/languages" className="flex items-center space-x-2">
                          <span>Get Started Free</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild className="hover-lift text-lg px-8">
                        <Link to="/tutorials" className="flex items-center space-x-2">
                          <BookOpen className="w-5 h-5" />
                          <span>Browse Tutorials</span>
                        </Link>
                      </Button>
                    </div>
                    {/* Trust bar */}
                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2"><Users className="w-4 h-4" /> 50K+ learners</div>
                      <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Rated 4.9/5</div>
                      <div className="flex items-center gap-2"><Trophy className="w-4 h-4" /> 500+ challenges</div>
                    </div>
                  </div>

                  {/* Right: Benefits list card */}
                  <div className="rounded-2xl bg-background/70 border border-border/50 p-6 md:p-8 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">What you’ll get</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                          <Zap className="w-4 h-4" />
                        </div>
                        <p className="leading-relaxed">Interactive editor with instant feedback</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                          <Target className="w-4 h-4" />
                        </div>
                        <p className="leading-relaxed">Structured paths from beginner to advanced</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                          <Trophy className="w-4 h-4" />
                        </div>
                        <p className="leading-relaxed">Daily challenges and real‑world projects</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <p className="leading-relaxed">Compare languages and pick the best for you</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
