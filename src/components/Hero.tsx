import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
      <img
        src="https://i.postimg.cc/bvkNKrCZ/Whats-App-Image-2025-09-15-at-22-03-06-ab50f9f0.jpg"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
          Adhway
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-2 animate-fade-in-delay-1">
          Developer in AIML
        </p>
        
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
          Leveraging my skills in Web Development and contributing to creating innovative, user-friendly applications while 
          continuously enhancing my expertise in Artificial Intelligence and Machine Learning .
        </p>
        
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-3">
          <a href="mailto:adhwaysharma@gmail.com" target='main' className="p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-full transition-all duration-300 hover:scale-110">
            <Mail size={24} />
          </a>
          <a href="https://github.com/Adhway" target='main' className="p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-full transition-all duration-300 hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/adhway-sharma-566375256/" target='main'className="p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-full transition-all duration-300 hover:scale-110">
            <Linkedin size={24} />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-4">
          <a href="src\components\Resume_Adhway_2.pdf" target='main' className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
            View My Resume
          </a>
          <a href="#contact" className="px-8 py-3 border border-slate-600 rounded-full font-medium hover:bg-slate-700/50 transition-all duration-300">
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;