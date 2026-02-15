
import React from 'react';
import { Linkedin, Mail, ShoppingCart, BookOpen, TreeDeciduous, Globe, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { ui } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <TreeDeciduous className="h-6 w-6 text-brand-500" />
              <h3 className="text-white text-xl font-bold tracking-tight">Quality Tree Framework</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              {ui("hero.desc")}
            </p>
            
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">{ui("hero.cta_book")}</h4>
            <div className="flex flex-wrap gap-3 mb-6">
               <a href="https://www.amazon.de/Das-Quality-Tree-Framework-Automatisierung/dp/3658510404" target="_blank" rel="noreferrer" className="text-xs font-bold bg-white text-slate-900 hover:bg-brand-500 hover:text-white px-4 py-2.5 rounded-lg flex items-center transition-all shadow-sm">
                 <ShoppingCart className="h-3.5 w-3.5 mr-2" /> Amazon
               </a>
               <a href="https://link.springer.com/book/9783658510404" target="_blank" rel="noreferrer" className="text-xs font-bold bg-slate-800 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg flex items-center transition-colors border border-slate-700 hover:border-blue-500 shadow-sm">
                 <BookOpen className="h-3.5 w-3.5 mr-2" /> Springer
               </a>
               <a href="https://www.thalia.de/suche?sq=9783658510404" target="_blank" rel="noreferrer" className="text-xs font-bold bg-white text-slate-900 hover:bg-brand-500 hover:text-white px-4 py-2.5 rounded-lg flex items-center transition-all shadow-sm">
                 <ShoppingBag className="h-3.5 w-3.5 mr-2" /> Thalia
               </a>
               <a href="https://www.orellfuessli.ch/suche?sq=9783658510404" target="_blank" rel="noreferrer" className="text-xs font-bold bg-white text-slate-900 hover:bg-brand-500 hover:text-white px-4 py-2.5 rounded-lg flex items-center transition-all shadow-sm">
                 <ShoppingBag className="h-3.5 w-3.5 mr-2" /> Orell Füssli
               </a>
            </div>
          </div>
          
          <div className="md:col-span-3 md:ml-auto">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">{ui("footer.explore")}</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/framework" className="hover:text-brand-400 transition-colors">{ui("nav.framework")}</Link></li>
              <li><Link to="/blog" className="hover:text-brand-400 transition-colors">{ui("nav.blog")}</Link></li>
              <li><Link to="/author" className="hover:text-brand-400 transition-colors">{ui("nav.author")}</Link></li>
              <li><Link to="/app" className="hover:text-brand-400 transition-colors">{ui("nav.app")}</Link></li>
              <li><Link to="/faq" className="hover:text-brand-400 transition-colors">{ui("nav.faq")}</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">{ui("footer.connect")}</h3>
            <div className="flex space-x-4 mb-8">
              <a href="https://www.linkedin.com/in/sergewolf/" target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors bg-slate-800 p-2.5 rounded-full border border-slate-700 hover:border-brand-500" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:info@quality-tree.com" className="hover:text-brand-400 transition-colors bg-slate-800 p-2.5 rounded-full border border-slate-700 hover:border-brand-500" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-tight">
                © {currentYear} Serge Baumberger.
              </p>
              <p className="text-xs text-slate-600">
                {ui("footer.rights")} Zürich, Schweiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
