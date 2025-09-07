
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Sites web modernes, responsifs et optimisés pour tous vos besoins business.',
      features: ['React/Next.js', 'E-commerce', 'CMS personnalisé', 'SEO optimisé'],
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      icon: Smartphone,
      title: 'Applications Mobile',
      description: 'Apps natives et hybrides pour iOS et Android avec une UX exceptionnelle.',
      features: ['React Native', 'Flutter', 'Apps natives', 'API Integration'],
      gradient: 'from-green-600 to-teal-600',
    },
    {
      icon: Settings,
      title: 'Solutions Logicielles',
      description: 'Logiciels sur-mesure pour automatiser et optimiser vos processus métier.',
      features: ['Gestion restaurant', 'Systèmes gym', 'Logiciels médicaux', 'ERP personnalisé'],
      gradient: 'from-orange-600 to-red-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nos Services
          </h2>
          <p className="text-gray-600 text-lg">
            Des solutions sur-mesure pour booster votre croissance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${service.gradient} shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white bg-opacity-20 mb-4">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-white/80 mb-4">{service.description}</p>
                <ul className="text-white/70 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-white/50" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.title === 'Développement Web' ? (
                  <Link to="/web-development-pricing">
                    <motion.button
                      className="mt-6 px-6 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-white/90 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      En savoir plus
                    </motion.button>
                  </Link>
                ) : service.title === 'Applications Mobile' ? (
                  <Link to="/mobile-app-pricing">
                    <motion.button
                      className="mt-6 px-6 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-white/90 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      En savoir plus
                    </motion.button>
                  </Link>
                ) : service.title === 'Solutions Logicielles' ? (
                  <Link to="/software-solutions-pricing">
                    <motion.button
                      className="mt-6 px-6 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-white/90 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      En savoir plus
                    </motion.button>
                  </Link>
                ) : (
                  <motion.button
                    className="mt-6 px-6 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-white/90 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    En savoir plus
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
