import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Web Development using HTML,CSS & JS",
      issuer: "Course Era",
      date: "March 2023",
      skills: ["Basic Frontend Development", "HTML", "CSS", "JS"]
    },
    {
      title: "Google Cloud Developer",
      issuer: "Google Cloud",
      date: "June 2025",
      skills: ["GCP Services", "Bucket Mount", "API Key"]
    },
    {
      title: "SIH Hackthon",
      issuer: "International",
      date: "September 2025",
      skills: ["Tailwind CSS", "Vita React"]
    },
    {
      title: "Principle of Programming Languages",
      issuer: "Geeks for Geeks",
      date: "January 2022",
      skills: ["C#", "C++"]
    },
    {
      title: "Python Programming",
      issuer: "Apna College You Tube",
      date: "March 2022",
      skills: ["Python"]
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Gate Smashers",
      date: "May 2023",
      skills: ["Python", "Pre-Processing", "Exploratory Data Analysis"]
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional certifications and credentials that validate my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="group bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-cyan-300 text-sm font-medium">{cert.date}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{cert.title}</h3>
              <p className="text-purple-300 font-medium mb-3">{cert.issuer}</p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-2 py-1 bg-slate-700/50 text-cyan-300 text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-slate-400">
            <Award size={20} className="text-cyan-400" />
            <span>All certifications are verified and up-to-date</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;