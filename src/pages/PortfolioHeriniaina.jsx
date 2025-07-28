import React, { useState, useEffect } from "react";
import Header from "../components/portfolio-heriniaina/Header";
import Hero from "../components/portfolio-heriniaina/Hero_Tsara";
import About from "../components/portfolio-heriniaina/About_Tsara";
import Skills from "../components/portfolio-heriniaina/Skills_Tsara";
import Projects from "../components/portfolio-heriniaina/Projects_Tsara";
import ServicesTsara from "../components/portfolio-heriniaina/Service_Tsara";
import Contact from "../components/portfolio-heriniaina/Contact_Tsara";
import Footer from "../components/portfolio-heriniaina/Footer_Tsara";

function PortfolioHeriniaina() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Vérifier la préférence système au chargement
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(systemPrefersDark);
    }

    // Simuler un temps de chargement (vous pouvez l'enlever si ce n'est pas nécessaire)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Sauvegarder la préférence et appliquer la classe
    localStorage.setItem("darkMode", darkMode.toString());

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
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
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-16">
        {" "}
        {/* Ajout de padding-top pour compenser le header fixe */}
        <Hero />
        <About />
        <Skills />
        <ServicesTsara />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default PortfolioHeriniaina;
