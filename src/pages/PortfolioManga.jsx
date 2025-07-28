import React, { useState, useEffect } from "react";
import Header from "../components/portfolio-manga/Header";
import Hero from "../components/portfolio-manga/Hero_Tsara";
import About from "../components/portfolio-manga/About_Tsara";
import Skills from "../components/portfolio-manga/Skills_Tsara";
import Projects from "../components/portfolio-manga/Projects_Tsara";
import ServicesTsara from "../components/portfolio-manga/service_tsara";
import Contact from "../components/portfolio-manga/Contact_Tsara";
import Footer from "../components/portfolio-manga/Footer_Tsara";

function PortfolioManga() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState("fr"); // 'fr' ou 'en'

  useEffect(() => {
    // Vérifier la préférence système au chargement
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedMode = localStorage.getItem("darkMode");
    const savedLanguage = localStorage.getItem("language");

    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(systemPrefersDark);
    }

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Sauvegarder les préférences
    localStorage.setItem("darkMode", darkMode.toString());
    localStorage.setItem("language", language);

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode, language]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="animate-pulse flex space-x-4">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Boutons de traduction fixes à gauche */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-2">
        <button
          onClick={toggleLanguage}
          className={`px-3 py-1 rounded-md font-medium transition-colors duration-300 ${
            language === "fr"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          }`}
        >
          FR
        </button>
        <button
          onClick={toggleLanguage}
          className={`px-3 py-1 rounded-md font-medium transition-colors duration-300 ${
            language === "en"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          }`}
        >
          EN
        </button>
      </div>

      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
      />
      <main className="pt-16">
        <Hero language={language} />
        <About language={language} />
        <Skills language={language} />
        <ServicesTsara language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default PortfolioManga;
