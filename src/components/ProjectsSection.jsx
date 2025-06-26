import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Building, 
  Calculator, 
  Database, 
  Shield, 
  Users, 
  TrendingUp,
  Code,
  Server,
  Globe,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Briefcase
} from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});

  const projectGroups = [
    {
      company: 'Enforce',
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      gradient: 'from-blue-500 to-blue-700',
      projects: [
        {
          id: 'enforce',
          title: 'Real Estate Management Platform',
          description: 'Complete real estate management system with advanced valuation and financial control features.',
          features: [
            'Present value calculation for properties',
            'Area registration and management',
            'Expense and revenue control',
            'Property valuation and pricing',
            'Financial indicators dashboard'
          ],
          techStack: {
            backend: ['Python', 'Flask', 'FastAPI'],
            frontend: ['Angular'],
            database: ['PostgreSQL', 'Redis'],
            tools: ['Docker', 'AWS', 'Git']
          },
          icon: Building,
          impact: 'Helped in property valuation and pricing through accurate financial calculations'
        }
      ]
    },
    {
      company: 'Stone/Pagar.me',
      color: 'green',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      gradient: 'from-green-500 to-green-700',
      projects: [
        {
          id: 'stone-pagarme',
          title: 'KYC and Risk Management System',
          description: 'Risk analysis and KYC (Know Your Customer) platform for defining advance profiles.',
          features: [
            'KYC processing for clients',
            'Advance profile definition',
            'Real-time risk analysis',
            'Integration with BBB TON system',
            'Bulk registration processing'
          ],
          techStack: {
            backend: ['Python', 'FastAPI', 'Celery'],
            frontend: ['React', 'TypeScript'],
            database: ['PostgreSQL', 'MongoDB'],
            tools: ['Docker', 'Kubernetes', 'Redis', 'RabbitMQ']
          },
          icon: Shield,
          impact: 'Allowed defining advance profiles based on risk analysis and BBB data processing'
        }
      ]
    },
    {
      company: 'Mercado Livre',
      color: 'yellow',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-700',
      gradient: 'from-yellow-500 to-yellow-700',
      projects: [
        {
          id: 'mercadolivre-security',
          title: 'Security Education Backend',
          description: 'Training platform for Mercado Livre developers, focused on secure development.',
          features: [
            'Quiz and assessment system',
            'Practical coding challenges',
            'Security video lessons',
            'Vulnerability coverage (XSS, SSRF, SQL Injection)',
            'Developer progress dashboard',
            'Training and engagement metrics'
          ],
          techStack: {
            backend: ['Golang'],
            frontend: ['React'],
            database: ['PostgreSQL', 'Redis'],
            tools: ['Datadog', 'Kibana', 'New Relic', 'Docker']
          },
          icon: Shield,
          impact: 'Over 10,000 developers trained, generating significant savings by replacing paid tool'
        },
        {
          id: 'mercadolivre-genova',
          title: 'File Manager (Genova)',
          description: 'Tool for secure communication with card networks and integrations via SFTP in PCI environment.',
          features: [
            'Secure communication via SFTP',
            'PCI environment for file exchange',
            'Automatic notifications for clients',
            'Data reconciliation system',
            'Integration with multiple card networks',
            'Transaction monitoring and logging'
          ],
          techStack: {
            backend: ['Golang'],
            frontend: ['React'],
            database: ['PostgreSQL', 'Redis'],
            tools: ['Datadog', 'Kibana', 'New Relic', 'SFTP', 'PCI DSS']
          },
          icon: Database,
          impact: 'Enabled secure communication with card networks and integrations, facilitating reconciliation for clients'
        }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('projects');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => observer.disconnect();
  }, []);

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        hover: 'hover:bg-blue-100',
        badge: 'bg-blue-100 text-blue-800 border-blue-300'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        hover: 'hover:bg-green-100',
        badge: 'bg-green-100 text-green-800 border-green-300'
      },
      yellow: {
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        text: 'text-yellow-700',
        hover: 'hover:bg-yellow-100',
        badge: 'bg-yellow-100 text-yellow-800 border-yellow-300'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical experience in complex projects with real business impact
          </p>
        </div>

        <div className="space-y-12">
          {projectGroups.map((group, groupIndex) => {
            const colors = getColorClasses(group.color);
            
            return (
              <div
                key={group.company}
                className={`${colors.bg} rounded-2xl p-8 border-2 ${colors.border} ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  animationDelay: `${groupIndex * 200}ms`
                }}
              >
                {/* Company Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${group.gradient} text-white`}>
                      {React.createElement(group.projects[0].icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{group.company}</h3>
                      <p className="text-muted-foreground">{group.projects.length} project{group.projects.length > 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={`${colors.badge} font-medium`}>
                    {group.projects.length} Project{group.projects.length > 1 ? 's' : ''}
                  </Badge>
                </div>

                {/* Projects */}
                <div className="space-y-6">
                  {group.projects.map((project, projectIndex) => {
                    const isExpanded = expandedProjects[project.id];
                    
                    return (
                      <Card
                        key={project.id}
                        className={`group hover:shadow-xl transition-all duration-500 border-2 ${colors.border} hover:border-current overflow-hidden ${
                          isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'
                        }`}
                        style={{
                          animationDelay: `${(groupIndex * 200) + (projectIndex * 100)}ms`
                        }}
                      >
                        {/* Project Header */}
                        <CardHeader className={`bg-gradient-to-r ${group.gradient} text-white pb-4`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                                {React.createElement(project.icon, { className: "w-6 h-6" })}
                              </div>
                              <div>
                                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                                <p className="text-white/90 text-sm">{project.description}</p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleProject(project.id)}
                              className="text-white hover:bg-white/20 transition-all duration-300"
                            >
                              {isExpanded ? (
                                <ChevronUp className="w-5 h-5" />
                              ) : (
                                <ChevronDown className="w-5 h-5" />
                              )}
                            </Button>
                          </div>
                        </CardHeader>

                        {/* Expandable Content */}
                        {isExpanded && (
                          <CardContent className="p-6 space-y-6 animate-slide-down">
                            {/* Features */}
                            <div>
                              <h3 className="text-lg font-semibold mb-3 flex items-center">
                                <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                                Key Features
                              </h3>
                              <ul className="grid md:grid-cols-2 gap-2">
                                {project.features.map((feature, featureIndex) => (
                                  <li 
                                    key={featureIndex}
                                    className="flex items-start space-x-2 text-sm"
                                  >
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-muted-foreground">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Tech Stack */}
                            <div>
                              <h3 className="text-lg font-semibold mb-3 flex items-center">
                                <Server className="w-5 h-5 mr-2 text-primary" />
                                Tech Stack
                              </h3>
                              <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Backend</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.techStack.backend.map((tech) => (
                                      <Badge key={tech} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Frontend</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.techStack.frontend.map((tech) => (
                                      <Badge key={tech} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Database & Tools</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.techStack.database.map((tech) => (
                                      <Badge key={tech} variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                                        {tech}
                                      </Badge>
                                    ))}
                                    {project.techStack.tools.map((tech) => (
                                      <Badge key={tech} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Impact */}
                            <div className={`p-4 rounded-lg ${colors.bg} border-l-4 border-l-current`} style={{ borderLeftColor: colors.text }}>
                              <h3 className="text-lg font-semibold mb-2 flex items-center">
                                <Users className="w-5 h-5 mr-2" style={{ color: colors.text }} />
                                Business Impact
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {project.impact}
                              </p>
                            </div>
                          </CardContent>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in Similar Projects?</h3>
            <p className="text-muted-foreground mb-6">
              I have experience in developing complex systems and I'm always open to new challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-lg px-6 py-3 hover:bg-primary hover:text-white transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                Enterprise Systems
              </Badge>
              <Badge variant="outline" className="text-lg px-6 py-3 hover:bg-primary hover:text-white transition-all duration-300">
                <Shield className="w-5 h-5 mr-2" />
                Security & Compliance
              </Badge>
              <Badge variant="outline" className="text-lg px-6 py-3 hover:bg-primary hover:text-white transition-all duration-300">
                <Calculator className="w-5 h-5 mr-2" />
                Financial Calculations
              </Badge>
              <Badge variant="outline" className="text-lg px-6 py-3 hover:bg-primary hover:text-white transition-all duration-300">
                <Database className="w-5 h-5 mr-2" />
                PCI Integrations
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection; 