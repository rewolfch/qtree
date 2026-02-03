
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, TreeDeciduous, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path 
      ? 'text-brand-700 font-semibold bg-brand-50 rounded-lg px-3 py-2' 
      : 'text-slate-600 hover:text-brand-700 hover:bg-slate-50 rounded-lg px-3 py-2 transition-all';
  };

  const BASE_URL = "https://www.quality-tree.com/#";

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href={`${BASE_URL}/`} className="flex-shrink-0 flex items-center gap-2 group">
              <div className="bg-brand-600 p-1.5 rounded-lg group-hover:bg-brand-700 transition-colors shadow-sm">
                 <TreeDeciduous className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">Quality Tree</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <a href={`${BASE_URL}/`} className={isActive('/')}>Home</a>
            <a href={`${BASE_URL}/framework`} className={isActive('/framework')}>Framework</a>
            <a href={`${BASE_URL}/blog`} className={isActive('/blog')}>Blog</a>
            <a href={`${BASE_URL}/author`} className={isActive('/author')}>Author</a>
            <a href={`${BASE_URL}/app`} className={isActive('/app')}>QTF App</a>
            
            <div className="ml-4 pl-4 border-l border-slate-200 flex items-center gap-3">
               <a 
                href="https://www.amazon.de/Das-Quality-Tree-Framework-Automatisierung/dp/3658510404" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-700 hover:text-brand-600 font-medium text-sm flex items-center"
              >
                <BookOpen className="h-4 w-4 mr-1.5" /> Buch
              </a>
              <a 
                href="https://sn.pub/97r1i7" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Kurs
              </a>
            </div>
          </div>

          <div className="flex items-center md:hidden">
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
            <a href={`${BASE_URL}/`} onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">Home</a>
            <a href={`${BASE_URL}/framework`} onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">Framework</a>
            <a href={`${BASE_URL}/blog`} onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">Blog</a>
            <a href={`${BASE_URL}/author`} onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">Author</a>
            <a href={`${BASE_URL}/app`} onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg">QTF App</a>
            <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
              <a href="https://www.amazon.de/Das-Quality-Tree-Framework-Automatisierung/dp/3658510404" target="_blank" rel="noreferrer" className="flex justify-center items-center px-3 py-3 text-base font-medium text-slate-700 bg-slate-50 rounded-lg border border-slate-200">
                Buch
              </a>
              <a href="https://sn.pub/97r1i7" target="_blank" rel="noreferrer" className="flex justify-center items-center px-3 py-3 text-base font-medium text-white bg-brand-600 rounded-lg shadow-sm">
                Kurs
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
