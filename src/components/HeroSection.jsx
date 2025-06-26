import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import profilePicture from '../assets/08791323-71ca-4c85-acf6-b0af5b9ac868.jpeg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Born in 2000, coding since 2017, solving problems since forever';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Code snippets background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 font-mono text-sm">
          <div>func main() {`{`}</div>
          <div className="ml-4">fmt.Println("Hello, World!")</div>
          <div>{`}`}</div>
        </div>
        <div className="absolute bottom-20 left-1/3 font-mono text-sm">
          <div>def solve_problem():</div>
          <div className="ml-4">return "elegant_solution"</div>
        </div>
        <div className="absolute top-1/3 right-20 font-mono text-sm">
          <div>const engineer = {`{`}</div>
          <div className="ml-4">passion: "backend",</div>
          <div className="ml-4">experience: "5+ years"</div>
          <div>{`}`}</div>
        </div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          {/* Profile Picture */}
          <div className="mb-8">
            <img 
              src={profilePicture} 
              alt="Gustavo Honorato"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-2xl object-cover"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Gustavo Honorato
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
            Backend Software Engineer | Python & Golang Specialist
          </h2>
          <div className="h-8 mb-8">
            <p className="text-lg md:text-xl text-muted-foreground font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6 mb-12">
          <Button
            variant="outline"
            size="lg"
            className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href="https://github.com/gushono" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2 group-hover:animate-spin" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group hover:bg-blue-600 hover:text-white transition-all duration-300"
            asChild
          >
            <a href="https://linkedin.com/in/gustavo-honorato-nic" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group hover:bg-green-600 hover:text-white transition-all duration-300"
            asChild
          >
            <a href="mailto:gustavo.honoratonic@gmail.com">
              <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Contact
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce cursor-pointer" onClick={scrollToNext}>
          <ChevronDown className="w-8 h-8 mx-auto text-primary" />
          <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

