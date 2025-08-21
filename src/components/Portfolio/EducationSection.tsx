import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "BITM Institute",
      duration: "2023 - 2026",
      cgpa: "8.61",
      status: "Current",
      description: "Pursuing B.Tech with focus on Computer Science and Engineering, specializing in AI/ML and software development.",
      highlights: [
        "Strong academic performance with 8.61 CGPA",
        "Active participation in coding competitions and hackathons",
        "Member of technical societies and development clubs"
      ]
    },
    {
      degree: "Diploma in Engineering", 
      institution: "Government Polytechnic Ballari",
      duration: "2020 - 2023",
      cgpa: "8.90",
      status: "Completed",
      description: "Completed Diploma in Computer Science Engineering with excellent academic performance and practical project experience.",
      highlights: [
        "Graduated with distinction (8.90 CGPA)",
        "Developed foundational programming and technical skills",
        "Completed multiple practical projects and assignments"
      ]
    },
    {
      degree: "Secondary School Education",
      institution: "St. John's High School",
      duration: "2016 - 2020",
      cgpa: "70.4%",
      status: "Completed",
      description: "Completed secondary education with focus on science and mathematics, building strong analytical foundations.",
      highlights: [
        "Strong foundation in mathematics and sciences",
        "Developed critical thinking and problem-solving skills",
        "Active participation in school technical events"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Current" 
      ? "bg-secondary/20 text-secondary border-secondary/30" 
      : "bg-primary/20 text-primary border-primary/30";
  };

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Education Journey</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic excellence and continuous learning through quality institutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-secondary/30"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                  <div className="w-3 h-3 bg-secondary rounded-full border-4 border-background shadow-lg"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-secondary/20 p-2 rounded-lg">
                            <GraduationCap className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-primary">
                              {edu.degree}
                            </h3>
                            <p className="text-secondary font-medium">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                        <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getStatusColor(edu.status)}`}>
                          {edu.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-2 text-accent" />
                          <span className="font-semibold text-accent">
                            {edu.cgpa.includes('%') ? edu.cgpa : `${edu.cgpa} CGPA`}
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {edu.description}
                      </p>

                      <div>
                        <div className="flex items-center mb-3">
                          <BookOpen className="h-4 w-4 mr-2 text-primary" />
                          <h4 className="font-medium text-primary">Key Highlights:</h4>
                        </div>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};