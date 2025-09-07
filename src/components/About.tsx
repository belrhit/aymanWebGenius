import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Database, Globe, Zap, Users, Server } from 'lucide-react';
// import aymanProfile from '../assets/ayman-profile.png';

const About = () => {
  const skills = [
    { icon: Code2, name: 'Développement Web', level: 95 },
    { icon: Smartphone, name: 'Applications Mobile', level: 90 },
    { icon: Database, name: 'Base de Données', level: 88 },
    { icon: Server, name: 'Backend', level: 89 }, // ✅ Added backend
    { icon: Globe, name: 'Solutions Cloud', level: 85 },
    { icon: Zap, name: 'Performance', level: 92 },
    { icon: Users, name: 'Gestion de Projet', level: 87 },
  ];

  const experiences = [
    {
      year: '2025',
      title: 'Entrepreneur Tech',
      description: 'Création de solutions personnalisées pour entreprises',
    },
    {
      year: '2023',
      title: 'Développeur Full-Stack Senior',
      description:
        'Début de mon parcours en freelance, en développant et en réalisant des projets pour différents clients.',
    },
    {
      year: '2022',
      title: 'Spécialiste Applications Mobiles',
      description: "Développement d'apps natives et hybrides",
    },
    {
      year: '2020',
      title: 'Développeur Web',
      description: 'Sites web pour restaurants, salles de sport, cliniques',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            À Propos de Moi
          </h2>
          <p className="text-gray-600 leading-relaxed">
            J’aide les 🚀 Startups, entreprises, agences et 📊 cabinets à digitaliser leurs projets avec des 🌐 sites web professionnels,
            applications et logiciels de management et gestion personnalisés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Photo Section */}
          <motion.div
            className="lg:col-span-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/lovable-uploads/1a5ebb32-adc9-43b0-9ad3-ba19030ccc59.png"
                  alt="Ayman Belrhit - Développeur Full-Stack"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02205f]/20 to-transparent"></div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#02205f] rounded-full opacity-80"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-60"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="lg:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-700">
              Mes Compétences
            </h3>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center gap-2">
                  <skill.icon className="w-5 h-5 text-[#02205f]" />
                  <span className="text-gray-700">{skill.name}</span>
                </div>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-[#02205f] to-blue-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1.5,
                      delay: 0.7 + index * 0.1,
                      ease: 'easeOut',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="lg:col-span-1 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-700">
              Mon Expérience
            </h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="border-l-4 border-[#02205f] pl-4 py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <p className="text-sm text-gray-500">{exp.year}</p>
                <h4 className="font-semibold text-gray-800">{exp.title}</h4>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
