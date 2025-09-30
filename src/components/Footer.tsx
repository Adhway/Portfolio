import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400 flex items-center space-x-2">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>and</span>
              <Code size={16} className="text-cyan-400" />
              <span>by Adhway</span>
            </p>
          </div>
          
          <div className="text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Adhway. All rights reserved.</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-slate-500 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;