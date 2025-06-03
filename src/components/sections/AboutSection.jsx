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
             Estou iniciando minha jornada como desenvolvedor Full Stack, focado em aprender e evoluir constantemente no desenvolvimento de aplicações web. Tenho me dedicado ao aprimoramento em linguagens como Java, C# e JavaScript, além de já ter uma boa familiaridade com o React e outras tecnologias modernas.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
             Também tenho conhecimentos em UX e Design, o que me ajuda a criar interfaces mais intuitivas e agradáveis. Meu objetivo é transformar ideias em soluções funcionais, ganhando experiência prática e acompanhando as tendências do desenvolvimento para crescer na área e entregar projetos de qualidade.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">20+</div>
                <div className="text-gray-600">Projetos</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">1+</div>
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