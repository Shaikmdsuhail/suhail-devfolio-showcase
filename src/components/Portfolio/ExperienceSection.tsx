import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Nexusinfo",
      location: "Remote",
      duration: "2024",
      type: "Internship",
      responsibilities: [
        "Developed responsive user interfaces using React.js and JavaScript",
        "Optimized application load speeds and performance metrics",
        "Integrated RESTful APIs for seamless data flow",
        "Ensured cross-browser compatibility across multiple platforms",
        "Collaborated with design teams to implement pixel-perfect UI components"
      ],
      skills: ["React.js", "JavaScript", "CSS3", "API Integration", "Performance Optimization"]
    },
    {
      title: "Software Tester Intern", 
      company: "Nexusinfo",
      location: "Remote",
      duration: "2023",
      type: "Internship",
      responsibilities: [
        "Conducted comprehensive manual and automated testing procedures",
        "Implemented defect tracking systems using JIRA for issue management",
        "Developed detailed test plans and test cases for web applications",
        "Ensured application stability and reliability before production deployment",
        "Collaborated with development teams to identify and resolve critical bugs"
      ],
      skills: ["Manual Testing", "Automated Testing", "JIRA", "Test Planning", "Quality Assurance"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on industry experience
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-secondary/30"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
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
                            <Briefcase className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-primary">
                              {experience.title}
                            </h3>
                            <p className="text-secondary font-medium">
                              {experience.company}
                            </p>
                          </div>
                        </div>
                        <span className="bg-accent/20 text-accent text-xs font-medium px-3 py-1 rounded-full">
                          {experience.type}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-primary mb-3">Key Responsibilities:</h4>
                          <ul className="space-y-2">
                            {experience.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-primary mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
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