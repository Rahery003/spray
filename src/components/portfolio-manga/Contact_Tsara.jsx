import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = ({ language }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(formData);

  //   await emailjs
  //     .sendForm(
  //       "service_nqjiuar",
  //       "template_byp1f7q",
  //       formData,
  //       "nhv8mqVCG3375tzhj"
  //     )
  //     .then(
  //       (result) => {
  //         console.log("Email envoyé!", result.text);
  //       },
  //       (error) => {
  //         console.log("Erreur : ", error);
  //       }
  //     );

  //   e.target.reset();
  //   setIsSubmitting(true);

  //   await new Promise((resolve) => setTimeout(resolve, 2000));

  //   setIsSubmitting(false);
  //   setIsSubmitted(true);

  //   setTimeout(() => {
  //     setIsSubmitted(false);
  //     setFormData({ name: "", email: "", title: "", message: "" });
  //   }, 3000);
  // };

  // Textes traduits

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    await emailjs
      .sendForm(
        "service_7fik1ge",
        "template_wtl7wxd",
        formRef.current, // <-- bonne référence
        "18FUVpZCrfQWWKHOq"
      )
      .then(
        (result) => {
          console.log("Email envoyé !", result.text);
          setIsSubmitted(true);
          formRef.current.reset(); // reset le formulaire HTML
          setFormData({ name: "", email: "", title: "", message: "" });
        },
        (error) => {
          console.log("Erreur : ", error);
        }
      );

    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const translations = {
    fr: {
      title: "Contactez-moi",
      subtitle:
        "Discutons de votre projet créatif ou de vos besoins en communication",
      projectTitle: "Parlons de votre projet",
      projectText:
        "Je suis disponible pour des missions de design graphique, community management ou création de contenu. Contactez-moi pour échanger sur vos besoins.",
      contactMethods: {
        email: "Email",
        phone: "Téléphone",
        location: "Localisation",
      },
      responseTime: "Temps de réponse",
      responseStatus: "Généralement sous 24h",
      formLabels: {
        name: "Nom complet",
        email: "Email",
        title: "Sujet",
        message: "Message",
      },
      placeholders: {
        name: "Votre nom",
        email: "votre@email.com",
        title: "Sujet de votre message",
        message: "Décrivez votre projet ou votre demande...",
      },
      buttonText: {
        submitting: "Envoi en cours...",
        submitted: "Message envoyé !",
        default: "Envoyer le message",
      },
    },
    en: {
      title: "Contact Me",
      subtitle: "Let's discuss your creative project or communication needs",
      projectTitle: "Let's talk about your project",
      projectText:
        "I'm available for graphic design, community management or content creation projects. Contact me to discuss your needs.",
      contactMethods: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
      responseTime: "Response time",
      responseStatus: "Usually within 24 hours",
      formLabels: {
        name: "Full name",
        email: "Email",
        title: "Subject",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "your@email.com",
        title: "Message subject",
        message: "Describe your project or request...",
      },
      buttonText: {
        submitting: "Sending...",
        submitted: "Message sent!",
        default: "Send message",
      },
    },
  };

  const t = translations[language];

  return (
    <section
      id="contact"
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

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.projectTitle}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t.projectText}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-[rgb(27,0,133)] text-white rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {t.contactMethods.email}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    tsaramanga@siwbs.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-[rgb(27,0,133)] text-white rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {t.contactMethods.phone}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    +261 34 59 043 00
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-700 to-[rgb(27,0,133)] text-white rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {t.contactMethods.location}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Fianarantsoa, Madagascar
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {t.responseTime}
              </h4>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {t.responseStatus}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                    {t.formLabels.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder={t.placeholders.name}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                    {t.formLabels.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder={t.placeholders.email}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                  {t.formLabels.subject}
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder={t.placeholders.title}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                  {t.formLabels.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors resize-none"
                  placeholder={t.placeholders.message}
                />
              </div>

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
                      ? t.buttonText.submitting
                      : isSubmitted
                      ? t.buttonText.submitted
                      : t.buttonText.default}
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
