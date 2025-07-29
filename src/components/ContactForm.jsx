import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff,
  Sparkles,
} from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  // Validation en temps réel
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Le nom est requis";
        if (value.trim().length < 2)
          return "Le nom doit contenir au moins 2 caractères";
        return "";
      case "email":
        if (!value.trim()) return "L'email est requis";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Format d'email invalide";
        return "";
      case "phone":
        if (value && !/^[\d\s\-\+\(\)]+$/.test(value))
          return "Format de téléphone invalide";
        return "";
      case "subject":
        if (!value.trim()) return "Le sujet est requis";
        return "";
      case "message":
        if (!value.trim()) return "Le message est requis";
        if (value.trim().length < 10)
          return "Le message doit contenir au moins 10 caractères";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validation en temps réel
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    setFocusedField(null);
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation complète
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    if (Object.keys(newErrors).length > 0) {
      // Animation de secousse pour les erreurs
      formRef.current?.classList.add("animate-shake");
      setTimeout(() => formRef.current?.classList.remove("animate-shake"), 500);
      return;
    }

    setIsSubmitting(true);

    // Simulation d'envoi avec étapes
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTouched({});
    setErrors({});
    setIsSubmitting(false);

    // Reset success message après 5 secondes
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  // Animation d'apparition
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-4">
      <div className="max-w-6xl mx-auto">
        {/* Message de succès */}
        {submitSuccess && (
          <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg animate-slide-in-right">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Message envoyé avec succès !</span>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informations de contact améliorées */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 group">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                  Nos coordonnées
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group/item p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-300">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Téléphone</h3>
                    <p className="text-gray-600 font-mono">+261 38 37 930 53</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group/item p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-full group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600 font-mono">
                      sprayinfo@siwbs.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group/item p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Adresse</h3>
                    <p className="text-gray-600">
                      Carrière arrêt bus 28
                      <br />
                      Imandry, Fianarantsoa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Horaires d'ouverture</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="font-medium">Lundi - Vendredi</span>
                    <span className="text-blue-200">
                      8h00 - 12h00 et 14h - 17h30
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="font-medium">Samedi</span>
                    <span className="text-red-300">Fermé</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="font-medium">Dimanche</span>
                    <span className="text-blue-200">14h - 17h30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact modernisé */}
          <div ref={formRef}>
            <form
              onSubmit={handleSubmit}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 space-y-6"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  Envoyez-nous un message
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Champ Nom */}
                <div className="relative">
                  <label
                    className={`block text-sm font-semibold mb-2 transition-colors ${
                      focusedField === "name"
                        ? "text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    Nom complet *
                  </label>
                  <div className="relative">
                    <User
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                        focusedField === "name"
                          ? "text-blue-600"
                          : "text-gray-400"
                      }`}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={handleBlur}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl transition-all duration-300 ${
                        errors.name && touched.name
                          ? "border-red-500 focus:ring-red-500"
                          : focusedField === "name"
                          ? "border-blue-500 focus:ring-blue-500 shadow-lg"
                          : "border-gray-300 focus:ring-blue-500"
                      } focus:border-transparent focus:ring-2`}
                      placeholder="Votre nom complet"
                    />
                    {errors.name && touched.name && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  {errors.name && touched.name && (
                    <p className="text-red-500 text-sm mt-1 animate-fade-in">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Champ Email */}
                <div className="relative">
                  <label
                    className={`block text-sm font-semibold mb-2 transition-colors ${
                      focusedField === "email"
                        ? "text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    Email *
                  </label>
                  <div className="relative">
                    <Mail
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                        focusedField === "email"
                          ? "text-blue-600"
                          : "text-gray-400"
                      }`}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl transition-all duration-300 ${
                        errors.email && touched.email
                          ? "border-red-500 focus:ring-red-500"
                          : focusedField === "email"
                          ? "border-blue-500 focus:ring-blue-500 shadow-lg"
                          : "border-gray-300 focus:ring-blue-500"
                      } focus:border-transparent focus:ring-2`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && touched.email && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  {errors.email && touched.email && (
                    <p className="text-red-500 text-sm mt-1 animate-fade-in">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Champ Téléphone */}
                <div className="relative">
                  <label
                    className={`block text-sm font-semibold mb-2 transition-colors ${
                      focusedField === "phone"
                        ? "text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                        focusedField === "phone"
                          ? "text-blue-600"
                          : "text-gray-400"
                      }`}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus("phone")}
                      onBlur={handleBlur}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl transition-all duration-300 ${
                        errors.phone && touched.phone
                          ? "border-red-500 focus:ring-red-500"
                          : focusedField === "phone"
                          ? "border-blue-500 focus:ring-blue-500 shadow-lg"
                          : "border-gray-300 focus:ring-blue-500"
                      } focus:border-transparent focus:ring-2`}
                      placeholder="+261 XX XX XXX XX"
                    />
                    {errors.phone && touched.phone && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  {errors.phone && touched.phone && (
                    <p className="text-red-500 text-sm mt-1 animate-fade-in">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Champ Sujet */}
                <div className="relative">
                  <label
                    className={`block text-sm font-semibold mb-2 transition-colors ${
                      focusedField === "subject"
                        ? "text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus("subject")}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border rounded-xl transition-all duration-300 ${
                      errors.subject && touched.subject
                        ? "border-red-500 focus:ring-red-500"
                        : focusedField === "subject"
                        ? "border-blue-500 focus:ring-blue-500 shadow-lg"
                        : "border-gray-300 focus:ring-blue-500"
                    } focus:border-transparent focus:ring-2`}
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="information">Demande d'information</option>
                    <option value="inscription">Inscription</option>
                    <option value="support">Support technique</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.subject && touched.subject && (
                    <p className="text-red-500 text-sm mt-1 animate-fade-in">
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              {/* Champ Message */}
              <div className="relative">
                <label
                  className={`block text-sm font-semibold mb-2 transition-colors ${
                    focusedField === "message"
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  Message *
                </label>
                <div className="relative">
                  <MessageCircle
                    className={`absolute left-3 top-4 w-5 h-5 transition-colors ${
                      focusedField === "message"
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    rows={5}
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl transition-all duration-300 resize-none ${
                      errors.message && touched.message
                        ? "border-red-500 focus:ring-red-500"
                        : focusedField === "message"
                        ? "border-blue-500 focus:ring-blue-500 shadow-lg"
                        : "border-gray-300 focus:ring-blue-500"
                    } focus:border-transparent focus:ring-2`}
                    placeholder="Décrivez votre demande en détail..."
                  ></textarea>
                  {errors.message && touched.message && (
                    <div className="absolute right-3 top-4">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.message && touched.message && (
                  <p className="text-red-500 text-sm mt-1 animate-fade-in">
                    {errors.message}
                  </p>
                )}
                <div className="text-right text-sm text-gray-400 mt-1">
                  {formData.message.length}/500
                </div>
              </div>

              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform relative overflow-hidden ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-2xl hover:scale-105"
                }`}
              >
                <div className="flex items-center justify-center space-x-2 relative z-10">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </div>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center flex items-center justify-center space-x-1">
                <span>*</span>
                <span>Champs obligatoires</span>
                <span>•</span>
                <span>Réponse sous 24h</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
