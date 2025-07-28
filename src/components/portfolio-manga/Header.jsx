import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ArrowLeft } from "lucide-react";

const Header = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  // Contenu traduit
  const translations = {
    fr: {
      back: "Retour",
      navItems: [
        { id: "accueil", label: "Accueil" },
        { id: "about", label: "À propos" },
        { id: "skills", label: "Compétences" },
        { id: "projects", label: "Projets" },
        { id: "contact", label: "Contact" },
      ],
    },
    en: {
      back: "Back",
      navItems: [
        { id: "accueil", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
      ],
    },
  };

  const t = translations[language];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleGoBack}
              className="flex items-center space-x-2 group"
              aria-label={t.back}
            >
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group-hover:from-blue-700 group-hover:to-purple-700 transition-colors">
                <ArrowLeft className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {t.back}
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {t.navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            {/* Bouton de langue pour desktop */}
            {/* <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-md font-medium transition-colors duration-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              aria-label={
                language === "fr" ? "Switch to English" : "Passer en Français"
              }
            >
              {language === "fr" ? "EN" : "FR"}
            </button> */}

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
              aria-label={
                darkMode
                  ? language === "fr"
                    ? "Activer le mode clair"
                    : "Enable light mode"
                  : language === "fr"
                  ? "Activer le mode sombre"
                  : "Enable dark mode"
              }
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
              aria-label={
                darkMode
                  ? language === "fr"
                    ? "Activer le mode clair"
                    : "Enable light mode"
                  : language === "fr"
                  ? "Activer le mode sombre"
                  : "Enable dark mode"
              }
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
              aria-label={language === "fr" ? "Menu" : "Menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-4 border border-gray-200/20 dark:border-gray-700/20">
            {t.navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Bouton de langue pour mobile */}
            {/* <button
              onClick={toggleLanguage}
              className="block w-full text-left px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              aria-label={
                language === "fr" ? "Switch to English" : "Passer en Français"
              }
            >
              {language === "fr" ? "English" : "Français"}
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
