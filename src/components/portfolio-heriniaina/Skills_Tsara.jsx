import React, { useState, useEffect, useRef } from "react";
import { Globe, Network, Server, Shield } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef < HTMLElement > null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Globe className="h-6 w-6" />, // 🌐 Pour le développement web
      title: "Développement & Programmation",
      color: "from-blue-600 to-[rgb(27,0,133)]",
      skills: [
        {
          name: "Développement Web (PHP - Laravel, JavaScript - ReactJs & ExpressJs , Java - Spring Boot, HTML5, CSS3)",
          level: 95,
        },
        {
          name: "Développement mobile ( Java Mobile , Flutter , React Native)",
          level: 90,
        },
        { name: "Base de données (MySQL, PostagreSQL ,SQLite)", level: 88 },
        { name: "API REST & intégration d’API tierces", level: 85 },
      ],
    },
    {
      icon: <Network className="h-6 w-6" />, // 🔌 Réseau (nécessite d'importer un autre icône)
      title: "Réseaux & Infrastructure",
      color: "from-blue-700 to-[rgb(27,0,133)]",
      skills: [
        {
          name: "Administration réseau (Cisco, Mikrotik , PfSens , Linux)",
          level: 92,
        },
        { name: " Configuration de routeurs et commutateurs", level: 88 },
        { name: "Maintenance et supervision réseau", level: 85 },
        {
          name: "Mise en place d’infrastructures LAN / WLAN sécurisées",
          level: 95,
        },
        {
          name: "Mise en place de système de sécurité réseau ( Firewall , VPN ,GPO , Détection d’intrusion)",
          level: 75,
        },
      ],
    },
    {
      icon: <Server className="h-6 w-6" />, // 🖥️ Pour système et serveurs
      title: "Systèmes & Serveurs",
      color: "from-blue-800 to-[rgb(27,0,133)]",
      skills: [
        { name: "Administration Linux (Ubuntu, Debian)", level: 90 },
        { name: "Administration Windows (serveur , desktop)", level: 85 },
        {
          name: "Gestion des utilisateurs, des droits et des services système",
          level: 80,
        },
        { name: "Virtualisation (VirtualBox, VMware)", level: 88 },
        { name: "Sauvegarde et restauration", level: 95 },
        { name: "Automatisation des taches", level: 75 },
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />, // 🔐 Pour cybersécurité
      title: "Cybersécurité",
      color: "from-blue-500 to-[rgb(27,0,133)]",
      skills: [
        { name: "Audit de sécurité & tests d’intrusion", level: 85 },
        {
          name: "Surveillance et détection d’incidents ( Splunk , ELK stack)",
          level: 80,
        },
        {
          name: "Mise en place de politiques de sécurité, gestion des accès et contrôle des privilèges",
          level: 88,
        },
        {
          name: "Utilisation d’outils de pentesting et analyse (Nmap, Metasploit , Wireshark)",
          level: 92,
        },
        {
          name: "Gestion des firewalls et VPNs, notamment avec pfSense et Cisco ASA",
          level: 75,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-[linear-gradient(to_bottom_right,#111827,#1e293b,rgb(27,0,133))] transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Compétences
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Domaines de spécialisation et technologies que je maîtrise pour
            répondre efficacement à vos enjeux numériques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${skillIndex * 150}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
