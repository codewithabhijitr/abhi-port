import React, { useState } from 'react';
import { testimonials } from '../mock';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#583FFF] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg">What people say about my work</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="flex items-center justify-center min-h-[400px]">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className={`absolute w-full transition-all duration-500 ${
                    index === activeIndex
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-95 z-0'
                  } bg-white/5 backdrop-blur-md border-2 ${
                    index === activeIndex ? 'border-[#923FFF]' : 'border-gray-800'
                  }`}
                >
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <Quote className="text-[#7DBFFF]" size={48} />
                      
                      <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic">
                        "{testimonial.feedback}"
                      </p>

                      <div className="flex flex-col items-center space-y-3 pt-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-2 border-[#923FFF] object-cover"
                        />
                        <div>
                          <h4 className="text-white font-semibold text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-gray-800 hover:border-[#923FFF] flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-gray-800 hover:border-[#923FFF] flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-gradient-to-r from-[#923FFF] to-[#7DBFFF]'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;