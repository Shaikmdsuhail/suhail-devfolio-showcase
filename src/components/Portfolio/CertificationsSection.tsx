import { Award, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const CertificationsSection = () => {
  const upcomingCertifications = [
    {
      title: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      expectedDate: "Q2 2025",
      description: "Cloud architecture and infrastructure design certification",
      focus: "Cloud Computing"
    },
    {
      title: "Google Professional Machine Learning Engineer",
      provider: "Google Cloud",
      expectedDate: "Q3 2025", 
      description: "Advanced ML model development and deployment certification",
      focus: "Machine Learning"
    },
    {
      title: "Microsoft Azure AI Engineer Associate",
      provider: "Microsoft",
      expectedDate: "Q4 2025",
      description: "AI solutions development and implementation on Azure platform",
      focus: "Artificial Intelligence"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development journey
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 rounded-full px-6 py-3">
            <Clock className="h-5 w-5 text-secondary mr-3" />
            <span className="text-primary font-semibold">Currently Pursuing Professional Certifications</span>
          </div>
        </div>

        {/* Upcoming Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {upcomingCertifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/20 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-secondary font-medium text-sm">
                      {cert.provider}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-accent/20 text-accent text-xs font-medium px-3 py-1 rounded-full border border-accent/30">
                    {cert.focus}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    Expected: {cert.expectedDate}
                  </div>
                  <ArrowRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Commitment */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="mb-6">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Commitment to Excellence
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                I believe in continuous learning and professional development. Currently pursuing 
                industry-recognized certifications to stay updated with the latest technologies 
                and best practices in AI/ML, cloud computing, and software development.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="font-semibold text-primary">Cloud Computing</div>
                  <div className="text-sm text-muted-foreground">AWS Solutions</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="font-semibold text-secondary">Machine Learning</div>
                  <div className="text-sm text-muted-foreground">Google Cloud ML</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="font-semibold text-accent">AI Engineering</div>
                  <div className="text-sm text-muted-foreground">Microsoft Azure</div>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Updates on Progress
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};