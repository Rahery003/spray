import React, { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logoBlue from "/assets/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Accueil");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
    setIsMenuOpen(false); // Fermer le menu mobile après sélection
  };

  const menuItems = [
    { name: "Accueil", href: "#" },
    { name: "A propos", href: "#apropos" },
    { name: "Services", href: "#service" },
    { name: "Equipes", href: "#equipe" },
    // { name: "Partenaires", href: "#partenaire" },
  ];

  return (
    <header className="px-4 sm:px-8 lg:px-20 flex justify-between items-center bg-white h-16 sm:h-16 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex justify-between items-center gap-2">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
          <img src={logoBlue} alt="" />
        </div>
        <span className="font-bold text-[#100060] text-lg sm:text-4xl">
          Spray_info
        </span>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:block">
        <ul className="flex justify-between items-center gap-6 font-semibold text-gray-800">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => handleMenuClick(item.name)}
                className={`transition-all duration-300 text-lg ${
                  activeMenu === item.name
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-[#100060] hover:text-blue-600"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("Contact")}
              className={`p-2 sm:p-3 flex justify-between items-center gap-2 sm:gap-3 font-bold rounded-md border-2 transition-all duration-300 ${
                activeMenu === "Contact"
                  ? "text-white bg-blue-600 border-blue-600"
                  : "text-blue-600 border-gray-300 hover:border-blue-600"
              }`}
            >
              <FaPhoneAlt className="text-sm" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-[#100060] hover:text-blue-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <img src={logoBlue} />
            </div>
            <span className="font-bold text-[#100060] text-lg">Spray_Info</span>
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 text-[#100060] hover:text-blue-600 transition-colors"
            aria-label="Close menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col p-6 space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => handleMenuClick(item.name)}
                className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-100 ${
                  activeMenu === item.name
                    ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                    : "text-[#100060] hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#"
              onClick={() => handleMenuClick("Contact")}
              className={`w-full p-4 flex justify-center items-center gap-3 font-bold rounded-lg border-2 transition-all duration-300 ${
                activeMenu === "Contact"
                  ? "text-white bg-blue-600 border-blue-600"
                  : "text-blue-600 border-gray-300 hover:border-blue-600 hover:bg-blue-50"
              }`}
            >
              <FaPhoneAlt />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
