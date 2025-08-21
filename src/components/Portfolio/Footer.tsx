import { Heart, ArrowUp, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Mohammed Suhail</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              AI/ML Enthusiast & Full-Stack Developer passionate about creating 
              innovative solutions that make a positive impact.
            </p>
            <Button
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "About Me", id: "about" },
                { label: "Skills", id: "skills" },
                { label: "Projects", id: "projects" },
                { label: "Experience", id: "experience" },
                { label: "Education", id: "education" },
                { label: "Contact", id: "contact" }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a 
                  href="mailto:suhailcs035@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  suhailcs035@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-secondary" />
                <a 
                  href="https://github.com/Shaikmdsuhail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  GitHub Portfolio
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-secondary" />
                <a 
                  href="https://linkedin.com/in/mohammed-suhail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 mb-4 md:mb-0">
              <span className="text-primary-foreground/80">Built with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span className="text-primary-foreground/80">by Mohammed Suhail</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/60 text-sm">
                © {currentYear} All rights reserved.
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};