import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Github, Lock, LogIn } from "lucide-react";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto">
              <Card className="soft-card border-0 bg-background/80 backdrop-blur-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left - Brand / Messaging */}
                  <div className="hidden md:block bg-[image:var(--gradient-hero)] bg-no-repeat bg-cover p-10">
                    <div className="h-full w-full rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6">
                      <div className="flex items-center gap-2 text-primary">
                        <LogIn className="w-5 h-5" />
                        <span className="text-sm font-medium">Welcome back</span>
                      </div>
                      <h2 className="mt-4 text-3xl font-bold tracking-tight">Sign in to continue learning</h2>
                      <p className="mt-2 text-muted-foreground">
                        Access your saved progress, challenges, and personalized roadmap.
                      </p>
                      <ul className="mt-6 space-y-3 text-sm">
                        <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Track your progress</li>
                        <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Save code snippets</li>
                        <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Compete in challenges</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right - Form */}
                  <div className="p-6 md:p-10">
                    <div className="mb-6">
                      <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
                      <p className="text-sm text-muted-foreground mt-1">Use your email and password or continue with a provider.</p>
                    </div>

                    <CardContent className="p-0 space-y-5">
                      <div>
                        <Label htmlFor="email" className="text-sm">Email</Label>
                        <div className="mt-1">
                          <Input id="email" type="email" placeholder="you@example.com" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password" className="text-sm">Password</Label>
                          <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
                        </div>
                        <div className="mt-1">
                          <Input id="password" type="password" placeholder="••••••••" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox id="remember" />
                          <Label htmlFor="remember" className="text-sm">Remember me</Label>
                        </div>
                        <div className="text-xs text-muted-foreground">New here? <a className="text-primary hover:underline" href="#">Create account</a></div>
                      </div>

                      <Button className="w-full">
                        <Lock className="w-4 h-4 mr-2" /> Continue
                      </Button>

                      <div className="relative">
                        <Separator className="my-2" />
                        <div className="absolute inset-0 -mt-3 flex items-center justify-center">
                          <span className="bg-background px-2 text-xs text-muted-foreground">or</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Button variant="outline" className="w-full">
                          <Mail className="w-4 h-4 mr-2" /> Continue with Email link
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Github className="w-4 h-4 mr-2" /> Continue with GitHub
                        </Button>
                      </div>

                      <p className="text-xs text-muted-foreground text-center">
                        By continuing, you agree to our <a href="#" className="text-primary hover:underline">Terms</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
