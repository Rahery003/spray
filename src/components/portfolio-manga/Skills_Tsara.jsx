import React, { useState, useEffect, useRef } from "react";
import { Image, PenTool, Users, Film, Globe, Smartphone } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      icon: <Image className="h-6 w-6" />,
      title: "Design Graphique",
      color: "from-blue-600 to-[rgb(27,0,133)]",
      skills: [
        { name: "Photoshop", level: 90 },
        { name: "Illustrator", level: 85 },
        { name: "Canva", level: 95 },
        { name: "Branding", level: 88 },
      ],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Management",
      color: "from-blue-700 to-[rgb(27,0,133)]",
      skills: [
        { name: "Facebook", level: 92 },
        { name: "Instagram", level: 88 },
        { name: "TikTok", level: 85 },
        { name: "Stratégie RP", level: 90 },
      ],
    },
    {
      icon: <Film className="h-6 w-6" />,
      title: "Création Vidéo",
      color: "from-blue-800 to-[rgb(27,0,133)]",
      skills: [
        { name: "CapCut", level: 90 },
        { name: "Montage Vidéo", level: 85 },
        { name: "Stories", level: 80 },
        { name: "Reels", level: 88 },
      ],
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Rédaction",
      color: "from-blue-500 to-[rgb(27,0,133)]",
      skills: [
        { name: "Contenu Digital", level: 85 },
        { name: "Posts Réseaux", level: 90 },
        { name: "Scripts Vidéo", level: 88 },
        { name: "Traduction", level: 92 },
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Langues",
      color: "from-blue-600 to-[rgb(27,0,133)]",
      skills: [
        { name: "Français", level: 95 },
        { name: "Anglais", level: 90 },
        { name: "Allemand", level: 70 },
        { name: "Malagasy", level: 100 },
      ],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Digital",
      color: "from-blue-700 to-[rgb(27,0,133)]",
      skills: [
        { name: "Veille Trend", level: 95 },
        { name: "E-réputation", level: 90 },
        { name: "Analyse Insights", level: 85 },
        { name: "SEO Basique", level: 88 },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="pt-20 pb-6 bg-gradient-to-br from-blue-100 via-white to-blue-300 dark:bg-[linear-gradient(to_bottom_right,#111827,#1e293b,rgb(27,0,133))]"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Compétences
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Domaines d'expertise et outils que je maîtrise pour des résultats
            exceptionnels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-11">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full h-[290px] flex flex-col justify-between"
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
