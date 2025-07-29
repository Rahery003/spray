import React, { useState, useEffect, useRef } from "react";
import {
  Monitor,
  MessageCircle,
  Users,
  Headphones,
  Shield,
  Smartphone,
  ArrowRight,
  Sparkles,
  Play,
  ExternalLink,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";
import etudiantBackground from "/assets/etudiant2.jpg";
import sprayx from "/assets/spray_x.png";
import spraylearn from "/assets/learn.png";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate active service
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveService((prev) => (prev + 1) % services.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (sectionRef.current) {
      sectionRef.current.addEventListener("mousemove", handleMouseMove);
      return () => {
        if (sectionRef.current) {
          sectionRef.current.removeEventListener("mousemove", handleMouseMove);
        }
      };
    }
  }, []);

  const services = [
    {
      icon: <img className="w-10" src={sprayx} />,
      title: "Spray_x",
      description: "Université privée",
      details:
        "Proposer des formations diplômantes de haut niveau dans les filières du Génie Logiciel et de l'Administration Système et Réseaux. Mettre en place une pédagogie innovante, centrée sur l'intelligence appliquée : « L'intelligence, version 3.0 ». Préparer des profils compétitifs, créatifs et entreprenants, capables d'évoluer dans un environnement numérique dynamique.",
      features: [
        "Formations diplômantes",
        "Pédagogie innovante",
        "Intelligence 3.0",
      ],
      stats: { value: "95%", label: "Taux de réussite" },
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-50/90 to-blue-100/80",
      borderColor: "border-blue-200/50",
      accent: "text-blue-600",
      slideFrom: "left",
    },
    {
      icon: <img className="w-10" src={spraylearn} />,
      title: "Spray_Learn",
      description: "Formation et insertion professionnelle",
      details:
        "Faciliter l'apprentissage des technologies pour les jeunes passionnés, notamment dans les domaines de l'informatique, de la robotique, de la cybersécurité et des systèmes intelligents. Accompagner les étudiants universitaires dans l'amélioration de leurs compétences techniques et dans leur préparation à la vie professionnelle.",
      features: [
        "Technologies avancées",
        "Projets réels",
        "Accompagnement pro",
      ],
      stats: { value: "500+", label: "Étudiants formés" },
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-50/90 to-blue-100/80",
      borderColor: "border-blue-200/50",
      accent: "text-blue-600",
      slideFrom: "right",
    },
    {
      icon: <img className="w-10" src={spraylearn} />,
      title: "Spray_idea",
      description: "Cabinet de conseil",
      details:
        "Aider les entreprises à réussir leur transformation digitale. Offrir un accompagnement personnalisé en stratégie numérique, communication, leadership, et organisation interne. Apporter une expertise terrain pour améliorer la productivité et l'impact des structures partenaires.",
      features: [
        "Transformation digitale",
        "Stratégie personnalisée",
        "Expertise terrain",
      ],
      stats: { value: "120+", label: "Entreprises accompagnées" },
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-50/90 to-blue-100/80",
      borderColor: "border-blue-200/50",
      accent: "text-blue-600",
      slideFrom: "left",
    },
    {
      icon: <img className="w-10" src={spraylearn} />,
      title: "Solutions Numériques",
      description: "Service de prestation Numérique",
      details:
        "Proposer des services technologiques professionnels : création de sites web, déploiement de CRM/ERP, cybersécurité, maintenance, etc. Offrir aux stagiaires et formateurs l'opportunité de travailler sur des projets concrets, en collaboration avec les entreprises.",
      features: [
        "Services tech pro",
        "Projets concrets",
        "Collaboration entreprise",
      ],
      stats: { value: "200+", label: "Projets réalisés" },
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-50/90 to-blue-100/80",
      borderColor: "border-blue-200/50",
      accent: "text-blue-600",
      slideFrom: "right",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="service"
      className="py-20 relative overflow-hidden min-h-screen"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.25) 0%, transparent 50%),
linear-gradient(135deg, rgba(30, 58, 138, 0.80) 0%, rgba(50, 50, 50, 0.8) 30%, rgba(0, 0, 0, 0.80) 50%),
url(${etudiantBackground})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Animated Background Elements */}

      {/* Floating Particles */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-200 font-medium mb-6 hover:from-blue-500/30 hover:to-indigo-500/30 transition-all duration-300">
            <Sparkles className="w-5 h-5" />
            Nos Services
            <Sparkles className="w-5 h-5" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6">
            Excellence & Innovation
          </h2>

          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            En intégrant le domaine numérique, découvrez un monde
            d'opportunités. Nos formations spécialisées vous accompagnent vers
            l'excellence professionnelle.
          </p>

          {/* Service Navigation Dots */}
          {/* <div className="flex justify-center gap-3 mb-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeService === index
                    ? "bg-blue-400"
                    : "bg-blue-400/30 hover:bg-blue-400/60"
                }`}
              />
            ))}
          </div> */}
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative ${
                service.bgColor
              } backdrop-blur-lg rounded-3xl p-8 border-2 ${
                service.borderColor
              } hover:border-blue-400/50 transition-all duration-700 shadow-2xl hover:shadow-blue-500/20 cursor-pointer transform overflow-hidden
                ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : service.slideFrom === "left"
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }
                ${activeService === index ? "ring-2 ring-blue-400/50" : ""}
              `}
              onMouseEnter={() => {
                setHoveredService(index);
                setActiveService(index);
              }}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                transitionDelay: `${index * 150}ms`,
                transform: `
                  ${
                    isVisible
                      ? "translateX(0)"
                      : service.slideFrom === "left"
                      ? "translateX(-100%)"
                      : "translateX(100%)"
                  }
                  ${
                    hoveredService === index
                      ? "translateY(-12px)"
                      : "translateY(0))"
                  }
                  ${
                    activeService === index && hoveredService !== index
                      ? ""
                      : ""
                  }
                `,
              }}
            >
              {/* Animated Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`}
              />

              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-6">
                  {/* Enhanced Icon */}
                  <div
                    className={`w-24 h-24 ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-3 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    {service.icon}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Enhanced Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:from-slate-900 group-hover:to-slate-700 transition-all duration-300">
                        {service.title}
                      </h3>
                      {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                      </div> */}
                    </div>

                    <p className="text-slate-700 text-xl font-semibold mb-4 group-hover:text-slate-800 transition-colors">
                      {service.description}
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100/80 text-blue-700 text-sm rounded-full font-medium border border-blue-200/50"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-600 text-justify leading-relaxed mb-6 group-hover:text-slate-700 transition-colors line-clamp-4">
                      {service.details}
                    </p>

                    {/* Stats and CTA */}
                    {/* <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {service.stats.value}
                          </div>
                          <div className="text-sm text-slate-500">
                            {service.stats.label}
                          </div>
                        </div>
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Services;
