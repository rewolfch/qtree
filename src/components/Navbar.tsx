import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, ui } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(false);
    }
  }, [location, isOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  const navLinks = [
    { path: '/', label: ui('nav.home') },
    { path: '/framework', label: ui('nav.framework') },
    { path: '/blog', label: ui('nav.blog') },
    { path: '/author', label: ui('nav.author') },
  ];

  const isHome = location.pathname === '/';
  const isScrolled = scrolled || !isHome;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isScrolled ? 'bg-brand-600 text-white' : 'bg-white text-brand-600'}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
              </svg>
            </div>
            <span className={`font-bold text-lg tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Quality Tree
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                    location.pathname === link.path
                      ? 'text-brand-500'
                      : isScrolled ? 'text-slate-600' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 pl-6 border-l border-slate-200/20">
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors ${
                  isScrolled ? 'text-slate-600 hover:text-brand-600' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Globe className="w-4 h-4" />
                {language}
              </button>

              <a
                href="https://www.amazon.de/Das-Quality-Tree-Framework-Automatisierung/dp/3658510404"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 ${
                  isScrolled
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20'
                    : 'bg-white text-brand-900 hover:bg-brand-50'
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                {ui('hero.cta_book')}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={`text-xs font-bold uppercase tracking-wider ${
                isScrolled ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              {language}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-lg font-medium ${
                location.pathname === link.path ? 'text-brand-600' : 'text-slate-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <a
              href="https://www.amazon.de/Das-Quality-Tree-Framework-Automatisierung/dp/3658510404"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-brand-600 text-white px-4 py-3 rounded-xl font-bold hover:bg-brand-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {ui('hero.cta_book')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
