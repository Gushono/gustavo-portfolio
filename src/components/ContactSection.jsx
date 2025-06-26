import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Coffee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gustavo.honoratonic@gmail.com',
      href: 'mailto:gustavo.honoratonic@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+55 19 9 7102 9973',
      href: 'tel:+5519971029973',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Campinas, Brasil',
      href: '#',
      color: 'text-red-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/gushono',
      color: 'hover:bg-gray-800 hover:text-white',
      description: 'Check out my code'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gustavo-honorato-nic/',
      color: 'hover:bg-blue-600 hover:text-white',
      description: 'Let\'s connect professionally'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:gustavo.honoratonic@gmail.com',
      color: 'hover:bg-primary hover:text-primary-foreground',
      description: 'Send me a message'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-background to-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Ready to collaborate on your next project? I'm always excited to discuss new opportunities 
            and innovative solutions.
          </p>
          <div className="flex justify-center items-center space-x-2 text-muted-foreground">
            <Coffee className="w-5 h-5" />
            <span>Available for remote work worldwide</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Details */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-full bg-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className={`w-5 h-5 ${contact.color}`} />
                  </div>
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Connect with Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 rounded-lg border-2 border-transparent transition-all duration-300 group ${social.color}`}
                >
                  <div className="flex items-center space-x-4">
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="font-medium">{social.label}</p>
                      <p className="text-sm opacity-70">{social.description}</p>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you need a robust backend system, API development, or cloud architecture, 
              I'm here to help bring your ideas to life with clean, scalable solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="group">
                <a href="mailto:gustavo.honoratonic@gmail.com">
                  <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Start a Conversation
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <a href="https://www.linkedin.com/in/gustavo-honorato-nic/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  View LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Resume Download */}
        <div className="text-center mt-16 pt-16 border-t border-border/20">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
            <p className="text-muted-foreground mb-6">
              Get a detailed overview of my experience, skills, and achievements in a printable format.
            </p>
            <Button size="lg" variant="outline" asChild className="group">
              <a href="gustavo-resume.pdf" download="gustavo-resume.pdf">
                <svg className="w-4 h-4 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

