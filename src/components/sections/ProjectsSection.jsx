import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com React, Node.js e MongoDB. Interface moderna e responsiva com sistema de pagamentos integrado.',
    image: 'Modern e-commerce platform with shopping cart and payment system',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management App',
    description: 'Aplicativo de gerenciamento de tarefas com funcionalidades avançadas de colaboração em equipe e notificações em tempo real.',
    image: 'Task management dashboard with kanban board and team collaboration',
    tech: ['React', 'Firebase', 'Material-UI', 'PWA'],
    github: '#',
    live: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Site de portfólio responsivo com animações suaves e design moderno. Otimizado para performance e SEO.',
    image: 'Modern portfolio website with smooth animations and responsive design',
    tech: ['React', 'Framer Motion', 'TailwindCSS'],
    github: '#',
    live: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Projetos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  alt={`${project.title} project screenshot`}
                  src="https://images.unsplash.com/photo-1572177812156-58036aae439c"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex space-x-2">
                      <Button asChild size="sm" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                         <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;