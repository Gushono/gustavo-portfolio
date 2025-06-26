import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import CodeSnippetsSection from './components/CodeSnippetsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import './styles/App.css';

function App() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });

    // Easter Egg - Console Message
    const easterEgg = () => {
      console.log('%c🎉 CONGRATULATIONS! You found the Easter Egg! 🎉', 'color: #6366f1; font-size: 20px; font-weight: bold;');
      console.log('%c', 'font-size: 1px;');
      console.log('%c' + `
    ╔══════════════════════════════════════════════════════════════╗
    ║                                                              ║
    ║  🚀 You discovered the secret console message! 🚀           ║
    ║                                                              ║
    ║  👨‍💻 I'm Gustavo Honorato, a Backend Software Engineer     ║
    ║  📧 Email me at: gustavo.honoratonic@gmail.com              ║
    ║  💼 Subject: "Easter Egg Found - Prize Claim"               ║
    ║                                                              ║
    ║  🎁 First person to email me gets a special prize! 🎁       ║
    ║  🏆 Tell me what you think about my portfolio! 🏆           ║
    ║                                                              ║
    ║  💡 Pro tip: Check out the code snippets section too! 💡    ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
      `, 'color: #8b5cf6; font-family: monospace; font-size: 12px;');
      console.log('%c🔍 Want to see more? Try typing "help()" in the console!', 'color: #10b981; font-size: 14px; font-weight: bold;');
    };

    // Add help function to console
    window.help = () => {
      console.log('%c🤖 Developer Commands:', 'color: #f59e0b; font-size: 16px; font-weight: bold;');
      console.log('%c• help() - Show this help message', 'color: #6b7280; font-size: 14px;');
      console.log('%c• easterEgg() - Show the easter egg again', 'color: #6b7280; font-size: 14px;');
      console.log('%c• portfolio() - Get portfolio info', 'color: #6b7280; font-size: 14px;');
      console.log('%c• contact() - Get contact information', 'color: #6b7280; font-size: 14px;');
    };

    // Add easter egg function to console
    window.easterEgg = easterEgg;

    // Add portfolio info function
    window.portfolio = () => {
      console.log('%c📊 Portfolio Stats:', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
      console.log('%c• Built with: React + Vite + Tailwind CSS', 'color: #6b7280; font-size: 14px;');
      console.log('%c• Languages: Python, Go, JavaScript', 'color: #6b7280; font-size: 14px;');
      console.log('%c• Sections: 7 main sections', 'color: #6b7280; font-size: 14px;');
      console.log('%c• Deployed: GitHub Pages', 'color: #6b7280; font-size: 14px;');
    };

    // Add contact function
    window.contact = () => {
      console.log('%c📞 Contact Information:', 'color: #ef4444; font-size: 16px; font-weight: bold;');
      console.log('%c• Email: gustavo.honoratonic@gmail.com', 'color: #6b7280; font-size: 14px;');
      console.log('%c• LinkedIn: linkedin.com/in/gustavo-honorato-nic', 'color: #6b7280; font-size: 14px;');
      console.log('%c• GitHub: github.com/gushono', 'color: #6b7280; font-size: 14px;');
      console.log('%c• Location: Campinas, Brasil', 'color: #6b7280; font-size: 14px;');
    };

    // Show easter egg on page load
    easterEgg();

    // Cleanup function
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="App">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <CodeSnippetsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
