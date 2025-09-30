import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Medical Imaging Intern",
      company: "Lenek Technologies India Pvt. Ltd",
      duration: "June 2025 - July 2025",
      location: "Lucknow, India",
      description: [
        "Designed an AI Model for the Bone Fracture Detection from the X-ray images of the patients. This project was done on Google Cloud Platform, consisting of the MURA Dataset, consisting of train,valid and test images of the body parts of multiple patients"
      ],
      technologies: ["Python", "Google Cloud Platform"]
    },
    {
      title: "Summer Intern",
      company: "IBM India Pvt. Ltd",
      duration: "June 2025 - July 2025",
      location: "Remote",
      description: [
        "Used a Django-based web application that uses Generative AI (Google Gemini 1.5 Pro API) to take the free text description of a patient, extract relevant medical keywords in real time and match them with clinical trials."
      ],
      technologies: ["Python", "Node.js", "Django", "Google Gemini 1.5 Pro API"]
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            My professional journey and internship experiences that have shaped my career
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 transform md:-translate-x-0.5"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform md:-translate-x-2 z-10"></div>
              
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar size={16} className="text-cyan-400" />
                    <span className="text-cyan-300 text-sm font-medium">{exp.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-purple-300 font-medium">{exp.company}</span>
                    <span className="text-slate-400">•</span>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} className="text-slate-400" />
                      <span className="text-slate-400 text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-slate-300 text-sm flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1.5 w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-slate-700/50 text-cyan-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
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

export default Experience;