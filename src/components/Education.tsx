import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Higher Secondary Certificate",
      field: "Science (PCM + Computer Science)",
      institution: "City Montessori School",
      duration: "2021",
      grade: "89.5%",
      location: "Lucknow, India",
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Science (PCM + Computer Science)",
      institution: "St Francis College",
      duration: "2019",
      grade: "82.6%",
      location: "Lucknow, India",
    },
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "University of Petroleum & Energy Studies",
      duration: "2022 - 2026",
      grade: "7.16 CGPA",
      location: "Dehradun, India",
    }
  ];

  const achievements = [
    {
      title: "SpellBe Competition Winner",
      description: "1st Place in Inter-School Contest",
      year: "2019"
    },
    {
      title: "Football Champion",
      description: "Won 2nd place in the state-level",
      year: "2021"
    },
    {
      title: "Research Publication",
      description: "Co-authored paper on 'ML Applications in Healthcare'",
      year: "2023"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            My academic journey and notable achievements throughout my studies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <GraduationCap className="mr-3 text-cyan-400" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-purple-300 font-medium mb-2">{edu.field}</p>
                    <p className="text-slate-300">{edu.institution}</p>
                    <p className="text-slate-400 text-sm">{edu.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="flex items-center text-cyan-300 text-sm mb-1">
                      <Calendar size={14} className="mr-1" />
                      {edu.duration}
                    </div>
                    <div className="text-lg font-semibold text-white">{edu.grade}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Award className="mr-3 text-purple-400" />
              Key Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white">{achievement.title}</h4>
                    <span className="text-cyan-300 text-sm font-medium">{achievement.year}</span>
                  </div>
                  <p className="text-slate-300 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;