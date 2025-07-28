import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-[rgb(27,0,133)] bg-clip-text text-transparent mb-4">
              RAMANANJANAHARY HERINIAINA JACQUINO
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Fondateur de Spray_info, centre de formation et cabinet de conseil
              basé à Madagascar, accompagnant entreprises et particuliers dans
              leur transformation numérique et la sécurisation de leurs
              infrastructures.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Accueil", "À propos", "Compétences", "Projets", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item
                        .toLowerCase()
                        .replace("à propos", "about")
                        .replace("compétences", "skills")
                        .replace("projets", "projects")
                        .replace("contact", "contact")
                        .replace("accueil", "accueil")}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Imandry, FIANARANTSOA MADAGASCAR</p>
              <p>spray_info@siwbs.com</p>
              <p>+261 38 37 930 53</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ramananjanahary Heriniaina Jacquino Fait avec{" "}
            <Heart className="inline h-4 w-4 text-red-500" /> beaucoup de
            passion
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-gradient-to-r from-blue-600 to-[rgb(27,0,133)] rounded-full hover:from-blue-700 hover:to-[rgb(27,0,133)] transition-all transform hover:scale-110"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
