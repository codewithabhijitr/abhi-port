import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../mock';
import { ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;
          
          if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
            setActiveProject(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="relative bg-black">
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Real-world DevOps implementations</p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="min-h-screen flex items-center justify-center px-6"
            >
              <div
                className={`max-w-6xl w-full transition-all duration-700 ${
                  activeProject === index
                    ? 'opacity-100 scale-100'
                    : 'opacity-30 scale-95'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Project Image */}
                  <div className="order-2 lg:order-1">
                    <div className="relative group rounded-xl overflow-hidden border border-gray-800 hover:border-[#923FFF] transition-all duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="order-1 lg:order-2 space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="bg-white/5 border-gray-700 text-[#7DBFFF] hover:border-[#923FFF] transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#923FFF]/50 transition-all duration-300 hover:scale-105"
                    >
                      View Project
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;