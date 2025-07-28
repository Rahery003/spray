import React from "react";
import { User, Award, Calendar, MapPin } from "lucide-react";

const About = ({ language }) => {
  // Textes traduits
  const translations = {
    fr: {
      title: "À propos de moi",
      subtitle:
        "Découvrez mon parcours et ma passion pour le design et la communication digitale",
      paragraphs: [
        "Passionné par la création visuelle et la communication digitale depuis plusieurs années, je me spécialise dans la conception de supports graphiques percutants et la gestion de communauté en ligne. Mon approche combine créativité, stratégie digitale et compréhension des tendances actuelles.",
        "J'ai travaillé avec diverses structures à Madagascar, notamment en tant que Community Manager pour Spray_Info et en tant que graphiste freelance pour des clients internationaux. Cette expérience m'a permis de développer une expertise polyvalente en création de contenu et en stratégie de marque.",
      ],
      infos: {
        name: "Nom",
        nameValue: "TSARAMANGA JOSEPHINE",
        location: "Localisation",
        locationValue: "Fianarantsoa, Madagascar",
        experience: "Expérience",
        experienceValue: "3+ années",
        projects: "Projets",
        projectsValue: "50+ réalisés",
      },
      education: [
        {
          title: "Licence en Informatique",
          details: "École Nationale d'Informatique (ENI),\nFianarantsoa – 2025",
        },
        {
          title: "Baccalauréat Série C",
          details: "Lycée Privé Les Capucines,\nManakara – 2021",
        },
      ],
    },
    en: {
      title: "About Me",
      subtitle:
        "Discover my background and passion for design and digital communication",
      paragraphs: [
        "Passionate about visual creation and digital communication for several years, I specialize in designing impactful graphic materials and managing online communities. My approach combines creativity, digital strategy and understanding of current trends.",
        "I have worked with various organizations in Madagascar, including as Community Manager for Spray_Info and as a freelance graphic designer for international clients. This experience has allowed me to develop versatile expertise in content creation and brand strategy.",
      ],
      infos: {
        name: "Name",
        nameValue: "TSARAMANGA JOSEPHINE",
        location: "Location",
        locationValue: "Fianarantsoa, Madagascar",
        experience: "Experience",
        experienceValue: "3+ years",
        projects: "Projects",
        projectsValue: "50+ completed",
      },
      education: [
        {
          title: "Bachelor's Degree in Computer Science",
          details:
            "National Computer Science School (ENI),\nFianarantsoa – 2025",
        },
        {
          title: "Scientific Baccalaureate",
          details: "Les Capucines Private High School,\nManakara – 2021",
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <section
      id="about"
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700 dark:text-gray-300">
              {t.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t.infos.name}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t.infos.nameValue}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-cyan-400" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t.infos.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t.infos.locationValue}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t.infos.experience}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t.infos.experienceValue}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-600 dark:text-cyan-300" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t.infos.projects}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t.infos.projectsValue}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex flex-col space-y-8 items-center">
              {t.education.map((edu, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-blue-600 to-[rgb(27,0,133)] p-6 rounded-2xl text-white transform ${
                    index % 2 === 0
                      ? "rotate-2 hover:rotate-6"
                      : "-rotate-1 hover:-rotate-6"
                  } transition-transform w-full max-w-md`}
                >
                  <h3 className="font-bold text-lg mb-2">{edu.title}</h3>
                  <p className="text-sm opacity-90 whitespace-pre-line">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
