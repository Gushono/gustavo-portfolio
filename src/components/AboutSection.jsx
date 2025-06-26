import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Heart, Code, Coffee } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const AboutSection = () => {
  const [yearsExperience, setYearsExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    'Python', 'Golang', 'Backend Development', 'API Design', 
    'Cloud Computing', 'Microservices', 'Database Design', 'DevOps'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      observer.observe(aboutElement);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targetYears = 5; // 2019 to 2024
      let current = 0;
      const increment = targetYears / 50;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetYears) {
          setYearsExperience(targetYears);
          clearInterval(timer);
        } else {
          setYearsExperience(Math.floor(current));
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate backend engineer with a love for clean code and scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo/Visual side */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-none">
              <div className="text-center">
                {/* Placeholder for photo - using icon for now */}
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Code className="w-24 h-24 text-white" />
                </div>
                
                {/* Animated counter */}
                <div className="mb-6">
                  <div className="text-6xl font-bold text-primary mb-2">
                    {yearsExperience}+
                  </div>
                  <p className="text-lg text-muted-foreground">Years of Experience</p>
                  <p className="text-sm text-muted-foreground">(Since 2019)</p>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <Coffee className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-semibold">Coffee Driven</p>
                  </div>
                  <div>
                    <Heart className="w-6 h-6 mx-auto mb-2 text-red-500" />
                    <p className="text-sm font-semibold">Problem Solver</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Bio side */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hello, I'm Gustavo!</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                A 24-year-old Backend Software Engineer born in 2000, with a passion for creating 
                robust and scalable solutions. I've been coding since 2017 and professionally 
                developing software since 2019.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <span className="text-primary font-semibold">Always eager to learn and improve</span>, 
                I thrive on challenges and believe that every problem has an elegant solution waiting 
                to be discovered. My expertise lies in backend development, with a strong focus on 
                Python and Golang ecosystems.
              </p>
            </div>

            {/* Location and contact info */}
            <div className="flex items-center space-x-4 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Campinas, Brasil</span>
              <Calendar className="w-5 h-5 text-primary ml-4" />
              <span>Available for Remote Work</span>
            </div>

            {/* Skills tags */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:bg-primary/20 hover:text-primary hover:border-primary transition-all duration-300 cursor-default font-medium"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Personal touch */}
            <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <p className="text-lg font-medium text-center">
                "Born in 2000, coding since 2017, solving problems since forever"
              </p>
              <p className="text-sm text-muted-foreground text-center mt-2">
                My philosophy: Clean code, scalable architecture, continuous learning
              </p>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;

