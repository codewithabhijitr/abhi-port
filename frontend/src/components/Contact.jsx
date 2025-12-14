import React, { useState } from 'react';
import { personalInfo } from '../mock';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with backend API
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-24 bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#923FFF] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7DBFFF] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something <span className="bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] bg-clip-text text-transparent">Great Together</span>
          </h2>
          <p className="text-gray-400 text-lg">Have a project in mind? Let's talk!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md border border-gray-800 rounded-lg hover:border-[#923FFF] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#923FFF] to-[#583FFF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white font-medium">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md border border-gray-800 rounded-lg hover:border-[#923FFF] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#583FFF] to-[#7DBFFF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="text-white font-medium">Connect with me</p>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md border border-gray-800 rounded-lg hover:border-[#923FFF] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#7DBFFF] to-[#923FFF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="text-white font-medium">View my work</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-600 focus:border-[#923FFF] transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-600 focus:border-[#923FFF] transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-600 focus:border-[#923FFF] transition-colors duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 bg-gradient-to-r from-[#923FFF] via-[#583FFF] to-[#7DBFFF] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#923FFF]/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2" size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;