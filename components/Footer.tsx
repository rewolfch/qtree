
import React from 'react';
import { Linkedin, Mail, ShoppingCart, BookOpen, TreeDeciduous, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <TreeDeciduous className="h-6 w-6 text-brand-500" />
              <h3 className="text-white text-xl font-bold tracking-tight">Quality Tree Framework</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Der Quality Tree ist ein strategisches Modell für Softwarequalität, das Teams hilft, 
              Komplexität zu ordnen, Automatisierung zu skalieren und eine nachhaltige Qualitätskultur zu etablieren.
              Entwickelt in der Praxis, verfeinert für die Zukunft.
            </p>
            
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Das Buch bestellen</h4>
            <div className="flex flex-wrap gap-3 mb-6">
               <a href="https://www.amazon.de/Das-Quality-Tree-Framework-Automatisierung/dp/3658510404" target="_blank" rel="noreferrer" className="text-xs font-bold bg-white text-slate-900 hover:bg-brand-500 hover:text-white px-4 py-2.5 rounded-lg flex items-center transition-all shadow-sm">
                 <ShoppingCart className="h-3.5 w-3.5 mr-2" /> Amazon
               </a>
               <a href="https://link.springer.com/book/9783658510404" target="_blank" rel="noreferrer" className="text-xs font-bold bg-slate-800 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg flex items-center transition-colors border border-slate-700 hover:border-blue-500 shadow-sm">
                 <BookOpen className="h-3.5 w-3.5 mr-2" /> Springer
               </a>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Globe className="h-3 w-3" /> Weitere Anbieter
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
                <a href="https://www.exlibris.ch/de/buecher-buch/deutschsprachige-buecher/serge-baumberger/das-quality-tree-framework/id/9783658510404/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-brand-400 transition-colors">Ex Libris (CH)</a>
                <a href="https://www.schreibers.ch/detail/ISBN-9783658510404/Baumberger-Serge/Das-Quality-Tree-Framework" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-brand-400 transition-colors">Schreibers (CH)</a>
                <a href="https://www.lehmanns.de/shop/mathematik-informatik/87033519-9783658510404-das-quality-tree-framework" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-brand-400 transition-colors">Lehmanns (DE)</a>
                <a href="https://www.adlibris.com/sv/bok/das-quality-tree-framework-9783658510404" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-brand-400 transition-colors">Adlibris (SE)</a>
                <a href="https://www.brownsbfs.co.uk/Product/Baumberger-Serge/Das-Quality-Tree-Framework/9783658510404" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-brand-400 transition-colors">Browns (UK)</a>
              </div>
            </div>
          </div>
          
          {/* Links Sections */}
          <div className="md:col-span-3 md:ml-auto">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/framework" className="hover:text-brand-400 transition-colors">Das Framework</Link></li>
              <li><Link to="/blog" className="hover:text-brand-400 transition-colors">Insights & Blog</Link></li>
              <li><Link to="/author" className="hover:text-brand-400 transition-colors">Über Serge Baumberger</Link></li>
              <li><Link to="/app" className="hover:text-brand-400 transition-colors">Assessment App</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Connect</h3>
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
                All rights reserved. Zürich, Schweiz.
              </p>
              <p className="text-[10px] text-slate-700 mt-4 leading-tight">
                Die im Quality Tree Framework beschriebenen Methoden und Strukturen sind geistiges Eigentum des Autors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
