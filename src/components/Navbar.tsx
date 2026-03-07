import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, TreeDeciduous } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, ui } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/', label: ui("nav.home") },
    { path: '/framework', label: ui("nav.framework") },
    { path: '/app', label: ui("nav.app") },
    { path: '/blog', label: ui("nav.blog") },
    { path: '/author', label: ui("nav.author") },
    { path: '/faq', label: ui("nav.faq") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 font-black text-xl tracking-tight text-slate-900" onClick={closeMenu}>
            <TreeDeciduous className="h-6 w-6 text-brand-600" />
            <span>Quality Tree Framework</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${isActive(link.path) ? 'text-brand-600' : 'text-slate-600'}`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
              className="flex items-center gap-1 text-xs font-bold uppercase text-slate-500 hover:text-brand-600 transition-colors"
            >
              <Globe className="h-4 w-4" />
              {language}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-4 text-base font-medium border-b border-slate-50 ${isActive(link.path) ? 'text-brand-600' : 'text-slate-600'}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setLanguage(language === 'de' ? 'en' : 'de');
                closeMenu();
              }}
              className="w-full text-left px-3 py-4 text-base font-medium text-slate-600 flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              {language === 'de' ? 'English' : 'Deutsch'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
