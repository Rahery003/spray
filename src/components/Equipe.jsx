import React from "react";
import { Link } from "react-router-dom";
import {
  User,
  ExternalLink,
  Award,
  BookOpen,
  Code,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import Fandeani from "/assets/fandeanip.jpg";
import Aras from "/assets/aras.jpg";
import Pierre from "/assets/pierre.jpg";
import Dakely from "/assets/dakely.jpg";

function Equipe() {
  const formateurs = [
    {
      id: "heriniaina",
      name: "RAMANANJANAHARY Heriniaina Jacquino",
      title: "Fondateur & Directeur Technique",
      specialty: "Génie Logiciel & Architecture",
      description:
        "Expert en développement logiciel avec une solide expérience en architecture d'applications et gestion de projets techniques.",
      skills: [
        "React/Node.js",
        "Architecture logicielle",
        "Gestion de projets",
        "Formation technique",
      ],
      experience: "5+ années",
      formation: "Ingénieur ENI Tuléar",
      image: Fandeani,
    },
    {
      id: "sylvestre",
      name: "HERINIRIKO Nomenjanahary Sylvestre",
      title: "Développeur FullStack",
      specialty: "Administration Systèmes & Réseaux",
      description:
        "Spécialiste en administration systèmes, sécurité réseau et infrastructure informatique avec une expertise en cybersécurité.",
      skills: [
        "Linux/Windows",
        "Sécurité réseau",
        "Virtualisation",
        "Cloud computing",
      ],
      experience: "5+ années",
      formation: "Ingénieur ENI Tuléar",
      image: Dakely,
    },
    {
      id: "jean-pierre",
      name: "LIGNISA Jean Pierre",
      title: "Administrateur Système & Réseau",
      specialty: "Transformation Digitale & Conseil",
      description:
        "Expert en transformation digitale et conseil stratégique, accompagne les entreprises dans leur évolution technologique.",
      skills: [
        "Conseil stratégique",
        "Transformation digitale",
        "Gestion d'entreprise",
        "Formation",
      ],
      experience: "5+ années",
      formation: "Ingénieur ENI Tuléar",
      image: Pierre,
    },
    {
      id: "manga",
      name: "TSARAMANGA J.",
      title: "Designer Graphique & Community Manager",
      specialty: "DESIGNER GRAPHIQUE & COMMUNITY MANAGER",
      description: "Description du quatrième membre de l'équipe.",
      skills: ["Compétence 1", "Compétence 2", "Compétence 3"],
      experience: "5+ années",
      formation: "Formation à définir",
      image: Aras,
    },
  ];

  // Composant pour afficher un membre
  const MembreCard = ({ formateur, index, isTop = false }) => (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      {/* Image circulaire */}
      <div className="relative mb-6">
        <div
          className={`${
            isTop ? "w-56 h-56" : "w-48 h-48"
          } rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-blue-900 shadow-xl`}
        >
          <img
            src={formateur.image}
            alt={formateur.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        {/* Effet de bordure dégradée */}
        <div
          className={`absolute inset-0 ${
            isTop ? "w-56 h-56" : "w-48 h-48"
          } rounded-full bg-gradient-to-r from-blue-500 to-blue-900 p-1`}
        >
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src={formateur.image}
              alt={formateur.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Nom complet */}
      <h3
        className={`${
          isTop ? "text-2xl" : "text-xl"
        } font-bold text-gray-900 mb-2 max-w-xs`}
      >
        {formateur.name}
      </h3>

      {/* Titre (optionnel) */}
      <p className="text-blue-600 font-semibold mb-4 text-sm">
        {formateur.title}
      </p>

      {/* Bouton Portfolio */}
      <Link
        to={`/portfolio/${formateur.id}`}
        className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-3 px-6 rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        <span>Voir le portfolio</span>
        <ExternalLink className="h-4 w-4" />
      </Link>
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-16" id="equipe">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center pt-5">
        <motion.div
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-2xl font-medium text-blue-800">
            Nos Equipes
          </span>
        </motion.div>

        <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
          Une équipe d'experts passionnés et expérimentés
        </motion.p>
      </div>

      {/* Formateurs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premier membre centré en haut */}
          <div className="flex justify-center mb-16">
            <MembreCard formateur={formateurs[0]} index={0} isTop={true} />
          </div>

          {/* Les trois autres membres en bas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
            {formateurs.slice(1).map((formateur, index) => (
              <MembreCard
                key={formateur.id}
                formateur={formateur}
                index={index + 1}
                isTop={false}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Equipe;
