import React from 'react';
import { Code, Database, Brain, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "Frontend Development",
      description: "Proficient in modern web development and frameworks"
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: "Database Management",
      description: "Experience with SQL and NoSQL database systems"
    },
    {
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      title: "Machine Learning",
      description: "Knowledge of ML algorithms and data science"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Problem Solving",
      description: "Strong analytical and algorithmic thinking skills"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm a dedicated Computer Science Engineering student with a passion for technology and innovation. 
            My journey in Aritficial Intelligence has equipped me with strong technical skills and a problem-solving mindset.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
            <p className="text-slate-300 leading-relaxed">
              Currently pursuing my Bachelor's degree in Computer Science and Engineering, I have developed 
              a strong interest in programming languages and their algorithm. Through various 
              projects and internships, I've gained hands-on experience in coding related to the languages 
              like C#,C++,Java and Python.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I'm passionate about creating efficient, scalable solutions and continuously learning new technologies 
              to stay at the forefront of the rapidly evolving tech landscape.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 bg-slate-700/50 rounded-full text-sm text-cyan-300">Problem Solver</span>
              <span className="px-4 py-2 bg-slate-700/50 rounded-full text-sm text-purple-300">Team Member</span>
              <span className="px-4 py-2 bg-slate-700/50 rounded-full text-sm text-pink-300">Quick Learner</span>
              <span className="px-4 py-2 bg-slate-700/50 rounded-full text-sm text-yellow-300">Innovation Driven</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;