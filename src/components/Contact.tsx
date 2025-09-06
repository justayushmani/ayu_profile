import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's build something amazing together! Drop me a message and let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect!</h3>
              <p className="text-muted-foreground mb-8">
                I'm always excited to discuss new opportunities, collaborate on projects, 
                or just chat about technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-sm text-muted-foreground">ayushmanitiwari931@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-sm text-muted-foreground">+91 sorry not public 😒</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-sm text-muted-foreground">ABES Engineering College, Ghaziabad</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-card rounded-lg p-6 shadow-elegant">
              <p className="text-center text-muted-foreground">
                <span className="text-primary font-semibold">"Your friendly neighborhood developer"</span>
                <br />
                Ready to swing into action! 🕷️
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-elegant animate-slide-up">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input 
                      placeholder="Your first name" 
                      className="border-border/50 focus:border-primary transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input 
                      placeholder="Your last name" 
                      className="border-border/50 focus:border-primary transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="border-border/50 focus:border-primary transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    placeholder="What's this about?" 
                    className="border-border/50 focus:border-primary transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or just say hi!" 
                    rows={5}
                    className="border-border/50 focus:border-primary transition-colors duration-200 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;