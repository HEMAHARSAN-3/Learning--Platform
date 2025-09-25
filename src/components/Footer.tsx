import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border/50 bg-background/60">
      <div className="container mx-auto px-6 py-14">
        {/* Top: brand + links + newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h4 className="text-xl font-semibold mb-3 gradient-text">CodeCraft</h4>
            <p className="text-sm text-muted-foreground">
              Learn, practice, and compare programming languages with a modern, minimalist experience.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a aria-label="GitHub" className="p-2 rounded-lg border border-border/50 hover:bg-muted/40 transition-colors" href="#"><Github className="w-4 h-4" /></a>
              <a aria-label="Twitter" className="p-2 rounded-lg border border-border/50 hover:bg-muted/40 transition-colors" href="#"><Twitter className="w-4 h-4" /></a>
              <a aria-label="LinkedIn" className="p-2 rounded-lg border border-border/50 hover:bg-muted/40 transition-colors" href="#"><Linkedin className="w-4 h-4" /></a>
              <a aria-label="Email" className="p-2 rounded-lg border border-border/50 hover:bg-muted/40 transition-colors" href="#"><Mail className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h5 className="font-medium mb-3">Product</h5>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:underline" to="/">Home</Link></li>
              <li><Link className="hover:underline" to="/languages">Languages</Link></li>
              <li><Link className="hover:underline" to="/tutorials">Tutorials</Link></li>
              <li><Link className="hover:underline" to="/challenges">Challenges</Link></li>
              <li><Link className="hover:underline" to="/compare">Compare</Link></li>
              <li><Link className="hover:underline" to="/editor">Compiler</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-medium mb-3">Resources</h5>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:underline" href="#">Docs</a></li>
              <li><a className="hover:underline" href="#">Community</a></li>
              <li><a className="hover:underline" href="#">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-medium mb-3">Stay in the loop</h5>
            <p className="text-sm text-muted-foreground mb-3">Get updates on new tutorials, challenges, and features.</p>
            <div className="flex items-center gap-2">
              <Input placeholder="you@example.com" type="email" className="rounded-xl" />
              <Button className="rounded-xl">Subscribe</Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom: legal + back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CodeCraft. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="#">Privacy</a>
            <a className="hover:underline" href="#">Terms</a>
            <a className="hover:underline" href="#">Contact</a>
            <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/50 hover:bg-muted/40 transition-colors">
              <ArrowUp className="w-4 h-4" />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
