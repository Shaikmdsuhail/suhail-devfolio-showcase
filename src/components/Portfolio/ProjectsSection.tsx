import { Github, ExternalLink, Code, Smartphone, Brain } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import projectReportIt from "@/assets/project-report-it.jpg";
import projectAiAssistant from "@/assets/project-ai-assistant.jpg";
import projectLearningPlatform from "@/assets/project-learning-platform.jpg";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Report It - Sustainable Reporting App",
      description: "A comprehensive Flutter-based mobile application for civic issue reporting with Firebase backend integration and Google Maps functionality for location-based reporting.",
      image: projectReportIt,
      icon: Smartphone,
      technologies: ["Flutter", "Firebase", "Google Maps API", "Dart", "Cloud Firestore"],
      github: "https://github.com/Shaikmdsuhail/report-it",
      features: [
        "Real-time civic issue reporting",
        "Location-based issue tracking",
        "Photo upload and documentation", 
        "Community engagement features"
      ]
    },
    {
      title: "AI Voice Assistant for PC",
      description: "Python-based intelligent voice assistant with advanced speech recognition, natural language processing, and system control capabilities for desktop automation.",
      image: projectAiAssistant,
      icon: Brain,
      technologies: ["Python", "Speech Recognition", "NLP", "Text-to-Speech", "API Integration"],
      github: "https://github.com/Shaikmdsuhail/ai-voice-assistant",
      features: [
        "Voice command processing",
        "Application and web control",
        "Natural conversation flow",
        "System automation features"
      ]
    },
    {
      title: "Gamified Learning Platform",
      description: "Interactive React-based learning platform with Node.js backend featuring coding challenges, progress tracking, achievement systems, and personalized learning paths.",
      image: projectLearningPlatform,
      icon: Code,
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Socket.io"],
      github: "https://github.com/Shaikmdsuhail/gamified-learning",
      features: [
        "Interactive coding challenges",
        "Real-time progress tracking",
        "Achievement and rewards system",
        "Collaborative learning features"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-secondary/20 p-4 rounded-full">
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-primary text-sm">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-secondary hover:bg-secondary-dark transition-colors duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};