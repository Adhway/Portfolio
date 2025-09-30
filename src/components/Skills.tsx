import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C#", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Git", level: 85 },
        { name: "Google Cloud Platform", level: 70 },
        { name: "VS Code", level: 75 },
        { name: "MySQL Workbench", level: 65 },
        { name: "Express.js", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Here's a breakdown of my technical expertise across different domains
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `skillProgress 2s ease-out ${skillIndex * 0.1}s forwards`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;