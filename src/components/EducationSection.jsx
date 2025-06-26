import React, { useEffect, useState } from 'react';
import { GraduationCap, Code2, Calendar, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const educationElement = document.getElementById('education');
    if (educationElement) {
      observer.observe(educationElement);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      id: 'fatec',
      institution: 'FATEC',
      degree: 'Tecnólogo in Software Development',
      period: '2019 - 2022',
      location: 'Campinas, SP',
      highlight: 'Theory and practice across all software development stages',
      description: 'Comprehensive technology program covering full software development lifecycle, from requirements analysis to deployment and maintenance.',
      skills: ['Software Engineering', 'Database Design', 'Web Development', 'Project Management', 'System Analysis'],
      color: 'blue',
      icon: GraduationCap,
      bgGradient: 'from-blue-500/10 to-blue-600/5',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      id: 'senai',
      institution: 'SENAI São Paulo',
      degree: 'Technical in Programming',
      period: '2017 - 2018',
      location: 'Campinas, SP',
      highlight: 'First love affair with programming',
      description: 'Technical program that introduced me to the world of programming. Developed a final project using Android (Java) and C# webservice.',
      skills: ['Java', 'C#', 'Android Development', 'Web Services', 'Database Fundamentals'],
      project: 'TCC: Android (Java) + C# webservice',
      color: 'orange',
      icon: Code2,
      bgGradient: 'from-orange-500/10 to-orange-600/5',
      borderColor: 'border-orange-200',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Academic Foundation</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building strong theoretical knowledge and practical skills through comprehensive education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card
              key={edu.id}
              className={`group hover:shadow-xl transition-all duration-500 ${edu.borderColor} ${edu.bgGradient} bg-gradient-to-br border-2`}
              style={{
                animationDelay: `${index * 200}ms`,
                animation: isVisible ? 'slideInUp 0.8s ease-out forwards' : 'none',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-full bg-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <edu.icon className={`w-6 h-6 ${edu.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{edu.institution}</h3>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className={`${edu.iconColor} border-current`}>
                    {edu.location}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    {edu.degree}
                  </h4>
                  <p className={`text-sm font-medium ${edu.iconColor} mb-3`}>
                    "{edu.highlight}"
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {edu.project && (
                  <div className="p-3 bg-white/50 rounded-lg border border-current/20">
                    <p className="text-sm font-medium flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      {edu.project}
                    </p>
                  </div>
                )}

                <div>
                  <h5 className="text-sm font-semibold mb-2">Key Skills Acquired:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        style={{
                          animationDelay: `${(index * 200) + (skillIndex * 50)}ms`,
                          animation: isVisible ? 'fadeIn 0.6s ease-out forwards' : 'none'
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline connector */}
        <div className="flex justify-center mt-12">
          <div className="text-center">
            <div className="w-px h-16 bg-gradient-to-b from-orange-400 to-blue-600 mx-auto mb-4"></div>
            <p className="text-sm text-muted-foreground font-medium">
              Academic Journey: 2017 → 2022
            </p>
            <p className="text-xs text-muted-foreground">
              From first lines of code to comprehensive software engineering
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default EducationSection;

