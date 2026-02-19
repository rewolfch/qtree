
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, TreeDeciduous, BookOpen, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, ui } = useLanguage();

  const isActive = (path: string) => {
    return location.pathname === path 
      ? 'text-brand-700 font-semibold bg-brand-50 rounded-lg px-3 py-2' 
      : 'text-slate-600 hover:text-brand-700 hover:bg-slate-50 rounded-lg px-3 py-2 transition-all';
  };

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="bg-brand-600 p-1.5 rounded-lg group-hover:bg-brand-700 transition-colors shadow-sm">
                 <TreeDeciduous className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">{ui("nav.title")}</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={isActive('/')}>{ui("nav.home")}</Link>
            <Link to="/framework" className={isActive('/framework')}>{ui("nav.framework")}</Link>
            <a 
              href="https://www.infometis.ch/services/test-assessment" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-600 hover:text-brand-700 hover:bg-slate-50 rounded-lg px-3 py-2 transition-all"
            >
              {ui("nav.assessment")}
            </a>
            <Link to="/blog" className={isActive('/blog')}>{ui("nav.blog")}</Link>
            <Link to="/author" className={isActive('/author')}>{ui("nav.author")}</Link>
            <Link to="/app" className={isActive('/app')}>{ui("nav.app")}</Link>
            
            <div className="ml-4 pl-4 border-l border-slate-200 flex items-center gap-3">
               <button 
                 onClick={toggleLanguage}
                 className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors px-2 py-1 rounded hover:bg-slate-50"
               >
                 <Globe className="h-4 w-4" />
                 {language.toUpperCase()}
               </button>
               <a 
                href="https://www.amazon.de/Das-Quality-Tree-Framework-Automatisierung/dp/3658510404" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-700 hover:text-brand-600 font-medium text-sm flex items-center"
              >
                <BookOpen className="h-4 w-4 mr-1.5" /> {ui("nav.book")}
              </a>
              <a 
                href="https://sn.pub/97r1i7" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {ui("nav.course")}
              </a>
            </div>
          </div>

          <div className="flex items-center md:hidden gap-3">
            <button 
                 onClick={toggleLanguage}
                 className="flex items-center gap-1 text-sm font-bold text-slate-600"
               >
                 {language.toUpperCase()}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg animate-fade-in z-50">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">{ui("nav.home")}</Link>
            <Link to="/framework" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">{ui("nav.framework")}</Link>
            <a href="https://www.infometis.ch/services/test-assessment" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">{ui("nav.assessment")}</a>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">{ui("nav.blog")}</Link>
            <Link to="/author" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">{ui("nav.author")}</Link>
            <Link to="/app" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">{ui("nav.app")}</Link>
            <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
              <a href="https://www.amazon.de/Das-Quality-Tree-Framework-Automatisierung/dp/3658510404" target="_blank" rel="noreferrer" className="flex justify-center items-center px-3 py-3 text-base font-medium text-slate-700 bg-slate-50 rounded-lg border border-slate-200">
                {ui("nav.book")}
              </a>
              <a href="https://sn.pub/97r1i7" target="_blank" rel="noreferrer" className="flex justify-center items-center px-3 py-3 text-base font-medium text-white bg-brand-600 rounded-lg shadow-sm">
                {ui("nav.course")}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
