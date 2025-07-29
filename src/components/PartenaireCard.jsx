import React, { useState, useRef, useEffect } from "react";
import { ExternalLink, Star, Award, Zap } from "lucide-react";

function PartenaireCard({ logo, name, description, category }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Animation d'apparition au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // Icône de catégorie
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Technologie":
        return <Zap className="w-4 h-4" />;
      case "Innovation":
        return <Star className="w-4 h-4" />;
      case "Formation":
        return <Award className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  // Couleur de catégorie
  const getCategoryColor = (category) => {
    switch (category) {
      case "Technologie":
        return "from-blue-500 to-cyan-600";
      case "Innovation":
        return "from-blue-500 to-pink-600";
      case "Formation":
        return "from-green-500 to-emerald-600";
      case "Digital":
        return "from-indigo-500 to-blue-600";
      case "Business":
        return "from-orange-500 to-red-600";
      case "Média":
        return "from-teal-500 to-cyan-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div
      ref={cardRef}
      className={`flex-shrink-0 w-64 h-48 md:w-72 md:h-52 lg:w-80 lg:h-56 mx-4 relative group cursor-pointer transform transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carte principale */}
      <div className="relative w-full h-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 group-hover:bg-white">
        {/* Effet de brillance au survol */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        {/* Badge de catégorie */}
        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(
            category
          )} text-white text-xs font-semibold flex items-center space-x-1 shadow-lg transform transition-all duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        >
          {getCategoryIcon(category)}
          <span>{category}</span>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
          {/* Logo avec effet de rotation */}
          <div
            className={`relative mb-4 transform transition-all duration-500 ${
              isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src={logo}
              alt={`Logo ${name}`}
              className="relative w-20 h-20 md:w-24 md:h-24 object-contain mx-auto filter drop-shadow-lg"
              onError={(e) => {
                e.target.src = "/assets/placeholder-logo.png";
              }}
            />
          </div>

          {/* Nom du partenaire */}
          <h3
            className={`text-lg md:text-xl font-bold text-gray-800 mb-2 transform transition-all duration-300 ${
              isHovered ? "text-blue-600" : "text-gray-800"
            }`}
          >
            {name}
          </h3>

          {/* Description avec animation */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm text-gray-600 leading-relaxed px-2">
              {description}
            </p>
          </div>

          {/* Bouton d'action au survol */}
          <div
            className={`mt-4 transform transition-all duration-300 ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <button className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>En savoir plus</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Effet de bordure animée */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
            isHovered
              ? "bg-gradient-to-r from-blue-500/20 via-blue-500/20 to-indigo-500/20"
              : "bg-transparent"
          }`}
        ></div>

        {/* Particules flottantes au survol */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "2s",
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Ombre projetée dynamique */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(
          category
        )} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10 transform ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      ></div>
    </div>
  );
}

export default PartenaireCard;
