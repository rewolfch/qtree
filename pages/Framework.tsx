
import React, { useState } from 'react';
import { branches } from '../data/framework';
import { GitBranch, Microscope, Hammer, Rocket, Bot, Cloud, UserCheck, BarChart, ArrowRight, Search, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BranchDecoration } from '../components/Illustrations';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const iconMap: Record<string, { icon: React.ReactNode, color: string, bg: string }> = {
  "git-branch": { icon: <GitBranch className="h-6 w-6" />, color: "text-indigo-600", bg: "bg-indigo-50" },
  "microscope": { icon: <Microscope className="h-6 w-6" />, color: "text-brand-600", bg: "bg-brand-50" },
  "hammer": { icon: <Hammer className="h-6 w-6" />, color: "text-amber-600", bg: "bg-amber-50" },
  "rocket": { icon: <Rocket className="h-6 w-6" />, color: "text-orange-600", bg: "bg-orange-50" },
  "bot": { icon: <Bot className="h-6 w-6" />, color: "text-cyan-600", bg: "bg-cyan-50" },
  "cloud": { icon: <Cloud className="h-6 w-6" />, color: "text-blue-600", bg: "bg-blue-50" },
  "user-check": { icon: <UserCheck className="h-6 w-6" />, color: "text-emerald-600", bg: "bg-emerald-50" },
  "bar-chart": { icon: <BarChart className="h-6 w-6" />, color: "text-rose-600", bg: "bg-rose-50" },
};

const Framework: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { t, ui } = useLanguage();

  const filteredBranches = branches.filter(branch => 
    t(branch.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
    t(branch.description).toLowerCase().includes(searchQuery.toLowerCase()) ||
    branch.levels.some(l => t(l.title).toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <SEO 
        title={ui("seo.framework.title")}
        description={ui("seo.framework.description")}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-[10px] font-black uppercase tracking-widest mb-6 border border-brand-200">
              Structure & Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Das Framework.</h1>
            <p className="text-xl text-slate-500 leading-relaxed font-light">
              8 Äste, 90 Praktiken. Finden Sie genau die Themenbereiche, die Ihr Team heute voranbringen.
            </p>
          </ScrollReveal>
        </div>

        {/* Search Bar Integration */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="max-w-2xl mx-auto mb-20 relative group">
             <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
               <Search className="h-5 w-5 text-slate-400 group-focus-within:text-brand-600 transition-colors" />
             </div>
             <input 
              type="text" 
              placeholder={ui("framework.search_placeholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-3xl py-6 pl-16 pr-8 text-lg shadow-2xl shadow-slate-200/50 outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all"
             />
             {searchQuery && (
               <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-slate-100 text-slate-500 px-3 py-1 rounded-lg text-xs font-bold animate-fade-in">
                 {filteredBranches.length} {ui("framework.results")}
               </div>
             )}
          </div>
        </ScrollReveal>

        {/* Branch Grid */}
        {filteredBranches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBranches.map((branch, idx) => {
              const visual = iconMap[branch.icon] || { icon: <Zap className="h-6 w-6" />, color: "text-slate-600", bg: "bg-slate-50" };
              
              return (
                <ScrollReveal key={branch.id} animation="fade-up" delay={idx * 100}>
                  <Link 
                    to={`/framework/${branch.id}`}
                    className="group bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-200 hover:shadow-2xl hover:border-brand-500 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
                  >
                    <div className={`absolute -right-6 -top-6 w-40 h-40 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-700 ${visual.color} pointer-events-none`}>
                      <BranchDecoration type={branch.id} className="w-full h-full transform group-hover:rotate-12 transition-transform duration-700" />
                    </div>

                    <div className={`w-16 h-16 ${visual.bg} ${visual.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner`}>
                      {visual.icon}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-brand-700 transition-colors">
                      {t(branch.title)}
                    </h2>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow">
                      {t(branch.description)}
                    </p>
                    
                    <div className="flex items-center text-brand-600 font-black text-[10px] uppercase tracking-widest mt-auto pt-8 border-t border-slate-50">
                      {ui("framework.discover")} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[3rem] border border-slate-100">
             <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-6">
               <Search className="h-8 w-8" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-2">{ui("framework.no_results")}</h3>
             <button onClick={() => setSearchQuery("")} className="mt-6 text-brand-600 font-bold hover:underline">Reset</button>
          </div>
        )}
        
        {/* Footer CTA */}
        <div className="mt-32">
          <ScrollReveal animation="zoom-in" delay={300}>
            <div className="p-16 bg-slate-900 rounded-[4rem] text-center text-white relative overflow-hidden">
               <div className="absolute inset-0 bg-brand-600 opacity-5 blur-[120px] animate-pulse-slow"></div>
               <div className="relative z-10 max-w-3xl mx-auto">
                 <div className="inline-flex items-center gap-2 text-brand-400 font-black uppercase tracking-widest text-xs mb-8">
                   <CheckCircle2 className="h-4 w-4" /> Ready for Impact
                 </div>
                 <h3 className="text-4xl font-black mb-8">{ui("framework.cta_title")}</h3>
                 <p className="text-slate-400 text-lg mb-12 leading-relaxed">{ui("framework.cta_desc")}</p>
                 <Link to="/app" className="inline-flex items-center bg-brand-600 hover:bg-brand-500 text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl hover:-translate-y-1 hover:shadow-brand-900/50">
                    {ui("framework.cta_btn")} <ArrowRight className="ml-3 h-6 w-6" />
                 </Link>
               </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Framework;
