import React from 'react';
import { Github, ArrowDown } from 'lucide-react';
import { personalInfo } from '../mock';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Spotlight Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#923FFF] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#583FFF] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#7DBFFF] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] bg-clip-text text-transparent">{personalInfo.name}</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
            {personalInfo.title}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {personalInfo.subtitle}
          </p>
          
          <p className="text-base md:text-lg text-gray-500">
            {personalInfo.tagline}
          </p>

          {/* CTA Button */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToProjects}
              className="group relative px-8 py-6 text-base font-semibold text-white bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#923FFF]/50 hover:scale-105"
            >
              View My Work
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
            </Button>
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 text-base font-semibold text-white border-2 border-gray-700 rounded-lg hover:border-[#923FFF] transition-all duration-300 hover:shadow-lg hover:shadow-[#923FFF]/30"
            >
              <Github size={20} />
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;