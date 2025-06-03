import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';

const HeroSection = ({ scrollY, scrollToSection }) => {
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-800">Olá, eu sou</span>
            <br />
            <span className="text-gradient">Adriel Castor</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Desenvolvedor Full Stack em início de carreira, com entusiasmo por criar experiências digitais e aprender novas tecnologias para construir soluções inovadoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
              onClick={() => scrollToSection('projects')}
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16"
        >
          <ChevronDown className="mx-auto h-8 w-8 text-gray-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;