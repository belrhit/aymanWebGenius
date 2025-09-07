import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code, Smartphone, Server, ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Développeur Full-Stack",
      subtitle: "Solutions Web Innovantes",
      description:
        "Je transforme vos idées en applications web modernes et performantes avec les dernières technologies.",
      cta1: { label: "Découvrir mes projets", link: "#projects" },
      cta2: { label: "Me contacter", link: "#contact" },
      background: "from-[#02205f] via-[#1a237e] to-black",
    },
    {
      title: "Expert Mobile & Apps",
      subtitle: "Applications Natives & Hybrides",
      description:
        "Développement d'applications mobiles sur mesure pour iOS et Android, optimisées pour vos besoins business.",
      cta1: { label: "Voir mes apps", link: "#apps" },
      cta2: { label: "Demander un devis", link: "./Devis" },
      background: "from-[#02205f] via-[#0d47a1] to-[#1a237e]",
    },
    {
      title: "Solutions Logicielles",
      subtitle: "Systèmes de Gestion Sur-Mesure",
      description:
        "Création de logiciels personnalisés pour restaurants, salles de sport et cliniques médicales.",
      cta1: { label: "Explorer solutions", link: "#solutions" },
      cta2: { label: "Consultation gratuite", link: "#contact" },
      background: "from-black via-[#02205f] to-[#1a237e]",
    },
  ];

  const floatingIcons = [
    { Icon: Code, delay: 0, x: -20, y: -30 },
    { Icon: Smartphone, delay: 0.5, x: 20, y: -20 },
    { Icon: Server, delay: 1, x: -15, y: 20 },
  ];

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].background}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-white/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            y: [y, y - 15, y],
            x: [x, x + 10, x],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay,
          }}
          style={{
            left: `${20 + index * 30}%`,
            top: `${30 + index * 20}%`,
          }}
        >
          <Icon size={48} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              background:
                "linear-gradient(45deg, #ffffff, #64b5f6, #ffffff)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ayman Belrhit
          </motion.span>
        </motion.h1>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              className="text-2xl md:text-4xl text-white/95 font-semibold"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {slides[currentSlide].title}
            </motion.h2>

            <motion.h3
              className="text-lg md:text-xl text-white/80"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {slides[currentSlide].subtitle}
            </motion.h3>

            <motion.p
              className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href={slides[currentSlide].cta1.link}
                className="group px-8 py-4 bg-white text-[#02205f] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {slides[currentSlide].cta1.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href={slides[currentSlide].cta2.link}
                className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#02205f] transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4" />
                {slides[currentSlide].cta2.label}
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 cursor-pointer"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() =>
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
