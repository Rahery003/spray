import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  Target,
  Award,
  ChevronRight,
  X,
  Rocket,
  GraduationCap,
  Lightbulb,
  Globe,
  BookOpen,
  Briefcase,
} from "lucide-react";

// Images (remplacez par vos propres assets)
import histoire1 from "/assets/histoire1.jpg";
import histoire2 from "/assets/histoire2.jpg";
import histoire3 from "/assets/histoire3.jpg";
import histoire4 from "/assets/histoire4.jpg";
import idea from "/assets/idea.jpg";
import sprayl from "/assets/sprayl.jpg";
import sprayx from "/assets/sprayx.jpg";

const About = () => {
  const [activeModal, setActiveModal] = useState(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardHover = {
    hover: {
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Modal Component
  const Modal = ({ isOpen, onClose, title, children }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{title}</h2>
                  <button
                    onClick={onClose}
                    className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="overflow-y-auto p-6">{children}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <section
      id="apropos"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.div className="text-center mb-16" variants={item}>
          <motion.span
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }}
          >
            À propos de nous
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={item}
          >
            Votre passerelle vers l'excellence technologique
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={item}
          >
            Découvrez notre vision, notre histoire et notre engagement pour
            façonner l'avenir numérique.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
        >
          {/* Histoire Card */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            variants={item}
            whileHover="hover"
            onClick={() => setActiveModal("histoire")}
          >
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
              <Calendar className="h-16 w-16 text-white" strokeWidth={1.5} />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Notre Histoire
              </h3>
              <p className="text-gray-600 mb-6">
                Découvrez le parcours de Spray_Info depuis sa fondation jusqu'à
                son expansion stratégique.
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                En savoir plus <ChevronRight className="ml-1 h-5 w-5" />
              </div>
            </div>
          </motion.div>

          {/* Objectifs Card */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            variants={item}
            whileHover="hover"
            onClick={() => setActiveModal("objectifs")}
          >
            <div className="h-48 bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-center">
              <Target className="h-16 w-16 text-white" strokeWidth={1.5} />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Nos Objectifs
              </h3>
              <p className="text-gray-600 mb-6">
                Explorez nos objectifs stratégiques et notre vision pour
                l'éducation technologique.
              </p>
              <div className="flex items-center text-indigo-600 font-medium">
                En savoir plus <ChevronRight className="ml-1 h-5 w-5" />
              </div>
            </div>
          </motion.div>

          {/* Missions Card */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            variants={item}
            whileHover="hover"
            onClick={() => setActiveModal("missions")}
          >
            <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
              <Award className="h-16 w-16 text-white" strokeWidth={1.5} />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Nos Missions
              </h3>
              <p className="text-gray-600 mb-6">
                Découvrez nos engagements pour former les talents de demain et
                accompagner la transformation digitale.
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                En savoir plus <ChevronRight className="ml-1 h-5 w-5" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Histoire Modal */}
      <Modal
        isOpen={activeModal === "histoire"}
        onClose={() => setActiveModal(null)}
        title="Notre Histoire"
      >
        <div className="space-y-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full" />

            {/* Timeline items */}
            <div className="space-y-10 pl-16">
              {/* 2022 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute -left-16 top-0 w-10 h-10 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center text-white font-bold shadow-lg">
                  2022
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Fondation de Spray_Info
                  </h4>
                  <p className="text-gray-600">
                    Création par trois ingénieurs en informatique avec une
                    première promotion de 2 étudiants dans une maison modeste.
                  </p>
                  <div className="mt-4">
                    <img
                      src={histoire1}
                      alt="Fondation"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* 2023 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="absolute -left-16 top-0 w-10 h-10 rounded-full bg-indigo-600 border-4 border-white flex items-center justify-center text-white font-bold shadow-lg">
                  2023
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Spécialisation et croissance
                  </h4>
                  <p className="text-gray-600">
                    Acquisition de notre siège actuel pouvant accueillir plus de
                    100 étudiants et concentration sur les formations
                    informatiques.
                  </p>
                  <div className="mt-4">
                    <img
                      src={histoire2}
                      alt="Croissance"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* 2024 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="absolute -left-16 top-0 w-10 h-10 rounded-full bg-purple-600 border-4 border-white flex items-center justify-center text-white font-bold shadow-lg">
                  2024
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Diversification
                  </h4>
                  <p className="text-gray-600">
                    Élargissement de notre offre vers la technologie, le
                    développement personnel, la communication et le marketing.
                  </p>
                  <div className="mt-4">
                    <img
                      src={histoire3}
                      alt="Diversification"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* 2025 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="absolute -left-16 top-0 w-10 h-10 rounded-full bg-blue-800 border-4 border-white flex items-center justify-center text-white font-bold shadow-lg">
                  2025
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Expansion stratégique
                  </h4>
                  <p className="text-gray-600">
                    Lancement de Spray_idea (cabinet de conseil), TechnoSupport
                    et l'Université privée Spray_X.
                  </p>
                  <div className="mt-4">
                    <img
                      src={histoire4}
                      alt="Expansion"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Objectifs Modal */}
      <Modal
        isOpen={activeModal === "objectifs"}
        onClose={() => setActiveModal(null)}
        title="Nos Objectifs"
      >
        <div className="space-y-8">
          {/* Objectif 1 */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="md:w-1/3">
              <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <img
                src={sprayl}
                alt="Formation professionnelle"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Spray_learn
              </h3>
              <p className="text-gray-600 mb-4">
                Notre centre de formation professionnelle vise à faciliter
                l'apprentissage des technologies émergentes et à préparer les
                étudiants aux défis du marché du travail.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Formations pratiques et intensives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Approche orientée projets réels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Accompagnement vers l'emploi</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Objectif 2 */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="md:w-1/3">
              <div className="bg-indigo-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <img
                src={sprayx}
                alt="Université Spray_X"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Spray_X University
              </h3>
              <p className="text-gray-600 mb-4">
                Notre université privée offre des formations diplômantes de haut
                niveau avec une pédagogie innovante centrée sur l'intelligence
                appliquée.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-700 mb-2">
                    Génie Logiciel
                  </h4>
                  <p className="text-sm text-gray-600">
                    Formation complète en développement et architecture
                    logicielle
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-700 mb-2">
                    Administration Systèmes & Réseaux
                  </h4>
                  <p className="text-sm text-gray-600">
                    Expertise en infrastructure et sécurité informatique
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Objectif 3 */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="md:w-1/3">
              <div className="bg-purple-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-purple-600" />
              </div>
              <img
                src={idea}
                alt="Cabinet de conseil"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Spray_idea
              </h3>
              <p className="text-gray-600 mb-4">
                Notre cabinet de conseil accompagne les entreprises dans leur
                transformation digitale avec des solutions sur mesure.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Stratégie digitale
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Optimisation des processus
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Formation des équipes
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Solutions cloud
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Modal>

      {/* Missions Modal */}
      <Modal
        isOpen={activeModal === "missions"}
        onClose={() => setActiveModal(null)}
        title="Nos Missions"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission 1 */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Rocket className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Former les talents Web 3.0
            </h3>
            <p className="text-gray-600">
              Offrir une formation universitaire de qualité pour former des
              experts capables de répondre aux exigences du marché numérique de
              demain.
            </p>
          </motion.div>

          {/* Mission 2 */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Technologie accessible
            </h3>
            <p className="text-gray-600">
              Rendre la technologie accessible à tous, sans distinction de genre
              ou de niveau, avec des programmes adaptés à chaque profil.
            </p>
          </motion.div>

          {/* Mission 3 */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Accompagnement stratégique
            </h3>
            <p className="text-gray-600">
              Proposer un accompagnement personnalisé aux entreprises et
              individus dans leur transformation digitale.
            </p>
          </motion.div>

          {/* Mission 4 */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Répondre aux besoins numériques
            </h3>
            <p className="text-gray-600">
              Offrir des services numériques professionnels et un support
              technique de qualité pour tous types de projets.
            </p>
          </motion.div>

          {/* Mission 5 */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                Notre Vision
              </h3>
              <p className="text-blue-100">
                "Devenir le leader régional de l'éducation technologique et de
                l'innovation digitale, en formant une nouvelle génération de
                talents capables de transformer l'économie numérique."
              </p>
            </div>
          </motion.div>
        </div>
      </Modal>
    </section>
  );
};

export default About;
