import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 w-full bg-white/80 backdrop-blur-sm border-t border-slate-100 py-3 z-50">
      <div className="max-w-[95%] mx-auto flex justify-between items-center text-[10px] text-slate-400 uppercase tracking-widest font-medium">
        <div className="flex items-center gap-4">
          <span>&copy; {year} Serge Baumberger</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="hidden sm:inline">Zürich, Schweiz</span>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/sergewolf/" target="_blank" rel="noreferrer" className="hover:text-brand-600 transition-colors">
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          <a href="mailto:serge.baumberger@infometis.ch" className="hover:text-brand-600 transition-colors">
            <Mail className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
