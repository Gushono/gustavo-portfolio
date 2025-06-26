import React, { useEffect, useState, useRef } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Code, 
  Database, 
  Cloud, 
  Settings, 
  ShoppingCart,
  CreditCard,
  Shield,
  TrendingUp,
  Briefcase,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

// Use placeholder images or remove logo imports
import mercadoLivreLogo from '../assets/mercado_livre_logo.png';
import stoneLogo from '../assets/stone_logo.png';
import enforceLogo from '../assets/enforce_logo.jpeg';

const ExperienceSection = () => {
  const [activeCompany, setActiveCompany] = useState(0);
  const [activePosition, setActivePosition] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const companies = [
    {
      id: 'mercadolivre',
      name: 'Mercado Livre',
      theme: {
        primary: '#FFE600',
        secondary: '#3483FA',
        gradient: 'bg-gradient-to-br from-yellow-400/20 to-blue-500/20',
        textPrimary: 'text-yellow-600',
        textSecondary: 'text-blue-600',
        bgClass: 'bg-gradient-to-br from-yellow-400/20 to-blue-500/20'
      },
      icon: ShoppingCart,
      logo: mercadoLivreLogo,
      positions: [
        {
          role: 'Software Engineer - Mid Level',
          period: 'December 2022 - Present',
          location: 'Remote',
          description: 'Leading backend development initiatives in one of Latin America\'s largest e-commerce platforms.',
          technologies: ['Python', 'Flask (Blueprints)', 'Golang', 'React', 'MySQL'],
          achievements: [
            'Backend solutions with modern frameworks',
            'CI/CD implementation with Circle CI, GitHub Actions, Jenkins',
            'Observability with Datadog, Kibana, New Relic',
            'TDD and comprehensive testing (E2E, integration, unit)',
            'Gitflow implementation',
            'MySQL database management'
          ]
        }
      ]
    },
    {
      id: 'stone',
      name: 'Stone / Pagar.me',
      theme: {
        primary: '#00D563',
        secondary: '#1A202C',
        gradient: 'bg-gradient-to-br from-green-500/20 to-gray-800/20',
        textPrimary: 'text-green-600',
        textSecondary: 'text-gray-800',
        bgClass: 'bg-gradient-to-br from-green-500/20 to-gray-800/20'
      },
      icon: CreditCard,
      logo: stoneLogo,
      positions: [
        {
          role: 'Software Engineer - Mid Level',
          period: 'July 2022 - December 2022',
          location: 'Remote',
          description: 'Developing fintech solutions and payment processing systems with cutting-edge technology.',
          technologies: ['Python', 'FastAPI', 'Node.js', 'NestJS', 'PostgreSQL', 'Firestore'],
          achievements: [
            'GCP expertise (Cloud Run, Cloud Functions, Pub/Sub, Storage)',
            'CI/CD with Circle CI and GitHub Actions',
            'Testing with pytest',
            'TDD methodology',
            'Trunk Based Development',
            'PostgreSQL and Firestore databases'
          ]
        }
      ]
    },
    {
      id: 'enforce',
      name: 'Enforce',
      theme: {
        primary: '#1E3A8A',
        secondary: '#94A3B8',
        gradient: 'bg-gradient-to-br from-blue-800/20 to-slate-400/20',
        textPrimary: 'text-blue-800',
        textSecondary: 'text-slate-500',
        bgClass: 'bg-gradient-to-br from-blue-800/20 to-slate-400/20'
      },
      icon: Shield,
      logo: enforceLogo,
      positions: [
        {
          role: 'Software Engineer - Mid Level',
          period: 'February 2022 - July 2022',
          location: 'Remote',
          description: 'Advanced backend development and system integrations in enterprise security solutions.',
          technologies: ['Python', 'Flask', 'FastAPI', 'AWS Event-Bridge', 'Angular 8'],
          achievements: [
            'Python & Flask & FastAPI backend solutions',
            'AWS Event-Bridge integration',
            'Azure DevOps CI/CD',
            'Angular 8 frontend development',
            'System integrations',
            'Testing with tox'
          ]
        },
        {
          role: 'Software Engineer - Entry Level',
          period: 'January 2021 - February 2022',
          location: 'Campinas',
          description: 'Foundation building in enterprise software development with comprehensive AWS ecosystem.',
          technologies: ['Python', 'Flask', 'AWS', 'Kubernetes', 'Angular 8'],
          achievements: [
            'Python & Flask backend development',
            'RESTful APIs with Swagger',
            'AWS services (Lambda, CloudFormation, CloudFront, EKS, SQS, SNS, Event-Bridge)',
            'Kubernetes management with Rancher',
            'Azure DevOps CI/CD',
            'Angular 8 frontend'
          ]
        },
        {
          role: 'IT Intern',
          period: 'March 2019 - December 2020',
          location: 'Campinas',
          description: 'Beginning of professional journey, learning fundamentals and building strong technical foundation.',
          technologies: ['Python', 'Flask', 'Java', 'Spring', 'AWS', 'Angular 8'],
          achievements: [
            'RESTful API development with Swagger',
            'AWS services introduction',
            'Kubernetes basics with Rancher',
            'Azure DevOps fundamentals',
            'Angular 8 frontend basics'
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    // Initialize active positions for each company
    const initialPositions = {};
    companies.forEach((company, index) => {
      initialPositions[index] = 0;
    });
    setActivePosition(initialPositions);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentCompany = companies[activeCompany];
  const currentPosition = currentCompany?.positions[activePosition[activeCompany] || 0];

  const nextPosition = () => {
    const currentPos = activePosition[activeCompany] || 0;
    const maxPos = currentCompany.positions.length - 1;
    if (currentPos < maxPos) {
      setActivePosition(prev => ({
        ...prev,
        [activeCompany]: currentPos + 1
      }));
    }
  };

  const prevPosition = () => {
    const currentPos = activePosition[activeCompany] || 0;
    if (currentPos > 0) {
      setActivePosition(prev => ({
        ...prev,
        [activeCompany]: currentPos - 1
      }));
    }
  };

  const goToCompany = (companyIndex) => {
    setActiveCompany(companyIndex);
  };

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className={`min-h-screen py-20 px-6 transition-all duration-1000 ${currentCompany?.theme.bgClass || ''}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intern to mid-level engineer, building scalable solutions across different domains
          </p>
        </div>

        {/* Company Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            {companies.map((company, index) => (
              <Button
                key={company.id}
                onClick={() => goToCompany(index)}
                variant={activeCompany === index ? "default" : "outline"}
                className={`flex items-center space-x-2 transition-all duration-300 ${
                  activeCompany === index 
                    ? `${company.theme.textPrimary} bg-white border-2 border-current shadow-lg font-semibold scale-105` 
                    : 'hover:scale-105 bg-white/90 hover:bg-white border-white'
                }`}
              >
                <company.icon className="w-4 h-4" />
                <span>{company.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {currentCompany && currentPosition && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-full bg-white shadow-lg animate-pulse-glow`}>
                    <currentCompany.icon className={`w-8 h-8 ${currentCompany.theme.textPrimary}`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{currentCompany.name}</h3>
                    <p className="text-xl font-semibold text-muted-foreground">{currentPosition.role}</p>
                  </div>
                </div>

                {/* Position Navigation */}
                {currentCompany.positions.length > 1 && (
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={prevPosition}
                      disabled={activePosition[activeCompany] === 0}
                      variant="outline"
                      size="sm"
                      className="p-2"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground px-2">
                      {(activePosition[activeCompany] || 0) + 1} / {currentCompany.positions.length}
                    </span>
                    <Button
                      onClick={nextPosition}
                      disabled={activePosition[activeCompany] === currentCompany.positions.length - 1}
                      variant="outline"
                      size="sm"
                      className="p-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{currentPosition.period}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>{currentPosition.location}</span>
                </div>
              </div>

              <p className="text-lg leading-relaxed">{currentPosition.description}</p>

              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentPosition.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`${currentCompany.theme.textPrimary} border-current hover:bg-current/10 hover:text-current hover:border-current transition-all duration-300 font-medium`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {currentPosition.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start space-x-3"
                      style={{
                        animationDelay: `${achIndex * 100}ms`,
                        animation: isVisible ? 'slideInLeft 0.6s ease-out forwards' : 'none'
                      }}
                    >
                      <div className={`w-2 h-2 rounded-full ${currentCompany.theme.textPrimary} mt-2 flex-shrink-0`}></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual Side */}
            <div className="flex items-center justify-center">
              <Card className={`w-80 h-80 ${currentCompany.theme.gradient} border-none shadow-2xl animate-float`}>
                <CardContent className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="mb-6">
                      <img 
                        src={currentCompany.logo} 
                        alt={`${currentCompany.name} logo`}
                        className="w-24 h-24 object-contain mx-auto filter drop-shadow-lg"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">{currentCompany.name}</h4>
                    <p className="text-white/80">{currentPosition.role}</p>
                    {currentCompany.positions.length > 1 && (
                      <div className="mt-4 flex justify-center space-x-1">
                        {currentCompany.positions.map((_, posIndex) => (
                          <div
                            key={posIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              activePosition[activeCompany] === posIndex 
                                ? 'bg-white scale-125' 
                                : 'bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Progress indicator */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            {companies.map((company, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCompany === index 
                    ? `${company.theme.textPrimary} bg-current scale-125` 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => goToCompany(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;

