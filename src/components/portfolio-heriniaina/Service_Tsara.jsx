import React from "react";
import {
  Wrench,
  Globe,
  Database,
  ShieldCheck,
  Monitor,
  BookOpenCheck,
  Package,
} from "lucide-react";

const services = [
  {
    icon: <Globe className="h-6 w-6 text-white" />,
    title: "Création de site web",
    description: `Sites WordPress (vitrine, blog, e-commerce), responsive, SEO, domaine & hébergement.`,
    color: "from-blue-500 to-[rgb(27,0,133)]",
  },
  {
    icon: <Monitor className="h-6 w-6 text-white" />,
    title: "Développement d'applications",
    description: `Apps web sur mesure avec PHP, React, Node.js, Django. Interfaces de gestion CRUD.`,
    color: "from-blue-500 to-[rgb(27,0,133)]",
  },
  {
    icon: <Database className="h-6 w-6 text-white" />,
    title: "Base de données",
    description: `Conception UML/MERISE, maintenance, sauvegardes automatiques, optimisation.`,
    color: "from-blue-500 to-[rgb(27,0,133)]",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    title: "Réseaux & sécurité",
    description: `Réseaux LAN/VLAN, pare-feu, VPN, Samba/FTP, sécurité Ubuntu & Windows.`,
    color: "from-blue-500 to-[rgb(27,0,133)]",
  },
  {
    icon: <Wrench className="h-6 w-6 text-white" />,
    title: "Maintenance & assistance",
    description: `Dépannage, nettoyage, installation logicielle. Assistance à distance ou sur site.`,
    color: "from-blue-500 to-[rgb(27,0,133)]",
  },
  {
    icon: <BookOpenCheck className="h-6 w-6 text-white" />,
    title: "Formations & accompagnement",
    description: `Formations en bureautique, web, Linux, cybersécurité. Suivi ponctuel ou mensuel.`,
    color: "from-blue-500 to-[rgb(27,0,133)]",
  },
  {
    icon: <Package className="h-6 w-6 text-white" />,
    title: "Autres services à la demande",
    description: `Installation de serveurs, mails pro, scripts, tâches planifiées, automatisation.`,
    color: "from-blue-500 to-[rgb(27,0,133)]",
  },
];

const ServiceTsara = () => {
  return (
    <section
      id="services"
      className="pt-20 pb-6 bg-gradient-to-br from-blue-100 via-white to-blue-300 dark:bg-[linear-gradient(to_bottom_right,#111827,#1e293b,rgb(27,0,133))]"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Services
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            🔧 Assistance | Développement | Sécurité | Formation
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Pour : petites entreprises, entrepreneurs, ONG, écoles, particuliers
            – à Madagascar (sur site ou à distance)
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className=" bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full h-[200px] flex flex-col"
            >
              <div className="flex items-center mb-3">
                <div
                  className={`p-2 rounded-full bg-gradient-to-r ${service.color} text-white`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
                  {service.title}
                </h3>
              </div>
              <p className="text-xs text-gray-900 dark:text-white ml-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 text-sm text-gray-600 dark:text-gray-400">
          📩 Contact : heriniaina@siwbs.com | 038 37 930 53 | Facebook : Wbs
          Heriniaina
          <br />
          🌍 Langues : Malagasy, Français, Anglais
        </div>
      </div>
    </section>
  );
};

export default ServiceTsara;
