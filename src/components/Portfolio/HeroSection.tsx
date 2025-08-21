import { useState, useEffect } from "react";
import { ChevronDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "AI/ML Enthusiast • Full-Stack Developer • Problem Solver";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center hero-particles overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(220, 50, 15, 0.85), rgba(180, 80, 45, 0.85)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary/10 rounded-full animate-float" />
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Mohammed <span className="text-gradient">Suhail</span>
          </h1>
          
          <div className="h-12 mb-8">
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              {displayText}<span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate AI/ML student with hands-on experience in ML models, AI algorithms, 
            and full-stack development. Strong problem-solving skills, eager to contribute 
            to innovative tech projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg backdrop-blur-sm"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light transition-all duration-300 shadow-lg"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Connect
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-accent text-accent-foreground hover:bg-accent-light transition-all duration-300 shadow-lg"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="mailto:suhailcs035@gmail.com" 
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/Shaikmdsuhail" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/mohammed-suhail" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer animate-bounce"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </section>
  );
};