import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Build WhatsApp message
    const whatsappMessage = `Bonjour, je suis ${name} (${email}).\n\nSujet: ${subject}\n\nMessage: ${message}`;

    // Your WhatsApp number with country code (212 for Morocco)
    const phoneNumber = "212621036713";

    // Open WhatsApp with pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'belrhitaymane@gmail.com / belrhit@aymanwebgenius.space',
      link: 'mailto:belrhitaymane@gmail.com',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+212 621 03 67 13',
      link: 'tel:+212621036713',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Maroc, Casablanca',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Disponibilité',
      value: '24h/24 7j/7',
      link: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#02205f] via-[#1a237e] to-black text-white"
    >
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Contactez-moi
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.form
            className="space-y-6"
            onSubmit={handleSubmit}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div>
              <label htmlFor="name" className="block text-left text-sm font-medium">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full bg-white/5 border-white/10 rounded-md shadow-sm py-3 px-4 text-white placeholder-white/50 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full bg-white/5 border-white/10 rounded-md shadow-sm py-3 px-4 text-white placeholder-white/50 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-left text-sm font-medium">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full bg-white/5 border-white/10 rounded-md shadow-sm py-3 px-4 text-white placeholder-white/50 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Sujet de votre message"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-left text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full bg-white/5 border-white/10 rounded-md shadow-sm py-3 px-4 text-white placeholder-white/50 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-[#02205f] bg-white hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Envoyer <Send className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <item.icon className="w-6 h-6 text-white/70" />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white/80">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
