import React, { useEffect, useRef } from "react";
import ContactDescription from "./ContactDescription";
import ContactForm from "./ContactForm";
import { Mail, Phone, MessageSquare, Sparkles } from "lucide-react";

function Contact() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

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
    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 px-4 md:px-8 lg:px-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-blue-300/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float-${
              (i % 3) + 1
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* En-tête de section modernisé */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-blue-500"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Contactez-nous
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prêt à transformer vos idées en réalité ? Notre équipe d'experts est
            là pour vous accompagner dans tous vos projets digitaux.
          </p>
        </div>

        {/* Statistiques rapides */}

        {/* Description et formulaire */}
        <div className="space-y-8">
          {/* <ContactDescription /> */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
