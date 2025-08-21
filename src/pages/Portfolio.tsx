import { useEffect } from "react";
import { Navigation } from "@/components/Portfolio/Navigation";
import { HeroSection } from "@/components/Portfolio/HeroSection";
import { AboutSection } from "@/components/Portfolio/AboutSection";
import { SkillsSection } from "@/components/Portfolio/SkillsSection";
import { ProjectsSection } from "@/components/Portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/Portfolio/ExperienceSection";
import { EducationSection } from "@/components/Portfolio/EducationSection";
import { AchievementsSection } from "@/components/Portfolio/AchievementsSection";
import { CertificationsSection } from "@/components/Portfolio/CertificationsSection";
import { ContactSection } from "@/components/Portfolio/ContactSection";
import { FloatingContact } from "@/components/Portfolio/FloatingContact";
import { Footer } from "@/components/Portfolio/Footer";

const Portfolio = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Mohammed Suhail - AI/ML Enthusiast & Full-Stack Developer Portfolio";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Mohammed Suhail - Passionate AI/ML student and full-stack developer with expertise in machine learning, React.js, Python, and innovative problem-solving. View projects, experience, and skills.'
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mohammed Suhail",
      "jobTitle": "AI/ML Enthusiast & Full-Stack Developer", 
      "description": "Passionate AI/ML student with hands-on experience in ML models, AI algorithms, and full-stack development",
      "url": window.location.origin,
      "email": "suhailcs035@gmail.com",
      "telephone": "+91 9902608635",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ballari",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://github.com/Shaikmdsuhail",
        "https://linkedin.com/in/mohammed-suhail"
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning", 
        "Full-Stack Development",
        "React.js",
        "Python",
        "JavaScript",
        "Flutter",
        "Firebase"
      ],
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "BITM Institute"
        },
        {
          "@type": "EducationalOrganization", 
          "name": "Government Polytechnic Ballari"
        }
      ]
    };

    // Add or update structured data script
    let script = document.getElementById('structured-data') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script') as HTMLScriptElement;
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      // Cleanup structured data on unmount
      const existingScript = document.getElementById('structured-data');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Portfolio;