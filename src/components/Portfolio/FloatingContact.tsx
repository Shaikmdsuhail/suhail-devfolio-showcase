import { useState } from "react";
import { MessageCircle, X, Mail, Github, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    {
      icon: MessageCircle,
      label: "Contact Form",
      action: () => {
        scrollToContact();
        setIsOpen(false);
      },
      color: "hover:bg-secondary/20 hover:text-secondary"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:suhailcs035@gmail.com",
      color: "hover:bg-primary/20 hover:text-primary"
    },
    {
      icon: Phone,
      label: "Call",
      href: "tel:+919902608635",
      color: "hover:bg-secondary/20 hover:text-secondary"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/Shaikmdsuhail",
      color: "hover:bg-accent/20 hover:text-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohammed-suhail",
      color: "hover:bg-primary-light/20 hover:text-primary-light"
    }
  ];

  return (
    <div 
      className="fixed bottom-6 right-6 z-50"
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Quick Links Card */}
      {isOpen && (
        <Card className="mb-4 shadow-xl animate-slide-up">
          <CardContent className="p-4">
            <h4 className="font-semibold text-primary mb-3 text-center">
              Let's Connect!
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`w-full justify-start transition-all duration-200 ${link.color}`}
                  onClick={() => {
                    if (link.action) {
                      link.action();
                    } else if (link.href) {
                      window.open(link.href, link.href.startsWith('http') ? '_blank' : '_self');
                      setIsOpen(false);
                    }
                  }}
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating Action Button */}
      <Button
        onClick={() => {
          if (!isOpen) {
            scrollToContact();
          } else {
            setIsOpen(false);
          }
        }}
        onMouseEnter={() => setIsOpen(true)}
        className="h-14 w-14 rounded-full bg-secondary hover:bg-secondary-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};