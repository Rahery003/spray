import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
  PhoneCall,
} from "lucide-react";
import { SiFreelancer } from "react-icons/si";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = ({ language }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Textes traduits
  const translations = {
    fr: {
      title: "TSARAMANGA JOSEPHINE",
      description:
        "Designer Graphique & Community Manager passionné par la création visuelle et la communication digitale. Spécialisé en stratégie de contenu et branding.",
      navigationTitle: "Navigation",
      navItems: ["Accueil", "À propos", "Compétences", "Projets", "Contact"],
      contactTitle: "Contact",
      copyright: `© 2025 TSARAMANGA JOSEPHINE Fait avec `,
      madeWith: "beaucoup de passion",
    },
    en: {
      title: "TSARAMANGA JOSEPHINE",
      description:
        "Passionate Graphic Designer & Community Manager specialized in visual creation and digital communication. Expert in content strategy and branding.",
      navigationTitle: "Navigation",
      navItems: ["Home", "About", "Skills", "Projects", "Contact"],
      contactTitle: "Contact",
      copyright: `© 2025 TSARAMANGA JOSEPHINE Made with `,
      madeWith: "lots of passion",
    },
  };

  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-[rgb(27,0,133)] bg-clip-text text-transparent mb-4">
              {t.title}
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">{t.description}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.freelancer.com/hireme/tsaraman"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
                aria-label={
                  language === "fr" ? "Profil Freelancer" : "Freelancer Profile"
                }
              >
                <SiFreelancer className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/joséphine-tsaramanga-a99780340"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/jojo.sara.102?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="tel:+261345904300"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <PhoneCall className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.navigationTitle}</h4>
            <ul className="space-y-2">
              {t.navItems.map((item, index) => {
                // Mapping des liens en fonction de la langue
                const linkMap = {
                  fr: {
                    Accueil: "accueil",
                    "À propos": "about",
                    Compétences: "skills",
                    Projets: "projects",
                    Contact: "contact",
                  },
                  en: {
                    Home: "accueil",
                    About: "about",
                    Skills: "skills",
                    Projects: "projects",
                    Contact: "contact",
                  },
                };

                const sectionId = linkMap[language][item];
                return (
                  <li key={index}>
                    <a
                      href={`#${sectionId}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.contactTitle}</h4>
            <div className="space-y-2 text-gray-400">
              <p>Fianarantsoa, Madagascar</p>
              <p>tsaramanga@siwbs.com</p>
              <p>+261 34 59 043 00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t.copyright}
            <Heart className="inline h-4 w-4 text-red-500" /> {t.madeWith}
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-gradient-to-r from-blue-600 to-[rgb(27,0,133)] rounded-full hover:from-blue-700 hover:to-[rgb(27,0,133)] transition-all transform hover:scale-110"
            aria-label={language === "fr" ? "Retour en haut" : "Back to top"}
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
