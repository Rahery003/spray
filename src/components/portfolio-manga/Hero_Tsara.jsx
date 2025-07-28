import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import profileImage from "/assets/1233.jpg";

const Hero = ({ language }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Textes traduits
  const translations = {
    fr: {
      greeting: "Bonjour, je suis",
      name: "TSARAMANGA",
      description:
        "Je conçois des visuels percutants, gère des communautés en ligne et rédige du contenu engageant. Spécialisée en design graphique, réseaux sociaux et stratégie de marque.",
      projectsButton: "Voir mes projets",
      contactButton: "Me contacter",
      roles: [
        "Designer Graphique",
        "Community Manager",
        "Assistante Virtuelle",
      ],
    },
    en: {
      greeting: "Hi, I'm",
      name: "TSARAMANGA",
      description:
        "I create impactful visuals, manage online communities and write engaging content. Specialized in graphic design, social media and brand strategy.",
      projectsButton: "View my projects",
      contactButton: "Contact me",
      roles: ["Graphic Designer", "Community Manager", "Virtual Assistant"],
    },
  };

  const texts = translations[language].roles;
  const t = translations[language];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 100 : 150
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="pt-20 pb-6 bg-gradient-to-br from-blue-100 via-white to-blue-300 dark:bg-[linear-gradient(to_bottom_right,#111827,#1e293b,rgb(27,0,133))]"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-[rgb(27,0,133)] p-1 dark:to-[rgb(27,0,133)]">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <img
                  src={profileImage}
                  alt={
                    language === "fr" ? "Photo de profil" : "Profile picture"
                  }
                  className="w-36 h-36 rounded-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
              {t.greeting}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-[rgb(27,0,133)] dark:to-[rgb(27,0,133)] bg-clip-text text-transparent">
                {t.name}
              </span>
            </h1>
            <div className="h-20 mb-8">
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-[rgb(27,0,133)] text-white rounded-full font-semibold hover:from-blue-700 hover:to-[rgb(27,0,133)] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t.projectsButton}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {t.contactButton}
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="#"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              aria-label={language === "fr" ? "Github" : "Github"}
            >
              <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="#"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              aria-label={language === "fr" ? "LinkedIn" : "LinkedIn"}
            >
              <Linkedin className="h-6 w-6 text-blue-600" />
            </a>
            <a
              href="mailto:tsaramanga@siwbs.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              aria-label={language === "fr" ? "Envoyer un email" : "Send email"}
            >
              <Mail className="h-6 w-6 text-green-600" />
            </a>
            <a
              href={
                language === "fr"
                  ? "/cv/tsaram.cvfrench.pdf"
                  : "/cv/tsaram.cvenglish.pdf"
              }
              download
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              aria-label={language === "fr" ? "Télécharger CV" : "Download CV"}
            >
              <Download className="h-6 w-6 text-purple-600" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors"
            aria-label={
              language === "fr" ? "Défiler vers le bas" : "Scroll down"
            }
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
