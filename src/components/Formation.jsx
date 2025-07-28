import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Code,
  Server,
  Users,
  Brain,
  Zap,
  Award,
  Clock,
  GraduationCap,
  X,
  Calendar,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import ImageFandeani from "/assets/fandeani3.png";
import SprayLearn from "/assets/learn.png";
import SprayX from "/assets/spray_x.png";

const Formation = () => {
  const [selectedModal, setSelectedModal] = useState(null);

  const formations = [
    {
      id: "spray_x",
      category: "Spray_X - Université Privée",
      icon: <img src={SprayX} className="h-8 w-8" />,
      color: "blue-purple", // Changé de "blue" à "blue-purple"
      description: "Formation universitaire complète avec diplômes reconnus",
      programs: [
        {
          title: "Génie Logiciel Informatique",
          duration: "3 ans",
          description:
            "Formation complète en développement logiciel, programmation avancée, génie logiciel et architecture d'applications.",
          modules: [
            "Programmation orientée objet",
            "Bases de données",
            "Développement web",
            "Architecture logicielle",
            "Gestion de projets",
          ],
          price: "150 000 Ar/mois",
          certification: "Licence en Génie Logiciel",
        },
        {
          title: "Administration Systèmes & Réseaux",
          duration: "3 ans",
          description:
            "Spécialisation en administration systèmes, sécurité réseau, et infrastructure informatique.",
          modules: [
            "Administration Linux/Windows",
            "Réseaux et sécurité",
            "Virtualisation",
            "Cloud computing",
            "Cybersécurité",
          ],
          price: "150 000 Ar/mois",
          certification: "Licence en Administration Systèmes",
        },
      ],
      contact: {
        address: "Lot II M 85 Ter Ambohidahy, Antananarivo",
        phone: "+261 34 12 345 67",
        email: "contact@sprayx.edu.mg",
      },
    },
    {
      id: "spray_learn",
      category: "Spray_Learn - Centre de Formation",
      icon: <img src={SprayLearn} className="h-8 w-8" />,
      color: "blue-purple", // Changé de "green" à "blue-purple"
      description: "Formations courtes et intensives pour professionnels",
      programs: [
        {
          title: "Développement Web",
          duration: "6 mois",
          description:
            "Formation intensive en développement web moderne avec React, Node.js et technologies actuelles.",
          modules: [
            "HTML/CSS/JavaScript",
            "React.js",
            "Node.js",
            "Bases de données",
            "Déploiement",
          ],
          price: "80 000 Ar/mois",
          certification: "Certificat Développeur Web",
        },
        {
          title: "Programmation Mobile",
          duration: "4 mois",
          description:
            "Création d'applications mobiles natives et cross-platform.",
          modules: [
            "React Native",
            "Flutter",
            "API Integration",
            "UI/UX Mobile",
            "Publication sur stores",
          ],
          price: "75 000 Ar/mois",
          certification: "Certificat Développeur Mobile",
        },
        {
          title: "Cybersécurité",
          duration: "5 mois",
          description:
            "Formation en sécurité informatique et protection des systèmes.",
          modules: [
            "Ethical Hacking",
            "Sécurité réseau",
            "Cryptographie",
            "Audit sécurité",
            "Incident response",
          ],
          price: "90 000 Ar/mois",
          certification: "Certificat Expert Cybersécurité",
        },
        {
          title: "Intelligence Artificielle",
          duration: "6 mois",
          description:
            "Introduction à l'IA, machine learning et deep learning.",
          modules: [
            "Python pour IA",
            "Machine Learning",
            "Deep Learning",
            "Computer Vision",
            "NLP",
          ],
          price: "100 000 Ar/mois",
          certification: "Certificat Spécialiste IA",
        },
      ],
      contact: {
        address: "Lot II M 85 Ter Ambohidahy, Antananarivo",
        phone: "+261 34 98 765 43",
        email: "info@spraylearn.mg",
      },
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      "blue-purple":
        "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 border-blue-200", // Nouveau style gradient
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
    };
    return colors[color] || colors["blue-purple"];
  };

  const getBgGradient = (color) => {
    const gradients = {
      "blue-purple": "from-blue-600 to-purple-600", // Nouveau gradient bleu-violet
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
    };
    return gradients[color] || gradients["blue-purple"];
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div
      className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900"
      id="formations"
    >
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center pt-5 pb-8">
        <motion.div
          className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GraduationCap className="h-6 w-6 text-blue-600" />
          <span className="text-2xl font-bold text-blue-800">
            Nos Formations
          </span>
        </motion.div>
      </div>

      {/* Main Content */}
      <section className="py-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Section - Left */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={ImageFandeani}
                  alt="Étudiants en formation"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>

            {/* Formations List - Right */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {formations.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`p-3 rounded-lg ${getColorClasses(
                        category.color
                      )}`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.category}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {category.programs.slice(0, 4).map((program, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-600 p-3 rounded-lg border border-gray-100 dark:border-gray-500"
                      >
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                          {program.title}
                        </h4>
                        <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                          <Clock className="h-3 w-3" />
                          <span className="text-xs">{program.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => setSelectedModal(category)}
                    className={`w-full bg-gradient-to-r ${getBgGradient(
                      category.color
                    )} text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Voir les détails et s'inscrire
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedModal(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className={`bg-gradient-to-r ${getBgGradient(
                  selectedModal.color
                )} text-white p-6 rounded-t-2xl`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {selectedModal.icon}
                    <h2 className="text-2xl font-bold">
                      {selectedModal.category}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedModal(null)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <p className="mt-2 opacity-90">{selectedModal.description}</p>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {selectedModal.programs.map((program, index) => (
                    <motion.div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {program.title}
                        </h3>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{program.duration}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-3">
                        {program.description}
                      </p>

                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                          Modules :
                        </h4>
                        <ul className="space-y-1">
                          {program.modules.map((module, moduleIndex) => (
                            <li
                              key={moduleIndex}
                              className="text-gray-600 text-xs flex items-center space-x-2"
                            >
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>{module}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {program.price}
                          </p>
                          <p className="text-xs text-gray-500">
                            {program.certification}
                          </p>
                        </div>
                        <motion.button
                          className={`bg-gradient-to-r ${getBgGradient(
                            selectedModal.color
                          )} text-white px-4 py-2 rounded-lg text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          S'inscrire
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Information */}
                <motion.div
                  className="bg-gray-50 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Informations de Contact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Adresse
                        </p>
                        <p className="text-xs text-gray-600">
                          {selectedModal.contact.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Téléphone
                        </p>
                        <p className="text-xs text-gray-600">
                          {selectedModal.contact.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Email
                        </p>
                        <p className="text-xs text-gray-600">
                          {selectedModal.contact.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Additional Information */}
                <motion.div
                  className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-900">
                      Avantages de nos formations
                    </h4>
                  </div>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>
                      • Formateurs experts avec expérience professionnelle
                    </li>
                    <li>• Projets pratiques et portfolio professionnel</li>
                    <li>• Accompagnement personnalisé</li>
                    <li>• Certification reconnue</li>
                    <li>• Aide à l'insertion professionnelle</li>
                    <li>• Accès aux ressources en ligne</li>
                  </ul>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      className={`bg-gradient-to-r ${getBgGradient(
                        selectedModal.color
                      )} text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Demander plus d'informations
                    </motion.button>
                    <motion.button
                      className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Télécharger la brochure
                    </motion.button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Inscriptions ouvertes • Places limitées • Réponse sous 48h
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Statistics Section */}
    </div>
  );
};

export default Formation;
