import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filters = ['Tous', 'Web', 'Mobile', 'Logiciel'];

  const projects = [
    {
      id: 1,
      title: 'PickleStrike',
      category: 'Web',
      description: 'Boutique en ligne dédiée aux produits de pickleball avec système de commande complet.',
      image: 'https://i.postimg.cc/MKBFSMfg/i-Screen-Shoter-Brave-Browser-250602010236.jpg',
      technologies: ['E-commerce', 'Boutique en ligne', 'Paiements', 'Gestion produits'],
      liveUrl: 'https://picklestrike.store',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Safe-Perform Solutions',
      category: 'Web',
      description: 'Site vitrine pour un cabinet de formation & consulting en QHSE avec présentation des services.',
      image: 'https://i.postimg.cc/xTSxsXsJ/i-Screen-Shoter-Brave-Browser-250902195246.jpg',
      technologies: ['Site vitrine', 'QHSE', 'Formation', 'Consulting'],
      liveUrl: 'https://safe-perform.com',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Cabinet Comptable Abdelatif Saif',
      category: 'Web',
      description: 'Site web professionnel pour un cabinet comptable avec présentation des services comptables.',
      image: 'https://i.postimg.cc/zB9YxwKG/i-Screen-Shoter-Brave-Browser-250602004242.jpg',
      technologies: ['Site professionnel', 'Comptabilité', 'Services', 'Contact'],
      liveUrl: 'https://saifabdellatif.site',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Portfolio Personnel',
      category: 'Web',
      description: 'Présentation de mes services et projets avec design moderne et animations interactives.',
      image: 'https://i.postimg.cc/YCFbcxgX/i-Screen-Shoter-Brave-Browser-250608204644.jpg',
      technologies: ['Portfolio', 'React', 'Animations', 'Design moderne'],
      liveUrl: 'https://aymanwebgenius.space',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Logiciel de Gestion - Location de Voitures',
      category: 'Logiciel',
      description: 'Logiciel de gestion facilitant la réservation, le suivi des véhicules, la facturation et la relation client.',
      image: 'https://i.postimg.cc/L8KybnNg/Screenshot-2025-09-02-at-19-44-48.png',
      technologies: ['Gestion', 'Réservations', 'Facturation', 'CRM'],
      liveUrl: 'https://wheat-toad-892819.hostingersite.com/',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Logiciel de Gestion - Recharges en Gros',
      category: 'Logiciel',
      description: 'Logiciel de gestion permettant de suivre les ventes de recharges en gros, la gestion des clients et des stocks.',
      image: 'https://i.postimg.cc/JzcYJdjY/q.jpg',
      technologies: ['Gestion stocks', 'Ventes', 'Clients', 'Recharges'],
      liveUrl: 'https://dodgerblue-echidna-899037.hostingersite.com/',
      githubUrl: '#',
    },
  ];

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Title and Filter */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            Mes Projets Récents
          </h2>

          <div className="flex items-center space-x-4">
            <Filter className="text-gray-600" size={20} />
            {filters.map(filter => (
              <motion.button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                }`}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-500 text-xs rounded-full px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center gap-1"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center gap-1"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
