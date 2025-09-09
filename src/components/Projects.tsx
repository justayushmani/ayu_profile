import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Netflix UI Clone",
      description: "A pixel-perfect recreation of Netflix's user interface with responsive design .",
      tech: ["CSS3","HTML", "Responsive Design"],
      features: ["Responsive layout", "Modern UI/UX"], 
      gradient: "from-red-500 to-red-700",
      icon: "🎬",
      demoLink: "https://github.com/justayushmani/netflix-clone",
      codeLink: "https://github.com/justayushmani/netflix-clone"
    },
    {
      title: "Spotify Clone",
      description: "Music streaming interface clone featuring playlist management, audio controls, and sleek design inspired by Spotify.",
      tech: ["HTML", "CSS3", "JavaScript"],
      features: ["Music player", "Audio controls", "Dark theme"],
      gradient: "from-green-500 to-green-700", 
      icon: "🎵",
      demoLink: "https://justayushmani.github.io/spotify-clone/", 
      codeLink: "https://github.com/justayushmani/spotify-clone"
    },
    {
      title: "X (Twitter) Clone",
      description: "Social media platform interface .",
      tech: ["React", "CSS3", "JavaScript"],
      features: [ "User profiles", "Timeline feed"],
      gradient: "from-blue-500 to-blue-700", 
      icon: "🐦",
      demoLink: "https://github.com/justayushmani/X-_UI_clone", 
      codeLink: "https://github.com/justayushmani/X-_UI_clone" 
        }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building digital experiences that matter, one project at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Icon Header */}
              <div className={`h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl opacity-20 absolute -right-4 -top-4 transform rotate-12">
                  {project.icon}
                </div>
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs px-2 py-1 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Key Features:</h4>
                  <ul className="text-xs space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-hero hover:shadow-glow transition-all duration-300" 
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    <Play className="h-3 w-3 mr-1" />
                    Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-secondary/30 hover:border-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300" 
                    onClick={() => window.open(project.codeLink, '_blank')}
                  >
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Spider web decoration */}
        <div className="text-center mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-32 h-32 border-2 border-primary rounded-full animate-web-spin" style={{ animationDuration: '30s' }}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 border border-primary rounded-full">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground relative z-10">
            More amazing projects coming soon! 🕸️
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;