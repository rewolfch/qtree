import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TreePine } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, ui } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: ui('nav.home'), path: '/' },
    { name: ui('nav.framework'), path: '/framework' },
    { name: ui('nav.app'), path: '/app' },
    { name: ui('nav.blog'), path: '/blog' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-600 text-white p-2 rounded-lg group-hover:bg-brand-700 transition-colors">
              <TreePine size={24} />
            </div>
            <span className="font-sans font-bold text-xl tracking-tight text-slate-900">
              {ui('nav.title')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                    isActive(link.path) ? 'text-brand-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
              <button
                onClick={() => setLanguage('de')}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                  language === 'de' 
                    ? 'bg-slate-800 text-white' 
                    : 'text-slate-500 hover:bg-slate-100'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                  language === 'en' 
                    ? 'bg-slate-800 text-white' 
                    : 'text-slate-500 hover:bg-slate-100'
                }`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-brand-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-2 rounded-lg text-base font-medium ${
                isActive(link.path) 
                  ? 'bg-brand-50 text-brand-700' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-brand-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-2 px-4 pt-4 border-t border-slate-100 mt-2">
            <span className="text-sm text-slate-500 mr-2">Language:</span>
            <button
              onClick={() => { setLanguage('de'); setIsOpen(false); }}
              className={`text-xs font-bold px-3 py-1.5 rounded transition-colors ${
                language === 'de' 
                  ? 'bg-slate-800 text-white' 
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              DE
            </button>
            <button
              onClick={() => { setLanguage('en'); setIsOpen(false); }}
              className={`text-xs font-bold px-3 py-1.5 rounded transition-colors ${
                language === 'en' 
                  ? 'bg-slate-800 text-white' 
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
