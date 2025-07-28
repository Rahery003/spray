import React from "react";
import { Users, MonitorCheck, PenTool, LayoutDashboard } from "lucide-react";

const ServicesTsara = ({ language }) => {
  // Textes traduits
  const translations = {
    fr: {
      title: "Mes Services",
      subtitle:
        "Des solutions sur mesure pour accompagner vos projets digitaux",
      services: [
        {
          title: "Assistance Virtuelle",
          items: [
            "Gestion d'e-mails et planning",
            "Suivi de projets & tâches admin",
            "Mise en page de documents",
            "Support client à distance",
          ],
        },
        {
          title: "Community Management",
          items: [
            "Gestion Facebook & Instagram",
            "Création de visuels & stories",
            "Planification de posts",
            "Réponses & animation",
          ],
        },
        {
          title: "Design Graphique",
          items: [
            "Création de logos & affiches",
            "Refonte d'identité visuelle",
            "Branding complet",
            "Supports digitaux",
          ],
        },
        {
          title: "Création Web Basique",
          items: [
            "Maquettage de pages HTML/CSS",
            "Participation UI avec Figma",
          ],
        },
      ],
    },
    en: {
      title: "My Services",
      subtitle: "Custom solutions to support your digital projects",
      services: [
        {
          title: "Virtual Assistance",
          items: [
            "Email and schedule management",
            "Project tracking & admin tasks",
            "Document layout",
            "Remote client support",
          ],
        },
        {
          title: "Community Management",
          items: [
            "Facebook & Instagram management",
            "Visuals & stories creation",
            "Posts scheduling",
            "Engagement & responses",
          ],
        },
        {
          title: "Graphic Design",
          items: [
            "Logo & poster creation",
            "Visual identity redesign",
            "Complete branding",
            "Digital media",
          ],
        },
        {
          title: "Basic Web Creation",
          items: ["HTML/CSS page mockups", "UI participation with Figma"],
        },
      ],
    },
  };

  const t = translations[language];

  // Couleurs et icônes (inchangées entre les langues)
  const serviceColors = [
    "from-blue-600 to-[rgb(27,0,133)]",
    "from-blue-700 to-[rgb(27,0,133)]",
    "from-blue-800 to-[rgb(27,0,133)]",
    "from-blue-500 to-[rgb(27,0,133)]",
  ];

  const serviceIcons = [
    <MonitorCheck className="h-6 w-6" />,
    <Users className="h-6 w-6" />,
    <PenTool className="h-6 w-6" />,
    <LayoutDashboard className="h-6 w-6" />,
  ];

  return (
    <section
      id="services"
      className="pt-20 pb-6 bg-gradient-to-br from-blue-100 via-white to-blue-300 dark:bg-[linear-gradient(to_bottom_right,#111827,#1e293b,rgb(27,0,133))]"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
          {t.services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full h-[200px] max-w-[600px] flex flex-col"
            >
              <div className="flex items-center mb-1">
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${serviceColors[index]} text-white`}
                >
                  {serviceIcons[index]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
                  {service.title}
                </h3>
              </div>

              <ul className="space-y-1 pl-1 text-gray-700 dark:text-gray-300 text-sm">
                {service.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>

              <div className="flex-grow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTsara;
