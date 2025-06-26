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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('none');
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

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

  // Add mouse event listeners for swipe functionality
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging, startX, currentX, activeCompany]);

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
    if (companyIndex === activeCompany || isTransitioning) return;
    
    const direction = companyIndex > activeCompany ? 'left' : 'right';
    setSlideDirection(direction);
    setIsTransitioning(true);
    
    // Reduced delay for faster transition
    setTimeout(() => {
      setActiveCompany(companyIndex);
      setIsTransitioning(false);
      setSlideDirection('none');
    }, 200);
  };

  const smoothTransitionToCompany = (newCompanyIndex, direction) => {
    if (newCompanyIndex === activeCompany || isTransitioning) return;
    
    setSlideDirection(direction);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveCompany(newCompanyIndex);
      setIsTransitioning(false);
      setSlideDirection('none');
    }, 200);
  };

  // Mouse swipe functionality
  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent text selection
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isTransitioning) return;
    e.preventDefault(); // Prevent text selection during drag
    setCurrentX(e.clientX);
    
    // Auto-change company when drag threshold is reached
    const deltaX = e.clientX - startX;
    const autoChangeThreshold = 100; // Distance to auto-change company
    
    if (Math.abs(deltaX) > autoChangeThreshold) {
      if (deltaX > 0 && activeCompany > 0) {
        // Swipe right - go to previous company
        smoothTransitionToCompany(activeCompany - 1, 'right');
        setIsDragging(false);
        setStartX(e.clientX);
        setCurrentX(e.clientX);
      } else if (deltaX < 0 && activeCompany < companies.length - 1) {
        // Swipe left - go to next company
        smoothTransitionToCompany(activeCompany + 1, 'left');
        setIsDragging(false);
        setStartX(e.clientX);
        setCurrentX(e.clientX);
      }
    }
  };

  const handleMouseUp = (e) => {
    if (!isDragging || isTransitioning) return;
    e.preventDefault(); // Prevent text selection
    
    const deltaX = currentX - startX;
    const threshold = 30; // Reduced threshold since we have auto-change now
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0 && activeCompany > 0) {
        // Swipe right - go to previous company
        smoothTransitionToCompany(activeCompany - 1, 'right');
      } else if (deltaX < 0 && activeCompany < companies.length - 1) {
        // Swipe left - go to next company
        smoothTransitionToCompany(activeCompany + 1, 'left');
      }
    }
    
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="experience" 
      className={`min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 transition-all duration-1000 ${currentCompany?.theme.bgClass || ''}`}
    >
      <div 
        ref={containerRef}
        className={`max-w-7xl mx-auto ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab select-none'}`}
        style={{ userSelect: 'none' }}
      >
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Professional Journey</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            From intern to mid-level engineer, building scalable solutions across different domains
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground/70 mt-2">
            💡 Swipe left or right to explore different companies
          </p>
        </div>

        {/* Company Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
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
                <span className="text-sm sm:text-base">{company.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {currentCompany && currentPosition && (
          <div 
            className={`grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center transition-all duration-300 ease-out select-none ${
              isDragging ? 'transform scale-[0.99] opacity-90' : 'transform scale-100 opacity-100'
            } ${isTransitioning ? 'pointer-events-none' : ''}`}
            style={{
              transform: isTransitioning 
                ? slideDirection === 'left' 
                  ? 'translateX(-100%) scale(0.95) opacity-0' 
                  : slideDirection === 'right' 
                    ? 'translateX(100%) scale(0.95) opacity-0'
                    : 'translateX(0) scale(1) opacity-100'
                : isDragging 
                  ? `scale(0.99) translateX(${Math.max(-20, Math.min(20, (currentX - startX) * 0.03))}px) rotateY(${Math.max(-15, Math.min(15, (currentX - startX) * 0.3))}deg)` 
                  : 'scale(1) translateX(0px) rotateY(0deg)',
              userSelect: 'none',
              filter: isDragging ? 'blur(0.3px)' : 'blur(0px)',
              boxShadow: isDragging 
                ? `0 ${Math.min(20, Math.abs(currentX - startX) * 0.1)}px ${Math.min(30, Math.abs(currentX - startX) * 0.2)}px rgba(0,0,0,0.1)` 
                : 'none'
            }}
          >
            {/* Content Side */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className={`p-3 sm:p-4 rounded-full bg-white shadow-lg animate-pulse-glow`}>
                    <currentCompany.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${currentCompany.theme.textPrimary}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold">{currentCompany.name}</h3>
                    <p className="text-lg sm:text-xl font-semibold text-muted-foreground">{currentPosition.role}</p>
                  </div>
                </div>

                {/* Position Navigation */}
                {currentCompany.positions.length > 1 && (
                  <div className="flex items-center justify-center sm:justify-end space-x-2">
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

              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">{currentPosition.period}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">{currentPosition.location}</span>
                </div>
              </div>

              <p className="text-base sm:text-lg leading-relaxed">{currentPosition.description}</p>

              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 flex items-center">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentPosition.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`${currentCompany.theme.textPrimary} border-current hover:bg-current/10 hover:text-current hover:border-current transition-all duration-300 font-medium text-xs sm:text-sm`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 flex items-center">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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
                      <span className="text-sm sm:text-base text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual Side */}
            <div className="flex items-center justify-center order-first lg:order-last">
              <Card className={`w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 ${currentCompany.theme.gradient} border-none shadow-2xl animate-float transition-all duration-500 ${
                isDragging ? 'scale-95 rotate-1' : 'scale-100 rotate-0'
              }`}>
                <CardContent className="flex items-center justify-center h-full p-4">
                  <div className="text-center">
                    <div className="mb-4 sm:mb-6 transition-transform duration-300 hover:scale-110">
                      <img 
                        src={currentCompany.logo} 
                        alt={`${currentCompany.name} logo`}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mx-auto filter drop-shadow-lg"
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{currentCompany.name}</h4>
                    <p className="text-sm sm:text-base text-white/80">{currentPosition.role}</p>
                    {currentCompany.positions.length > 1 && (
                      <div className="mt-3 sm:mt-4 flex justify-center space-x-1">
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

