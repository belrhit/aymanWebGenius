import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  CheckCircle, 
  Mail, 
  User, 
  FileText, 
  DollarSign, 
  Phone,
  ArrowLeft,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const DevisPage = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget as HTMLFormElement;

    try {
      // Submit to FormSubmit
      await fetch("https://formsubmit.co/ajax/belrhitaymane@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
          project: (form.elements.namedItem("project") as HTMLSelectElement).value,
          budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
          _subject: "Nouvelle demande de devis",
          _template: "table"
        })
      });

      // ✅ Only show success message, no WhatsApp redirect
      setIsSent(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#02205f] via-[#0d47a1] to-black text-white flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full px-6 py-4 flex items-center justify-between bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50"
      >
        <Link 
          to="/" 
          className="text-2xl font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Ayman<span className="text-blue-400">Dev</span>
        </Link>
        <div className="hidden md:flex gap-6 text-white/80 font-medium">
          <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
          <Link to="/#about" className="hover:text-white transition-colors">À propos</Link>
          <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
          <Link to="/#portfolio" className="hover:text-white transition-colors">Portfolio</Link>
          <Link to="/#clientniches" className="hover:text-white transition-colors">Créneaux</Link>
          <Link to="/#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </motion.nav>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 relative z-10 flex-1 flex flex-col items-center justify-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12 px-6"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Demander un <span className="text-blue-300">Devis</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Décrivez-nous votre projet et recevez une estimation claire et rapide.  
            Nous vous répondrons sous 24h.
          </motion.p>
        </motion.div>

        {/* Form */}
        {!isSent ? (
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 w-full max-w-3xl mx-auto shadow-lg border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <motion.div variants={itemVariants} className="relative">
                <User className="absolute top-3 left-3 text-white/60 w-5 h-5" />
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Votre nom complet" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300" 
                  required 
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="relative">
                <Mail className="absolute top-3 left-3 text-white/60 w-5 h-5" />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Votre adresse email" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300" 
                  required 
                />
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants} className="relative md:col-span-2">
                <Phone className="absolute top-3 left-3 text-white/60 w-5 h-5" />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Votre numéro de téléphone" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300" 
                  required 
                />
              </motion.div>

              {/* Project */}
              <motion.div variants={itemVariants} className="relative md:col-span-2">
                <FileText className="absolute top-3 left-3 text-white/60 w-5 h-5" />
                <select 
                  name="project" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 appearance-none" 
                  required
                >
                  <option value="">Type de projet</option>
                  <option>Site Vitrine</option>
                  <option>E-commerce</option>
                  <option>Application Mobile</option>
                  <option>Logiciel sur mesure</option>
                  <option>Projet SaaS</option>
                  <option>Refonte de site</option>
                  <option>SEO/Referencement</option>
                  <option>Autre</option>
                </select>
              </motion.div>

              {/* Budget */}
              <motion.div variants={itemVariants} className="relative md:col-span-2">
                <DollarSign className="absolute top-3 left-3 text-white/60 w-5 h-5" />
                <select 
                  name="budget" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 appearance-none" 
                  required
                >
                  <option value="">Budget estimé</option>
                  <option>Moins de 1000 MAD</option>
                  <option>1000 MAD - 2000 MAD</option>
                  <option>2000 MAD - 5000 MAD</option>
                  <option>5000 MAD - 10000 MAD</option>
                  <option>Plus de 10000 MAD</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants} className="relative md:col-span-2">
                <textarea 
                  name="message" 
                  placeholder="Décrivez brièvement votre projet, vos objectifs, et toute exigence particulière..." 
                  rows={5} 
                  className="w-full pl-4 pr-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300" 
                  required 
                />
              </motion.div>
            </div>

            {/* Submit */}
            <motion.div variants={itemVariants} className="mt-8">
              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -2 }} 
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }} 
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer ma demande
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* WhatsApp alternative */}
            <motion.div 
              variants={itemVariants}
              className="mt-4 text-center"
            >
              <p className="text-white/70 text-sm mb-2">Ou contactez-nous directement sur WhatsApp</p>
              <a 
                href="https://wa.me/212621036713" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </motion.div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="bg-green-500/20 border border-green-400 text-green-300 p-6 md:p-8 rounded-2xl text-center max-w-lg mx-auto w-full backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <CheckCircle className="w-12 h-12 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-2xl font-bold mb-3">Demande envoyée avec succès! ✅</h2>
            <p className="mb-4">Nous avons bien reçu votre demande et vous contacterons dans les plus brefs délais.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSent(false)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors duration-300"
            >
              Nouvelle demande
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center py-6 text-white/60 text-sm border-t border-white/10 mt-auto"
      >
        <p>© {new Date().getFullYear()} AymanDev. Tous droits réservés.</p>
      </motion.footer>
    </section>
  );
};

export default DevisPage;
