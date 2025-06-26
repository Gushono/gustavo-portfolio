import React, { useEffect, useState } from 'react';
import { Code, Database, Cloud, Settings, Server, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = [
    {
      title: 'Backend',
      icon: Server,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      skills: [
        { name: 'Python', level: 95, years: '5+', description: 'Primary language for backend development' },
        { name: 'Golang', level: 85, years: '2+', description: 'High-performance microservices' },
        { name: 'Java', level: 75, years: '3+', description: 'Enterprise applications and Spring' },
        { name: 'Node.js', level: 80, years: '2+', description: 'JavaScript runtime for backend' }
      ]
    },
    {
      title: 'Frameworks',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      skills: [
        { name: 'Flask', level: 90, years: '4+', description: 'Lightweight Python web framework' },
        { name: 'FastAPI', level: 85, years: '2+', description: 'Modern, fast Python API framework' },
        { name: 'NestJS', level: 75, years: '1+', description: 'Node.js framework for scalable apps' },
        { name: 'Spring', level: 70, years: '2+', description: 'Java enterprise framework' }
      ]
    },
    {
      title: 'Frontend',
      icon: Globe,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      skills: [
        { name: 'React', level: 80, years: '2+', description: 'Modern UI library' },
        { name: 'Angular', level: 75, years: '3+', description: 'Full-featured frontend framework' },
        { name: 'JavaScript', level: 85, years: '4+', description: 'Core web programming language' },
        { name: 'TypeScript', level: 70, years: '1+', description: 'Typed JavaScript superset' }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      skills: [
        { name: 'MySQL', level: 85, years: '4+', description: 'Relational database management' },
        { name: 'PostgreSQL', level: 80, years: '2+', description: 'Advanced relational database' },
        { name: 'Firestore', level: 75, years: '1+', description: 'NoSQL document database' },
        { name: 'Redis', level: 70, years: '2+', description: 'In-memory data structure store' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      skills: [
        { name: 'AWS', level: 85, years: '3+', description: 'Amazon Web Services ecosystem' },
        { name: 'GCP', level: 80, years: '1+', description: 'Google Cloud Platform' },
        { name: 'Docker', level: 75, years: '2+', description: 'Containerization platform' },
        { name: 'Kubernetes', level: 70, years: '2+', description: 'Container orchestration' }
      ]
    },
    {
      title: 'Tools & Practices',
      icon: Settings,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      skills: [
        { name: 'CI/CD', level: 85, years: '3+', description: 'Continuous integration/deployment' },
        { name: 'Git', level: 90, years: '5+', description: 'Version control system' },
        { name: 'TDD', level: 80, years: '2+', description: 'Test-driven development' },
        { name: 'Agile', level: 85, years: '4+', description: 'Agile development methodologies' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills progressively
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [`${categoryIndex}-${skillIndex}`]: skill.level
                }));
              }, (categoryIndex * 200) + (skillIndex * 100));
            });
          });
        }
      },
      { threshold: 0.2 }
    );

    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => observer.disconnect();
  }, []);

  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, color = '#3182CE' }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold" style={{ color }}>{percentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20"
              style={{
                animationDelay: `${categoryIndex * 150}ms`,
                animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const skillKey = `${categoryIndex}-${skillIndex}`;
                  const animatedLevel = animatedSkills[skillKey] || 0;
                  
                  return (
                    <div
                      key={skill.name}
                      className="group/skill cursor-pointer"
                      style={{
                        animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`,
                        animation: isVisible ? 'slideInRight 0.6s ease-out forwards' : 'none'
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">{skill.years}</span>
                          <span className={`text-sm font-bold ${category.color}`}>{skill.level}%</span>
                        </div>
                      </div>
                      
                      <Progress 
                        value={animatedLevel} 
                        className="h-2 mb-2"
                      />
                      
                      <p className="text-xs text-muted-foreground opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24+</div>
            <p className="text-muted-foreground">Technologies</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4</div>
            <p className="text-muted-foreground">Companies</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">∞</div>
            <p className="text-muted-foreground">Learning Mindset</p>
          </div>
        </div>

        {/* Featured skills with circular progress */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'Python', level: 95, color: '#3776ab' },
              { name: 'Golang', level: 85, color: '#00ADD8' },
              { name: 'AWS', level: 85, color: '#FF9900' },
              { name: 'Backend', level: 90, color: '#3182CE' }
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="text-center"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: isVisible ? 'zoomIn 0.8s ease-out forwards' : 'none',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.8)'
                }}
              >
                <CircularProgress 
                  percentage={isVisible ? skill.level : 0} 
                  color={skill.color}
                />
                <p className="mt-2 font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;

