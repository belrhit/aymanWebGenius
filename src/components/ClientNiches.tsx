import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  ShoppingBag, 
  TrendingUp, 
  Users, 
  Calendar,
  Shield,
  ArrowRight
} from 'lucide-react';

const ClientNiches = () => {
  const niches = [
    {
      icon: Briefcase,
      title: 'PME & Cabinets',
      description: 'Solutions digitales sur mesure pour cabinets et services professionnels',
      features: [
        'Sites web modernes et sécurisés',
        'Optimisation SEO locale',
        'Prise de rendez-vous en ligne',
        'Outils de gestion et facturation'
      ],
      color: 'from-indigo-500 to-blue-600',
      projects: '14+ projets',
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce',
      description: 'Sites e-commerce performants pour booster vos ventes',
      features: [
        'Design orienté conversion',
        'Intégration de paiements sécurisés',
        'Optimisation mobile & UX',
        'Analytics & suivi des performances'
      ],
      color: 'from-pink-500 to-red-500',
      projects: '12+ projets',
    },
  ];

  const stats = [
    { icon: TrendingUp, value: '26+', label: 'Projets Réalisés' },
    { icon: Users, value: '18+', label: 'Clients Satisfaits' },
    { icon: Calendar, value: '3', label: 'Années d\'Expérience' },
    { icon: Shield, value: '100%', label: 'Sécurité Garantie' },
  ];

  return (
    <section id="niches" className="py-20 bg-white">
      <motion.div 
        className="container mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Nos Niches de Clients
        </motion.h2>

        {/* Niches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {niches.map((niche, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              style={{
                background: `linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.7)), url(/gradient-bg.svg)`,
                backgroundSize: 'cover',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <div className="p-6">
                <motion.div 
                  className="flex items-center justify-center text-5xl text-white rounded-full w-20 h-20 mx-auto mb-4"
                  style={{
                    background: `linear-gradient(45deg, ${niche.color})`,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <niche.icon size={36} />
                </motion.div>
                <motion.h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {niche.title}
                </motion.h3>
                <motion.p className="text-gray-600 mb-4 leading-relaxed">
                  {niche.description}
                </motion.p>
                <motion.ul className="text-sm text-gray-700 space-y-2">
                  {niche.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-gray-500" />
                      {feature}
                    </li>
                  ))}
                </motion.ul>
              </div>
              <motion.div className="bg-gray-100 py-3 text-gray-700 text-sm font-medium">
                {niche.projects}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div className="text-2xl text-gray-700 mb-2">
                <stat.icon size={32} />
              </motion.div>
              <motion.div className="text-2xl font-bold text-blue-600">{stat.value}</motion.div>
              <motion.div className="text-sm text-gray-500">{stat.label}</motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClientNiches;
