import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="pt-20 pb-6 bg-gradient-to-br from-blue-100 via-white to-blue-300 dark:bg-[linear-gradient(to_bottom_right,#111827,#1e293b,rgb(27,0,133))]"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez-moi
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discutons de votre projet créatif ou de vos besoins en communication
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Parlons de votre projet
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Je suis disponible pour des missions de développement web,
                administration système et réseau, cybersécurité ou formation IT.
                N'hésitez pas à me contacter pour discuter de vos projets ou
                besoins en transformation numérique.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-[rgb(27,0,133)] text-white rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    heriniaina.roiall@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-[rgb(27,0,133)] text-white rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Téléphone
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    +261 38 37 930 53
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-700 to-[rgb(27,0,133)] text-white rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Localisation
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Imandry, FIANARANTSOA MADAGASCAR
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Temps de réponse
              </h4>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Généralement sous 24h
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              {/* BOUTON PERSONNALISÉ */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105
                  disabled:transform-none disabled:opacity-75
                  ${
                    isSubmitted
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gradient-to-r from-blue-600 to-[rgb(27,0,133)] hover:from-blue-700 hover:to-[rgb(27,0,133)]"
                  }`}
              >
                <div className="flex items-center justify-center space-x-3">
                  <div
                    className={`p-2 rounded-full text-white ${
                      isSubmitted
                        ? "bg-green-700"
                        : "bg-gradient-to-r from-blue-600 to-[rgb(27,0,133)]"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    ) : isSubmitted ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                  </div>
                  <span>
                    {isSubmitting
                      ? "Envoi en cours..."
                      : isSubmitted
                      ? "Message envoyé !"
                      : "Envoyer le message"}
                  </span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
