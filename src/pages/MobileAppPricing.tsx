import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, ArrowLeft, Zap, Smartphone, Shield, Users, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const MobileAppPricing = () => {
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
      price: '2999',
      currency: 'DHS',
      description: 'Application mobile basique pour commencer',
      features: [
        'Application mono-plateforme (iOS ou Android)',
        'Design moderne et intuitif',
        'Fonctionnalités de base',
        'Interface utilisateur responsive',
        'Notifications push basiques',
        'Support technique 3 mois',
        'Publication sur store incluse'
      ],
      gradient: 'from-blue-500 to-purple-600',
      popular: false,
      icon: Smartphone
    },
    {
      id: 2,
      name: 'Premium',
      price: '4999',
      currency: 'DHS',
      description: 'Application complète pour votre business',
      features: [
        'Application cross-platform (iOS + Android)',
        'Design sur-mesure avec animations',
        'Fonctionnalités avancées',
        'Intégration API et base de données',
        'Système d\'authentification',
        'Notifications push intelligentes',
        
        'Analytics intégrées',
        'Support technique 6 mois',
        'Publication sur les deux stores',
        'Formation à l\'utilisation'
      ],
      gradient: 'from-emerald-500 to-teal-600',
      popular: true,
      icon: Star
    },
    {
      id: 3,
      name: 'Entreprise',
      price: '8999',
      currency: 'DHS',
      description: 'Solution enterprise avec fonctionnalités avancées',
      features: [
        'Application cross-platform premium',
        'Design et UX sur-mesure',
        'Fonctionnalités illimitées',
        'Backend personnalisé',
        'Tableau de bord administrateur',
        'Système de paiement intégré',
        'Géolocalisation avancée',
        'Chat en temps réel',
        'Système de réservation/commande',
        'Analytics avancées et rapports',
        'Sécurité renforcée',
        'Support technique 12 mois',
        'Maintenance et mises à jour incluses',
        'Formation équipe complète'
      ],
      gradient: 'from-orange-500 to-red-600',
      popular: false,
      icon: Zap
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
    
    const message = `🚀 Nouvelle Demande de Devis - Application Mobile 📱

📦 Package choisi: ${selectedPkg?.name} (${selectedPkg?.price} ${selectedPkg?.currency})

👤 Informations client:
• Nom: ${formData.firstName} ${formData.lastName}
• Email: ${formData.email}
• Téléphone: ${formData.phone}

📝 Note du client:
${formData.note || 'Aucune note spéciale'}

---
Message envoyé depuis aymanwebgenius.space`;

    const whatsappUrl = `https://wa.me/212621036713?text=${encodeURIComponent(message)}`;
    
    try {
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Demande envoyée avec succès!",
        description: "Votre demande a été transmise via WhatsApp. Nous vous répondrons dans les plus brefs délais.",
      });
      
      // Reset form
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
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-700">
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
              Applications Mobile
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Développez votre application mobile iOS et Android avec une expérience utilisateur exceptionnelle
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative rounded-3xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 ${
                pkg.popular 
                  ? 'bg-white border-4 border-emerald-500 ring-4 ring-emerald-100' 
                  : 'bg-white border border-slate-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${pkg.gradient} mb-4`}>
                  <pkg.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{pkg.name}</h3>
                <p className="text-slate-600 mb-4">{pkg.description}</p>
                
                <div className="flex items-center justify-center gap-1 mb-6">
                  <span className="text-4xl font-bold text-slate-800">{pkg.price}</span>
                  <span className="text-slate-600 font-semibold">{pkg.currency}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handlePackageSelect(pkg.id)}
                className={`w-full py-6 text-lg font-semibold rounded-xl bg-gradient-to-r ${pkg.gradient} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                Choisir ce package
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-sm">
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

export default MobileAppPricing;