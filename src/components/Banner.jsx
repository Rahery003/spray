import React, { useState, useEffect } from "react";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Images de fond pour le slider (remplacez par vos vraies images)
  const backgroundImages = [
    "/assets/etudiant5.jpg", // etudiant2
    "/assets/etudiant3.jpg", // etudiant3
    "/assets/etudiant4.jpg", // etudiant4
  ];

  // Animation automatique du slider
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Slider d'images de fond */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Particules flottantes en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-particle opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div
              className="w-2 h-2 bg-white rounded-full"
              style={{
                filter: "blur(0.5px)",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Calque sombre avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Contenu textuel - Gauche */}
            <div
              className={`text-white space-y-6 lg:space-y-8 text-center lg:text-left transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Grand titre avec animation */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight">
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse">
                      Spray_info
                    </span>
                  </span>
                </h1>

                <h2 className="text-lg sm:text-xl lg:text-2xl font-light italic text-white animate-fade-in-delayed opacity-90">
                  "De aona fandeani jiaby!!!"
                </h2>
              </div>

              {/* Description avec animation */}
              <div className="space-y-6 animate-slide-up-delayed">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500">
                  Votre Hub Numérique 3.0
                </h3>

                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200 max-w-2xl">
                  Accompagner vos idées, nourrir vos inspirations, réaliser vos
                  projets numériques : notre engagement au quotidien.
                </p>
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up-more-delayed">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-900 text-white font-bold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl relative overflow-hidden">
                  <span className="relative z-10">Découvrir nos services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>

                <button className="group px-8 py-4 border-2 border-blue-500 text-blue-400 font-bold rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden">
                  <span className="relative z-10">Nous contacter</span>
                  <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>

            {/* Logo animé - Droite */}
            <div
              className={`md:flex hidden justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Cercles d'animation en arrière-plan */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-dashed border-blue-400/30"></div>
                </div>

                <div className="absolute inset-4 animate-spin-reverse">
                  <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-88 lg:h-88 rounded-full border border-dotted border-purple-400/40"></div>
                </div>

                {/* Logo principal */}
                <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center animate-float-gentle shadow-2xl group cursor-pointer">
                  {/* Logo spray agrandi */}
                  <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 bg-transparent rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <img
                      src="/assets/spray.png"
                      alt="Spray Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Particules orbitales avec vos couleurs */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-blue-600 opacity-70 rounded-full animate-bounce-gentle shadow-lg"></div>
                  <div className="absolute bottom-8 left-8 w-4 h-4 bg-blue-300 rounded-full animate-pulse-slow shadow-lg"></div>
                  <div className="absolute top-1/2 left-4 w-5 h-5 bg-blue-200 rounded-full animate-bounce-gentle animation-delay-1s shadow-lg"></div>
                  <div className="absolute bottom-1/3 right-8 w-3 h-3 bg-blue-500 rounded-full animate-pulse-slow animation-delay-2s shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateurs de slide avec animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative overflow-hidden transition-all duration-300 transform hover:scale-125 ${
              index === currentSlide
                ? "w-8 h-3 bg-blue-500 rounded-full"
                : "w-3 h-3 bg-blue-300/50 hover:bg-blue-400/80 rounded-full"
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Flèche de scroll animée */}
      <div className="absolute bottom-8 right-8 animate-bounce-gentle cursor-pointer group">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center relative overflow-hidden group-hover:border-blue-500 transition-colors duration-300">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(2deg);
          }
          66% {
            transform: translateY(-5px) rotate(-1deg);
          }
        }

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
            opacity: 0.9;
          }
          75% {
            transform: translateY(-30px) translateX(5px);
            opacity: 0.4;
          }
        }

        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes scroll-indicator {
          0% {
            transform: translateY(0px);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }

        .animate-fade-in-delayed {
          animation: slide-up 0.8s ease-out 0.3s both;
        }

        .animate-slide-up-delayed {
          animation: slide-up 0.8s ease-out 0.6s both;
        }

        .animate-slide-up-more-delayed {
          animation: slide-up 0.8s ease-out 0.9s both;
        }

        .animation-delay-1s {
          animation-delay: 1s;
        }

        .animation-delay-2s {
          animation-delay: 2s;
        }

        /* Responsive utilities */
        .w-88 {
          width: 22rem;
        }
        .h-88 {
          height: 22rem;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-float-particle {
            display: none;
          }
        }

        /* Smooth scrolling behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced hover effects */
        @media (hover: hover) {
          .group:hover .animate-bounce-gentle {
            animation-duration: 1s;
          }
        }
      `}</style>
    </section>
  );
}

export default Banner;
