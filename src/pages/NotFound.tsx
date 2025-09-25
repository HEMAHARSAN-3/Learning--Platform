import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center min-h-[70vh]">
            <ScrollReveal>
              <Card className="soft-card max-w-2xl w-full text-center border-0 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-12 space-y-8">
                  {/* 404 Illustration */}
                  <div className="w-32 h-32 mx-auto mb-8 bg-muted/30 rounded-3xl flex items-center justify-center">
                    <Search className="w-16 h-16 text-muted-foreground" />
                  </div>
                  
                  {/* Error Message */}
                  <div className="space-y-4">
                    <h1 className="text-8xl font-bold gradient-text">404</h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Page Not Found
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-md mx-auto">
                      Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Button size="lg" asChild className="soft-glow px-8">
                      <Link to="/" className="flex items-center space-x-2">
                        <Home className="w-5 h-5" />
                        <span>Go Home</span>
                      </Link>
                    </Button>
                    
                    <Button variant="outline" size="lg" asChild className="hover-lift px-8">
                      <Link to="/languages" className="flex items-center space-x-2">
                        <ArrowLeft className="w-5 h-5" />
                        <span>Browse Languages</span>
                      </Link>
                    </Button>
                  </div>

                  {/* Help Text */}
                  <div className="pt-8 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      Need help? Try searching for what you're looking for or visit our{" "}
                      <Link to="/languages" className="text-primary hover:underline font-medium">
                        languages page
                      </Link>{" "}
                      to explore our content.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;