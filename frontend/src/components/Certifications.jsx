import React from 'react';
import { certifications, resumeUrl } from '../mock';
import { Award, ExternalLink, Download } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#923FFF] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] bg-clip-text text-transparent">Credentials</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">Professional certifications and achievements</p>
          
          {/* Resume Download Button */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Abhijit_Ray_Resume_DevOps.pdf"
          >
            <Button className="px-8 py-6 bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#923FFF]/50 transition-all duration-300 hover:scale-105">
              <Download className="mr-2" size={20} />
              View My Resume
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="group relative bg-white/5 backdrop-blur-md border border-gray-800 hover:border-[#923FFF] transition-all duration-300 hover:shadow-lg hover:shadow-[#923FFF]/30 hover:-translate-y-2"
            >
              <CardContent className="p-6 space-y-4">
                {/* Certificate Logo/Icon */}
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-gray-700">
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={cert.title}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <Award 
                      className="text-[#7DBFFF] hidden" 
                      size={48}
                      style={{ display: cert.logo ? 'none' : 'block' }}
                    />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#7DBFFF] transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.date}</p>
                </div>

                {/* View Certificate Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    variant="outline"
                    className="w-full bg-transparent border-gray-700 text-gray-300 hover:border-[#923FFF] hover:text-white transition-all duration-300"
                  >
                    View Certificate
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
