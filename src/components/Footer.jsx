import React from 'react';
import { Heart, Code, Coffee, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GH</span>
              </div>
              <span className="font-bold text-lg">Gustavo Honorato</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Backend Software Engineer passionate about creating scalable solutions 
              and solving complex problems with clean, efficient code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'About Me', href: '#about' },
                { label: 'Experience', href: '#experience' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-background/70 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Let's Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:gustavo.honoratonic@gmail.com"
                className="flex items-center space-x-2 text-background/70 hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>gustavo.honoratonic@gmail.com</span>
              </a>
              <p className="flex items-center space-x-2 text-background/70">
                <span>📍</span>
                <span>Campinas, Brasil</span>
              </p>
            </div>
            
            <div className="flex space-x-3 pt-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-gray-400 text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                asChild
              >
                <a href="https://github.com/gushono" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-gray-400 text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com/in/gustavo-honorato-nic" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-gray-400 text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                asChild
              >
                <a href="mailto:gustavo.honoratonic@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-background/70">
              <span>© {currentYear} Gustavo Honorato. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-500" />
              <span>using</span>
              <Code className="w-4 h-4 text-primary" />
              <span>React</span>
            </div>
            
            <div className="text-background/70 text-sm">
              <span>"Born in 2000, coding since 2017, solving problems since forever"</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

