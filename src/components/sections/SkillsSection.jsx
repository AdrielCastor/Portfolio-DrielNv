import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Database, Globe } from 'lucide-react';

const skillsData = [
  { name: 'React', level: 95, icon: Code },
  { name: 'JavaScript', level: 90, icon: Code },
  { name: 'UI/UX Design', level: 85, icon: Palette },
  { name: 'Mobile Development', level: 80, icon: Smartphone },
  { name: 'Backend Development', level: 75, icon: Database },
  { name: 'Web Development', level: 92, icon: Globe },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Habilidades</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-3 skill-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full"
                  ></motion.div>
                </div>
                <span className="text-sm text-gray-600 mt-2 block">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;