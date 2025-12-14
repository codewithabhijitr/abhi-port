import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../mock';
import { Cloud, Box, GitBranch, Terminal, Cog } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const categoryIcons = {
    'Cloud': Cloud,
    'IaC & Automation': Cog,
    'Containers': Box,
    'CI/CD': GitBranch,
    'Scripting': Terminal,
    'Core': Terminal
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7DBFFF] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = categoryIcons[skill.category] || Terminal;
            
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md border border-gray-800 rounded-lg p-6 hover:border-[#923FFF] transition-all duration-300 hover:shadow-lg hover:shadow-[#923FFF]/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Icon className="text-[#7DBFFF]" size={24} />
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  </div>
                  <span className="text-sm font-medium text-[#923FFF]">{skill.percentage}%</span>
                </div>
                
                <div className="text-xs text-gray-500 mb-2">{skill.category}</div>
                
                {/* Progress Bar */}
                <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : '0%'
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;