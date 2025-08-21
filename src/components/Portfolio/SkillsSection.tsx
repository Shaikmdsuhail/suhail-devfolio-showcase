import { Code, Database, Wrench, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "React.js", "Node.js", "Flutter"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      icon: Database,
      title: "Databases & Storage",
      skills: ["SQL", "NoSQL", "MongoDB", "Firebase", "MySQL"],
      color: "bg-secondary/10 text-secondary border-secondary/20"
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Eclipse", "VS Code", "Git", "GitHub", "Google Maps API", "JIRA"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      icon: Brain,
      title: "Core Competencies",
      skills: ["Machine Learning", "AI Algorithms", "API Integration", "Testing", "Debugging", "Performance Optimization"],
      color: "bg-primary-light/10 text-primary-light border-primary-light/20"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-secondary/20 rounded-full w-fit">
                  <category.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-lg font-semibold text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`${category.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-primary mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Cross-browser Compatibility", "Responsive Design", "Agile Development", 
              "Test Planning", "Manual Testing", "Automated Testing", "UI/UX Design", 
              "Problem Solving", "Team Collaboration", "Code Review"
            ].map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm hover:scale-105 transition-transform duration-200 cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};