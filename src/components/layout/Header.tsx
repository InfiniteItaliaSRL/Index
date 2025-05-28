import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { navLinks } from '../../constants';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [language, setLanguage] = useState<'en' | 'it'>('en');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'it' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white bg-opacity-95 shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo dark={scrolled} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-emerald-600 ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleLanguage}
            className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            <Globe size={16} />
            <span>{language === 'en' ? 'EN' : 'IT'}</span>
          </button>
          <a
            href="#contact"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              scrolled
                ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                : 'bg-white text-emerald-800 hover:bg-gray-100'
            }`}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleLanguage}
            className={`mr-4 flex items-center space-x-1 text-sm font-medium transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            <Globe size={16} />
            <span>{language === 'en' ? 'EN' : 'IT'}</span>
          </button>
          <button
            onClick={toggleMenu}
            className={`text-2xl focus:outline-none ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-emerald-900 z-50 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white text-2xl focus:outline-none"
          >
            <X size={24} />
          </button>
          <ul className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  onClick={toggleMenu}
                  className="text-white text-xl font-medium hover:text-emerald-300 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="mt-4 px-6 py-3 bg-white text-emerald-800 rounded-md text-base font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;