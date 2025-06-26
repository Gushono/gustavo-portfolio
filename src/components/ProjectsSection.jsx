import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Building, 
  Calculator, 
  Database, 
  Shield, 
  Users, 
  TrendingUp,
  Code,
  Server,
  Globe
} from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 'enforce',
      title: 'Enforce',
      subtitle: 'Plataforma de Gestão de Imóveis',
      description: 'Sistema completo de gestão imobiliária com funcionalidades avançadas de avaliação e controle financeiro.',
      features: [
        'Cálculo de valor presente de imóveis',
        'Cadastro e gestão de áreas',
        'Controle de despesas e receitas',
        'Avaliação e precificação de imóveis',
        'Dashboard de indicadores financeiros'
      ],
      techStack: {
        backend: ['Python', 'Flask', 'FastAPI'],
        frontend: ['Angular'],
        database: ['PostgreSQL', 'Redis'],
        tools: ['Docker', 'AWS', 'Git']
      },
      icon: Building,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradient: 'from-blue-500 to-blue-700',
      impact: 'Ajudava na avaliação e precificação de imóveis através de cálculos financeiros precisos'
    },
    {
      id: 'stone-pagarme',
      title: 'Stone/Pagar.me',
      subtitle: 'Sistema de KYC e Gestão de Risco',
      description: 'Plataforma de análise de risco e KYC (Know Your Customer) para definição de perfis de antecipação.',
      features: [
        'Processamento de KYC para clientes',
        'Definição de perfis de antecipação',
        'Análise de risco em tempo real',
        'Integração com sistema TON do BBB',
        'Processamento de cadastros em massa'
      ],
      techStack: {
        backend: ['Python', 'FastAPI', 'Celery'],
        frontend: ['React', 'TypeScript'],
        database: ['PostgreSQL', 'MongoDB'],
        tools: ['Docker', 'Kubernetes', 'Redis', 'RabbitMQ']
      },
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      gradient: 'from-green-500 to-green-700',
      impact: 'Permitia definir perfis de antecipação baseados em análise de risco e processamento de dados do BBB'
    },
    {
      id: 'mercadolivre-security',
      title: 'Mercado Livre',
      subtitle: 'Security Education Backend',
      description: 'Plataforma de capacitação de cursos para desenvolvedores do Mercado Livre, focada em desenvolvimento seguro.',
      features: [
        'Sistema de quiz e avaliações',
        'Desafios de código práticos',
        'Video aulas sobre segurança',
        'Cobertura de vulnerabilidades (XSS, SSRF, SQL Injection)',
        'Dashboard de progresso dos desenvolvedores',
        'Métricas de capacitação e engajamento'
      ],
      techStack: {
        backend: ['Golang'],
        frontend: ['React'],
        database: ['PostgreSQL', 'Redis'],
        tools: ['Datadog', 'Kibana', 'New Relic', 'Docker']
      },
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      gradient: 'from-red-500 to-red-700',
      impact: 'Mais de 10 mil desenvolvedores capacitados, gerando economia significativa ao substituir ferramenta paga'
    },
    {
      id: 'mercadolivre-genova',
      title: 'Mercado Livre',
      subtitle: 'Gerenciador de Arquivos (Genova)',
      description: 'Ferramenta para comunicação segura com bandeiras e integrações via SFTP em ambiente PCI.',
      features: [
        'Comunicação segura via SFTP',
        'Ambiente PCI para troca de arquivos',
        'Notificações automáticas para clientes',
        'Sistema de conciliação de dados',
        'Integração com múltiplas bandeiras',
        'Monitoramento e logs de transações'
      ],
      techStack: {
        backend: ['Golang'],
        frontend: ['React'],
        database: ['PostgreSQL', 'Redis'],
        tools: ['Datadog', 'Kibana', 'New Relic', 'SFTP', 'PCI DSS']
      },
      icon: Database,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      gradient: 'from-yellow-500 to-yellow-700',
      impact: 'Permitia comunicação segura com bandeiras e integrações, facilitando a conciliação para clientes'
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

  return (
    <section 
      id="projects" 
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Code className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projetos Destacados</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experiência prática em projetos complexos com impacto real no negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20 overflow-hidden ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Project Header */}
              <CardHeader className={`bg-gradient-to-r ${project.gradient} text-white pb-6`}>
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-white/20 backdrop-blur-sm`}>
                    <project.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                    <p className="text-white/90 font-medium">{project.subtitle}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                    Descrição
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-primary" />
                    Funcionalidades Principais
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start space-x-2 text-sm"
                        style={{
                          animationDelay: `${(index * 200) + (featureIndex * 100)}ms`,
                          animation: isVisible ? 'slideInRight 0.6s ease-out forwards' : 'none'
                        }}
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
                    Stack Tecnológico
                  </h3>
                  <div className="space-y-3">
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
                <div className={`p-4 rounded-lg ${project.bgColor} border-l-4 border-l-current`} style={{ borderLeftColor: project.color }}>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Users className="w-5 h-5 mr-2" style={{ color: project.color }} />
                    Impacto no Negócio
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interessado em Projetos Similares?</h3>
            <p className="text-muted-foreground mb-6">
              Tenho experiência em desenvolvimento de sistemas complexos e estou sempre aberto a novos desafios.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-lg px-6 py-3 hover:bg-primary hover:text-white transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                Sistemas Empresariais
              </Badge>
              <Badge variant="outline" className="text-lg px-6 py-3 hover:bg-primary hover:text-white transition-all duration-300">
                <Shield className="w-5 h-5 mr-2" />
                Segurança & Compliance
              </Badge>
              <Badge variant="outline" className="text-lg px-6 py-3 hover:bg-primary hover:text-white transition-all duration-300">
                <Calculator className="w-5 h-5 mr-2" />
                Cálculos Financeiros
              </Badge>
              <Badge variant="outline" className="text-lg px-6 py-3 hover:bg-primary hover:text-white transition-all duration-300">
                <Database className="w-5 h-5 mr-2" />
                Integrações PCI
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection; 