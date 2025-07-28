import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Image,
  Users,
  Film,
  Globe,
  PenTool,
} from "lucide-react";
import img1 from "/assets/12334.jpg";
import img2 from "/assets/design_n.jpg";
import img3 from "/assets/112233.jpg";

const Projects = ({ language }) => {
  const [filter, setFilter] = useState("all");

  // Textes traduits
  const translations = {
    fr: {
      title: "Mes Projets",
      subtitle: "Réalisations issues de mes expériences professionnelles",
      categories: [
        { key: "all", label: "Tous", icon: <Globe className="h-4 w-4" /> },
        { key: "design", label: "Design", icon: <Image className="h-4 w-4" /> },
        { key: "cm", label: "Community", icon: <Users className="h-4 w-4" /> },
      ],
      viewProject: "Voir le projet",
      projects: [
        {
          title: "Community Manager – Spray_Info",
          description:
            "Centre de Formation - Imandry Fianarantsoa\nCréation de contenus (visuels, vidéos, stories)\nGestion de la page Facebook & Instagram\nAnimation de la communauté, réponse aux messages et commentaires",
        },
        {
          title: "Designer Graphique Freelance",
          description:
            "En ligne\nRéalisation de visuels professionnels pour des clients à l'étranger\nBranding, refonte d'identité visuelle, bannières et supports digitaux\nTravail à distance via plateformes freelance",
        },
        {
          title: "Graphiste - ManTek",
          description:
            "Fianarantsoa\nConception de supports visuels pour la communication digitale et imprimée\nContribution à des projets créatifs dans le domaine de la technologie et de l'innovation",
        },
      ],
    },
    en: {
      title: "My Projects",
      subtitle: "Achievements from my professional experiences",
      categories: [
        { key: "all", label: "All", icon: <Globe className="h-4 w-4" /> },
        { key: "design", label: "Design", icon: <Image className="h-4 w-4" /> },
        { key: "cm", label: "Community", icon: <Users className="h-4 w-4" /> },
      ],
      viewProject: "View project",
      projects: [
        {
          title: "Community Manager – Spray_Info",
          description:
            "Training Center - Imandry Fianarantsoa\nContent creation (visuals, videos, stories)\nManagement of Facebook & Instagram pages\nCommunity engagement, responding to messages and comments",
        },
        {
          title: "Freelance Graphic Designer",
          description:
            "Online\nCreation of professional visuals for international clients\nBranding, visual identity redesign, banners and digital media\nRemote work through freelance platforms",
        },
        {
          title: "Graphic Designer - ManTek",
          description:
            "Fianarantsoa\nDesign of visual materials for digital and print communication\nContribution to creative projects in technology and innovation",
        },
      ],
    },
  };

  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: t.projects[0].title,
      description: t.projects[0].description,
      image: img1,
      technologies: ["Photoshop", "Facebook", "Instagram", "Canva"],
      category: "cm",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: t.projects[1].title,
      description: t.projects[1].description,
      image: img2,
      technologies: ["Illustrator", "Branding", "Print"],
      category: "design",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 3,
      title: t.projects[2].title,
      description: t.projects[2].description,
      image: img3,
      technologies: ["Photoshop", "Illustrator", "Print"],
      category: "design",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {t.categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.key
                  ? "bg-gradient-to-r from-blue-600 to-[rgb(27,0,133)] text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      aria-label={t.viewProject}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-900 to-[rgb(27,0,133)] text-blue-100 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-300 dark:border-gray-700">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm font-medium">{t.viewProject}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
