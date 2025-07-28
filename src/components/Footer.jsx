import React from "react";
// import { a } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Code,
} from "lucide-react";
import Logo from "/assets/logoWhite.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                <img
                  src={Logo}
                  alt="Logo Spray_info"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-transform duration-300 group-hover:rotate-12"
                />
              </div>
              <span className="text-xl font-bold">Spray_Info</span>
            </div>
            <p className="text-gray-300 mb-4">
              Université Privée, Centre de Formation, Cabinet de Conseil et
              TechnoSupport. Nous démocratisons l'accès à la technologie et
              formons les talents de demain.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Spray_info/100083174350034/?locale=ms_MY"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#accueil"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#apropos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  A propos
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nos services
                </a>
              </li>
              <li>
                <a
                  href="#equipe"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nos équipes
                </a>
              </li>
              <li>
                <a
                  href="#apropos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Partenaires
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  RN7, Tanambao Fierenana
                  <br />
                  Fianarantsoa, Madagascar
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">+261 38 37 930 53</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  sprayinfo@siwbs.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Spray_Info. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
