import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Sobre Mim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              alt="Professional developer portrait"
              src="https://images.unsplash.com/photo-1634835855106-f4f0dc8279ca"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Sou um desenvolvedor full stack com mais de 5 anos de experiência criando aplicações web e mobile modernas.
              Minha paixão é transformar ideias complexas em soluções digitais elegantes e funcionais.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Especializado em React, Node.js e tecnologias modernas, sempre busco estar atualizado com as últimas
              tendências do desenvolvimento web para entregar produtos de alta qualidade.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600">Projetos</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">5+</div>
                <div className="text-gray-600">Anos</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;