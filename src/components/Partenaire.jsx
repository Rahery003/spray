import React, { useState, useEffect, useRef } from "react";
import PartenaireCard from "./PartenaireCard";
import {
  Users,
  Handshake,
  Star,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

function Partenaire() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const sectionRef = useRef(null);

  const partenaires = [
    {
      name: "Manja",
      logo: "/assets/manja.PNG",
      description: "Partenaire technologique de confiance",
      category: "Technologie",
    },
    {
      name: "Mantek",
      logo: "/assets/mantek.PNG",
      description: "Solutions innovantes et durables",
      category: "Innovation",
    },
    {
      name: "RFA",
      logo: "/assets/rfa.PNG",
      description: "Excellence en formation professionnelle",
      category: "Formation",
    },
    {
      name: "Tsikidia",
      logo: "/assets/Tsikidia.PNG",
      description: "Expertise en développement digital",
      category: "Digital",
    },
    {
      name: "WBS",
      logo: "/assets/WBS.PNG",
      description: "Solutions business intégrées",
      category: "Business",
    },
    {
      name: "GTV",
      logo: "/assets/gtv.PNG",
      description: "Média et communication moderne",
      category: "Média",
    },
  ];

  // Dupliquer les partenaires pour un défilement infini
  const duplicatedPartenaires = [
    ...partenaires,
    ...partenaires,
    ...partenaires,
  ];

  // Animation automatique améliorée
  const animate = () => {
    if (!isHovered && !isDragging && isPlaying && carouselRef.current) {
      const carousel = carouselRef.current;
      carousel.scrollLeft += 0.5;

      // Reset position for infinite loop
      const maxScroll = carousel.scrollWidth / 3;
      if (carousel.scrollLeft >= maxScroll) {
        carousel.scrollLeft = 0;
      }
    }
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, isDragging, isPlaying]);

  // Animation d'apparition
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Gestion du drag améliorée
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
  };

  // Gestion du touch pour mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Contrôles de navigation
  const scrollToDirection = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="partenaire"
      ref={sectionRef}
      className="relative py-20 px-4 md:px-8 lg:px-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden opacity-0"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-blue-300/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float-${
              (i % 3) + 1
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* En-tête modernisé */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg">
              <Handshake className="w-6 h-6 text-white" />
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-blue-500"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Nos Partenaires
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les entreprises et organisations qui nous font confiance
            et collaborent avec nous pour créer des solutions innovantes.
          </p>
        </div>

        {/* Contrôles du carousel */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <button
            onClick={() => scrollToDirection("left")}
            className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={togglePlayPause}
            className={`p-3 rounded-full shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-110 ${
              isPlaying
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                : "bg-white/90 backdrop-blur-sm text-gray-600"
            }`}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => scrollToDirection("right")}
            className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Carousel des partenaires */}
        <div className="relative overflow-hidden rounded-3xl">
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden cursor-grab select-none py-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {duplicatedPartenaires.map((partenaire, index) => (
              <div
                key={`${partenaire.name}-${index}`}
                className="transform transition-transform duration-300 hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <PartenaireCard
                  name={partenaire.name}
                  logo={partenaire.logo}
                  description={partenaire.description}
                  category={partenaire.category}
                />
              </div>
            ))}
          </div>

          {/* Gradients pour effet de fondu améliorés */}
          <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-slate-50 via-blue-50/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-slate-50 via-blue-50/80 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Section d'appel à l'action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-2xl text-white p-8 md:p-12 relative overflow-hidden">
            {/* Motifs décoratifs */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Rejoignez notre réseau de partenaires
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6 max-w-2xl mx-auto">
                Vous souhaitez collaborer avec nous ? Découvrez les opportunités
                de partenariat et construisons ensemble l'avenir du digital à
                Madagascar.
              </p>
              <button className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                <Handshake className="w-5 h-5" />
                <span>Devenir partenaire</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partenaire;
