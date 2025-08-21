import { Trophy, Star, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "3rd Place - College Hackathon",
      description: "Secured third position in competitive college hackathon for innovative problem-solving approach and technical implementation",
      category: "Competition",
      year: "2024",
      details: [
        "Developed innovative solution under time constraints",
        "Demonstrated strong problem-solving skills",
        "Effective team collaboration and leadership",
        "Technical excellence in implementation"
      ]
    },
    {
      icon: Star,
      title: "Academic Excellence",
      description: "Consistent high academic performance throughout educational journey with strong CGPA maintenance",
      category: "Academic",
      year: "Ongoing",
      details: [
        "8.61 CGPA in B.Tech program",
        "8.90 CGPA in Diploma program", 
        "Consistent top performer in technical subjects",
        "Active participation in academic projects"
      ]
    },
    {
      icon: Target,
      title: "Project Innovation",
      description: "Successfully delivered multiple innovative projects combining AI/ML, web development, and mobile technologies",
      category: "Technical",
      year: "2023-2024",
      details: [
        "AI Voice Assistant with advanced NLP capabilities",
        "Sustainable reporting mobile application",
        "Gamified learning platform with real-time features",
        "Integration of cutting-edge technologies"
      ]
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Rapid skill development through internships and hands-on experience in software development and testing",
      category: "Professional",
      year: "2023-2024",
      details: [
        "Frontend development expertise at Nexusinfo",
        "Quality assurance and testing experience",
        "Cross-browser compatibility optimization", 
        "API integration and performance enhancement"
      ]
    }
  ];

  const categoryColors = {
    Competition: "bg-accent/20 text-accent border-accent/30",
    Academic: "bg-secondary/20 text-secondary border-secondary/30",
    Technical: "bg-primary/20 text-primary border-primary/30",
    Professional: "bg-primary-light/20 text-primary-light border-primary-light/30"
  };

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Achievements & Milestones</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and accomplishments that showcase dedication and growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-secondary/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {achievement.year}
                      </span>
                    </div>
                    <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border ${
                      categoryColors[achievement.category as keyof typeof categoryColors]
                    }`}>
                      {achievement.category}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                <div>
                  <h4 className="font-medium text-primary mb-3 text-sm">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {achievement.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <Star className="h-3 w-3 text-accent mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Recognition */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Recognition Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-2">3rd</div>
                <div className="text-sm text-muted-foreground">Hackathon Ranking</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">8.61</div>
                <div className="text-sm text-muted-foreground">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};