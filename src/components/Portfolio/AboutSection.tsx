import { User, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const highlights = [
    {
      icon: User,
      title: "Who I Am",
      description: "AI/ML enthusiast and full-stack developer passionate about creating innovative solutions"
    },
    {
      icon: Target,
      title: "What I Do",
      description: "Build intelligent applications, develop machine learning models, and create seamless user experiences"
    },
    {
      icon: Lightbulb,
      title: "My Approach",
      description: "Problem-solving focused with strong attention to detail and collaborative mindset"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Passionate about Technology & Innovation
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a dedicated AI/ML student with hands-on experience in machine learning models, 
              AI algorithms, and full-stack development. My journey in technology is driven by 
              curiosity and a desire to solve real-world problems through innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With strong problem-solving skills and a collaborative mindset, I'm eager to 
              contribute to cutting-edge tech projects that make a positive impact. I believe 
              in continuous learning and staying updated with the latest technological advancements.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                Problem Solver
              </div>
              <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                Team Collaborator
              </div>
              <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                Quick Learner
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};