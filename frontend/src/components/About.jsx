import React from 'react';
import { personalInfo, aboutText, highlightCards } from '../mock';
import { Card, CardContent } from './ui/card';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#583FFF] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              About <span className="bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] bg-clip-text text-transparent">Me</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>{aboutText.intro}</p>
              <p>{aboutText.expertise}</p>
              <p>{aboutText.philosophy}</p>
              <p className="text-[#7DBFFF] font-semibold">{aboutText.current}</p>
            </div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            Professional <span className="bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] bg-clip-text text-transparent">Experience</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {highlightCards.map((card) => (
              <Card
                key={card.id}
                className="group relative bg-white/5 backdrop-blur-md border border-gray-800 hover:border-[#923FFF] transition-all duration-300 hover:shadow-lg hover:shadow-[#923FFF]/30 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center space-y-2">
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] bg-clip-text text-transparent">
                    {card.value}
                  </p>
                  <p className="text-xs text-gray-500">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;