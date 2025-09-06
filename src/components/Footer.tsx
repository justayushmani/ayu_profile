import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
              Ayush Mani Tiwari
            </h3>
            <p className="text-background/80 text-sm">
              Frontend Developer & Student
            </p>
            <p className="text-background/60 text-xs mt-1">
              🕷️ Building the web, one component at a time
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-4">
           <Button 
  variant="ghost" 
  size="icon" 
  className="text-background hover:text-primary hover:bg-background/10 transition-all duration-200 hover:scale-110"
  onClick={() => window.open('https://github.com/justayushmani', '_blank')}
>
  <Github className="h-5 w-5" />
</Button>
<Button 
  variant="ghost" 
  size="icon" 
  className="text-background hover:text-primary hover:bg-background/10 transition-all duration-200 hover:scale-110"
  onClick={() => window.open('https://www.linkedin.com/in/ayush-mani-tiwari-b6369b344/', '_blank')}
>
  <Linkedin className="h-5 w-5" />
</Button>
<Button 
  variant="ghost" 
  size="icon" 
  className="text-background hover:text-primary hover:bg-background/10 transition-all duration-200 hover:scale-110"
  onClick={() => window.location.href = "mailto:ayushmanitiwari931@gmail.com"}
>
  <Mail className="h-5 w-5" />
</Button>
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-background/80 text-sm flex items-center justify-center md:justify-end">
              Made with <Heart className="h-4 w-4 text-primary mx-1" /> 
              love
            </p>
            <p className="text-background/60 text-xs mt-1">
              © 2025 Ayush Mani Tiwari. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Border with Web Pattern */}
        <div className="mt-8 pt-8 border-t border-background/20 text-center">
          <p className="text-background/60 text-xs">
            "With great code comes great responsibility" - Uncle Ben (probably)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;