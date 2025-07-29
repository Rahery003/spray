import React, { useEffect, useRef } from "react";
import {
  Clock,
  MapPin,
  Users,
  Award,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

function ContactDescription() {
  const descriptionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Réponse rapide",
      description:
        "Nous nous engageons à répondre à toutes vos demandes dans les 24h",
    },
    {
      icon: Shield,
      title: "Confidentialité",
      description: "Vos données sont protégées et traitées en toute sécurité",
    },
    {
      icon: Users,
      title: "Équipe experte",
      description: "Une équipe de professionnels dédiée à votre réussite",
    },
    {
      icon: Award,
      title: "Qualité garantie",
      description:
        "Des solutions sur mesure adaptées à vos besoins spécifiques",
    },
  ];

  const contactMethods = [
    {
      icon: MapPin,
      title: "Visitez-nous",
      description: "Carrière arrêt bus 28, Imandry, Fianarantsoa",
      action: "Voir sur la carte",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Clock,
      title: "Horaires flexibles",
      description: "Lun-Ven: 8h-17h30 | Dim: 14h-17h30",
      action: "Planifier un RDV",
      color: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <div ref={descriptionRef} className="opacity-0 space-y-12">
      {/* Méthodes de contact */}

      {/* Section d'engagement */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl shadow-2xl text-white p-8 md:p-12 relative overflow-hidden">
        {/* Motifs décoratifs */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span className="font-semibold uppercase tracking-wider text-sm text-blue-200">
              Notre engagement
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Votre succès est notre priorité
          </h3>

          <p className="text-blue-100 leading-relaxed mb-6">
            Nous nous engageons à vous fournir des solutions innovantes et
            personnalisées, avec un suivi continu et un support technique de
            qualité. Votre projet mérite le meilleur, et c'est exactement ce que
            nous vous offrons.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm">Support 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm">Garantie qualité</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm">Suivi personnalisé</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDescription;
