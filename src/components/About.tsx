import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, GraduationCap, Coffee } from "lucide-react";

const About = () => {
  const skills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 55 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Git", level: 75 },
    { name: "UI/UX", level: 70 }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer weaving digital experiences with code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-6 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-muted-foreground">
                Currently pursuing Computer Science Engineering at 
                <span className="font-medium text-foreground"> ABES Engineering College</span>, 
                where I'm building strong foundations in software development and problem-solving.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-secondary mr-3" />
                <h3 className="text-xl font-semibold">Development Focus</h3>
              </div>
              <p className="text-muted-foreground">
                Specializing in frontend development with React, creating responsive and 
                user-friendly interfaces. I love turning design concepts into interactive, 
                performant web applications.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="flex items-center mb-4">
                <Coffee className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">When I'm Not Coding</h3>
              </div>
              <p className="text-muted-foreground">
                You'll find me exploring the latest web technologies, contributing to open source, 
                or binge-watching superhero movies for inspiration. 
               
              </p>
            </Card>
          </div>

          {/* Right Content - Skills */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              Tech <span className="text-secondary">Stack</span>
            </h3>
            
            {/* Skills with Progress Bars */}
            <div className="space-y-4 mb-8">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-muted"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill.name} 
                  variant="outline" 
                  className="px-3 py-1 text-xs border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
            
            <div className="p-6 bg-gradient-card rounded-lg shadow-elegant">
              <p className="text-muted-foreground text-center lg:text-left">
                <span className="font-semibold text-primary">"The web is my canvas,</span>
                <br />
                <span className="font-semibold text-secondary">and code is my brush"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;