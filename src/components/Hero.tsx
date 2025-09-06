import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-web-pattern opacity-30"
        style={{ backgroundSize: '40px 40px' }}
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-glow transition-transform duration-300 hover:scale-105">
              <img 
                src={profileImage} 
                alt="Ayush Mani Tiwari"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary/20 rounded-full animate-web-spin" />
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Ayush Mani Tiwari
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4 font-medium">
            Frontend Developer
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Computer Science Student at ABES Engineering College learning React development. 
            Building amazing web experiences with modern technologies.
          </p>
          
          <p className="text-sm text-primary font-medium mb-8">
            🕷️ "With great code comes great responsibility"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = "mailto:ayushmanitiwari931@gmail.com"}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary/30 hover:border-primary hover:shadow-blue transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-200">
             
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-200" onClick={() => window.open('https://github.com/justayushmani', '_blank')}>
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-200" onClick={() => window.open('https://www.linkedin.com/in/ayush-mani-tiwari-b6369b344/', '_blank')}>
              <Linkedin className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;