import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowLeft, Zap, Globe, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const WebDevelopmentPricing = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const packages = [
    {
      id: 1,
      name: 'Standard',
      price: '0 - 999',
      currency: 'DHS',
      description: 'Une solution idéale pour lancer votre présence en ligne',
      features: [
        'Site vitrine d’une page professionnelle',
        'Design moderne et élégant',
        '100% Responsive (mobile, tablette, ordinateur)',
        'Sécurisation SSL incluse',
        'Intégration WhatsApp pour contact direct',
        'Hébergement offert pendant 1 an',
        'Nom domaine personnalisé offert (.com, .ma, .net…)',
        'Support technique de démarrage',
        'Accompagnement pendant 1 mois'
      ],
      gradient: 'from-blue-500 to-purple-600',
      popular: false,
      icon: Globe,
      height: 'h-auto'
    },
    {
      id: 2,
      name: 'Premium',
      price: '1499',
      currency: 'DHS',
      description: 'La solution complète et professionnelle pour booster votre activité',
      features: [
        'Site web jusqu’à 5 pages optimisées',
        'Design moderne avec animations interactives',
        '100% Responsive (mobile, tablette, ordinateur)',
        'Sécurisation SSL incluse',
        'Connexion à vos réseaux sociaux',
        'Optimisation SEO de base pour Google',
        'Formulaire de contact intelligent',
        'Support technique prioritaire',
        'Accompagnement pendant 3 mois'
      ],
      gradient: 'from-emerald-500 to-teal-600',
      popular: true,
      icon: Star,
      height: 'h-auto'
    },
    {
      id: 3,
      name: 'Entreprise',
      price: '2500',
      currency: 'DHS',
      description: 'Un site sur-mesure, puissant et évolutif pour les grandes ambitions',
      features: [
        'Nombre de pages illimité',
        'Design 100% personnalisé avec animations avancées',
        '100% Responsive (mobile, tablette, ordinateur)',
        'Sécurité maximale (SSL + protection avancée)',
        'Intégration complète des réseaux sociaux',
        'SEO avancé + configuration Google Analytics',
        'Espace d’administration sécurisé',
        'Blog / actualités intégré',
        'Galerie photos et vidéos',
        'Formulaires avancés personnalisés',
        'Chat en ligne intégré',
        'Sauvegardes automatiques régulières',
        'Hébergement premium inclus (1 an)',
        'Support technique 24/7 illimité',
        'Formation complète à l’utilisation',
        'Fonctionnalités d’IA intégrées',
        'Accompagnement pendant 6 mois'
      ],
      gradient: 'from-orange-500 to-red-600',
      popular: false,
      icon: Zap,
      height: 'h-auto'
    },
    {
      id: 4,
      name: 'Plateforme Avancée',
      price: '5000+',
      currency: 'DHS',
      description: 'Solution complète avec backend et base de données pour applications complexes',
      features: [
        'Application web complète avec backend robuste',
        'Base de données sécurisée et optimisée',
        'API RESTful personnalisée',
        'Système d\'authentification utilisateur avancé',
        'Tableau de bord administrateur complet',
        'Backoffice de gestion des données',
        'Système de rôles et permissions',
        'Sauvegardes automatiques quotidiennes',
        'Hébergement serveur dédié/VPS',
        'Mise à l\'échelle automatique',
        'Monitoring des performances',
        'Intégration de paiement en ligne sécurisée',
        'Synchronisation multi-appareils',
        'Notifications en temps réel',
        'Support technique prioritaire 24/7',
        'Formation approfondie à l\'administration',
        'Maintenance et mises à jour incluses (3 mois)',
        'Accompagnement personnalisé pendant 1 an'
      ],
      gradient: 'from-indigo-600 to-purple-700',
      popular: false,
      icon: Database,
      height: 'h-auto'
    }
  ];

  const handlePackageSelect = (packageId: number) => {
    setSelectedPackage(packageId);
    setIsDialogOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);

    try {
      await fetch("https://formsubmit.co/ajax/belrhitaymane@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          package: selectedPkg?.name,
          price: `${selectedPkg?.price} ${selectedPkg?.currency}`,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          note: formData.note || "Aucune note spéciale",
          _subject: "Nouvelle demande de devis - Développement Web",
          _template: "table",
        }),
      });

      toast({
        title: "Demande envoyée avec succès!",
        description: "Votre demande a été transmise. Nous vous répondrons par email dans les plus brefs délais.",
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        note: ''
      });
      setIsDialogOpen(false);
      setSelectedPackage(null);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} />
            Retour à l'accueil
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Développement Web
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Choisissez le package qui correspond à vos besoins et transformez votre vision en réalité digitale
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Nos Packages</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className={`relative rounded-3xl p-6 shadow-2xl flex flex-col ${pkg.height} ${
                pkg.popular 
                  ? 'bg-white border-4 border-emerald-500 ring-4 ring-emerald-100' 
                  : 'bg-white border border-slate-200'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Le plus populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${pkg.gradient} mb-4`}>
                    <pkg.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{pkg.name}</h3>
                  <p className="text-slate-600 mb-4 text-sm">{pkg.description}</p>
                  
                  <div className="flex items-center justify-center gap-1 mb-6">
                    <span className="text-4xl font-bold text-slate-800">{pkg.price}</span>
                    <span className="text-slate-600 font-semibold">{pkg.currency}</span>
                  </div>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-slate-800 mb-4 text-center">Ce qui est inclus:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4">
                  <Button
                    onClick={() => handlePackageSelect(pkg.id)}
                    className={`w-full py-4 text-base font-semibold rounded-xl bg-gradient-to-r ${pkg.gradient} hover:shadow-xl transition-all duration-300`}
                  >
                    Choisir ce package
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-slate-800">
              Demande de Devis
            </DialogTitle>
            {selectedPackage && (
              <p className="text-center text-slate-600">
                Package sélectionné: <span className="font-semibold text-emerald-600">
                  {packages.find(pkg => pkg.id === selectedPackage)?.name}
                </span>
              </p>
            )}
          </DialogHeader>
          
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Prénom *</label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  required
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nom *</label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  required
                  placeholder="Votre nom"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                placeholder="votre@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Téléphone *</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
                placeholder="06 XX XX XX XX"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Note (optionnel)</label>
              <Textarea
                value={formData.note}
                onChange={(e) => setFormData(prev => ({ ...prev, note: e.target.value }))}
                placeholder="Décrivez brièvement votre projet ou vos besoins spécifiques..."
                rows={3}
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="flex-1"
              >
                Annuler
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600"
              >
                {isSubmitting ? 'Envoi...' : 'Envoyer la demande'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WebDevelopmentPricing;
