
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import ClientNiches from '../components/ClientNiches';
import Contact from '../components/Contact';
import Preloader from '../components/Preloader';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation />
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <ClientNiches />
          <Contact />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
