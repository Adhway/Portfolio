import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Lane Detection Web Layout",
      description: "Developed a basic web layout for E-Challan, consisting of the lane changing of the vehicles. In this project, the OpenCV software was implemented in VS Code for better functioning. [cite: 15, 16, 17]",
      technologies: ["C#","Android Studio","OpenCV", "VS Code"],
      githubUrl: "",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg"
    },
    {
      title: "Domestic Ease-Home Care Matching Platform",
      description: "An app was designed using VSCode with a technology stack including client-side React.js, server-side Node.js and Express, and MongoDB for the database. [cite_start]Various APIs and third-party service APIs (e.g., Razorpay for payment processing and Twilio for messaging) were used for additional functionalities and user convenience. [cite: 18, 20, 21]",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "VS Code", "Razorpay API", "Twilio API"],
      githubUrl: "https://github.com/Adhway/Domestic-Ease",
      image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-slate-700/50 text-cyan-300 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
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