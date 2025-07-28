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
import Images1 from "/assets/Image1.jpg";
import Images2 from "/assets/Image2.jpg";
import Images3 from "/assets/Image3.jpg";
import Images4 from "/assets/Image4.jpg";
import Images5 from "/assets/Image5.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Community Manager – Spray_Info",
      description:
        "Centre de Formation - Imandry Fianarantsoa\nCréation de contenus (visuels, vidéos, stories)\nGestion de la page Facebook & Instagram\nAnimation de la communauté, réponse aux messages et commentaires",
      image: Images3,
      technologies: ["Photoshop", "Facebook", "Instagram", "Canva"],
      category: "cm",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Designer Graphique Freelance",
      description:
        "En ligne\nRéalisation de visuels professionnels pour des clients à l’étranger\nBranding, refonte d'identité visuelle, bannières et supports digitaux\nTravail à distance via plateformes freelance",
      image: Images4,
      technologies: ["Illustrator", "Branding", "Print"],
      category: "design",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Graphiste - ManTek",
      description:
        "Fianarantsoa\nConception de supports visuels pour la communication digitale et imprimée\nContribution à des projets créatifs dans le domaine de la technologie et de l’innovation",
      image: Images5,
      technologies: ["Photoshop", "Illustrator", "Print"],
      category: "design",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "App Vente d’Eau – Android & Web",
      description:
        "Création d’une application mobile Android et d’un portail web\nGestion des ventes, des factures et synchronisation avec le serveur\nProjet réalisé pour une entreprise locale à Fianarantsoa",
      image: Images2,
      technologies: ["Java", "React", "MySQL", "Android"],
      category: "dev",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 5,
      title: "Infrastructure réseau sécurisée – Cisco/Mikrotik",
      description:
        "Mise en place d’un réseau LAN/WLAN sécurisé\nConfiguration de routeurs Cisco et Mikrotik, avec PfSense\nSupervision réseau et filtrage firewall pour entreprise",
      image: Images4,
      technologies: ["Cisco", "PfSense", "Mikrotik", "Supervision"],
      category: "network",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Audit de sécurité & durcissement serveur",
      description:
        "Test d’intrusion avec Nmap, Metasploit et Wireshark\nMise en place de règles de sécurité Linux (fail2ban, firewall)\nPréparation de rapports d’audit pour les clients",
      image: Images1,
      technologies: ["Linux", "Pentest", "Nmap", "Wireshark"],
      category: "cyber",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 7,
      title: "Virtualisation & sauvegarde – Spray_Info",
      description:
        "Déploiement de machines virtuelles avec VirtualBox\nMise en place de stratégies de sauvegarde (rsync, snapshots)\nFormation des utilisateurs à l’utilisation des VM",
      image: Images5,
      technologies: ["VirtualBox", "Linux", "Sauvegarde", "VM"],
      category: "system",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 8,
      title: "Dashboard Suivi – Web",
      description:
        "Développement d’un tableau de bord interactif\nSuivi des ventes, statistiques en temps réel, exports PDF\nStack : Laravel + Chart.js + MySQL",
      image: Images3,
      technologies: ["Laravel", "Chart.js", "MySQL"],
      category: "dev",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 9,
      title: "Formation Sécurité Informatique",
      description:
        "Animation de sessions de formation pratiques (Kali Linux, pare-feu, VPN)\nCréation de supports pédagogiques, encadrement des stagiaires\nFormation orientée pratique pour futurs professionnels",
      image: Images2,
      technologies: ["Formation", "Kali Linux", "VPN", "Firewall"],
      category: "formateur",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const categories = [
    { key: "all", label: "Tous", icon: <Globe className="h-4 w-4" /> },
    { key: "design", label: "Design", icon: <Image className="h-4 w-4" /> },
    { key: "cm", label: "Community", icon: <Users className="h-4 w-4" /> },
    { key: "dev", label: "Développement", icon: <Globe className="h-4 w-4" /> },
    { key: "network", label: "Réseaux", icon: <Users className="h-4 w-4" /> },
    {
      key: "cyber",
      label: "Cybersécurité",
      icon: <PenTool className="h-4 w-4" />,
    },
    { key: "system", label: "Systèmes", icon: <Film className="h-4 w-4" /> },
    {
      key: "formateur",
      label: "Formation",
      icon: <Github className="h-4 w-4" />,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-[linear-gradient(to_bottom_right,#111827,#1e293b,rgb(27,0,133))] transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Réalisations issues de mes expériences professionnelles
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
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
                    <span className="text-sm font-medium">Voir le projet</span>
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
