import React from 'react';
import { services } from '../mock';
import { Server, Cloud, GitBranch, Box } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Services = () => {
  const icons = [Server, Cloud, GitBranch, Box];

  return (
    <section id="services" className="relative py-24 bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-[#923FFF] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I <span className="bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-gray-400 text-lg">DevOps practices and solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            
            return (
              <Card
                key={service.id}
                className="group relative bg-white/5 backdrop-blur-md border border-gray-800 hover:border-[#923FFF] transition-all duration-300 hover:shadow-lg hover:shadow-[#923FFF]/30 hover:-translate-y-2"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#7DBFFF] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;