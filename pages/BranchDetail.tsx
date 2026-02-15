
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { branches } from '../data/framework';
import { 
  ArrowLeft, CheckCircle2, ArrowRight, 
  GitBranch, Microscope, Hammer, Rocket, Bot, Cloud, UserCheck, BarChart, Zap
} from 'lucide-react';
import { BranchDecoration, LeafIcon } from '../components/Illustrations';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { Level } from '../types';

interface LevelCardProps {
  level: Level;
  visual: { 
    icon: any; 
    color: string; 
    bg: string; 
    border: string; 
    ring: string 
  };
  index: number;
}

// Helper component for individual scroll animations
const LevelCard: React.FC<LevelCardProps> = ({ level, visual, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div 
      ref={domRef}
      className={`bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative overflow-hidden hover:shadow-xl hover:border-${visual.color.split('-')[1]}-200 transition-all duration-700 ease-out transform group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }} 
    >
      <div className={`absolute top-0 left-0 w-1.5 h-full ${visual.bg.replace('bg-', 'bg-')} opacity-50 group-hover:opacity-100 group-hover:${visual.color.replace('text-', 'bg-')} transition-all`}></div>
      
      <div className="flex flex-col md:flex-row md:items-start gap-6 pl-2">
        <div className="flex-shrink-0">
          <span className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${visual.bg} ${visual.color} font-bold text-lg shadow-sm border ${visual.border}`}>
            {level.id}
          </span>
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-slate-900">{t(level.title)}</h3>
          </div>
          <p className="text-slate-600 text-base mb-4 leading-relaxed">{t(level.description)}</p>
          
          {level.tools && level.tools.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {level.tools.map((tool: string) => (
                <span key={tool} className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide bg-slate-100 text-slate-600 border border-slate-200">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex-shrink-0 pt-1">
          <CheckCircle2 className={`h-6 w-6 text-slate-200 group-hover:${visual.color} transition-colors`} />
        </div>
      </div>
    </div>
  );
};

const BranchDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, ui } = useLanguage();
  const branch = branches.find(b => b.id === id);

  if (!branch) {
    return (
      <div className="p-12 text-center">
        <SEO title="Branch Not Found" description="The requested framework branch could not be found." />
        Branch not found. <Link to="/framework">Go back</Link>
      </div>
    );
  }

  const visualConfig: Record<string, { icon: any, color: string, bg: string, border: string, ring: string }> = {
    "git-branch": { icon: GitBranch, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100", ring: "ring-indigo-500" },
    "microscope": { icon: Microscope, color: "text-brand-600", bg: "bg-brand-50", border: "border-brand-100", ring: "ring-brand-500" },
    "hammer": { icon: Hammer, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100", ring: "ring-amber-500" },
    "rocket": { icon: Rocket, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100", ring: "ring-orange-500" },
    "bot": { icon: Bot, color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-100", ring: "ring-cyan-500" },
    "cloud": { icon: Cloud, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100", ring: "ring-blue-500" },
    "user-check": { icon: UserCheck, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100", ring: "ring-emerald-500" },
    "bar-chart": { icon: BarChart, color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100", ring: "ring-rose-500" },
  };

  const visual = visualConfig[branch.icon] || { icon: Zap, color: "text-slate-600", bg: "bg-slate-50", border: "border-slate-100", ring: "ring-slate-500" };
  const IconComponent = visual.icon;

  const branchTitle = t(branch.title);
  const branchDesc = t(branch.description);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Framework",
      "item": "https://www.quality-tree.com/#/framework"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": branchTitle,
      "item": `https://www.quality-tree.com/#/framework/${branch.id}`
    }]
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 relative overflow-hidden">
      <SEO 
        title={`${branchTitle} - Framework Dimension`} 
        description={branchDesc}
        schema={breadcrumbSchema}
      />

      <div className={`absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.07] pointer-events-none translate-x-1/4 -translate-y-1/4 ${visual.color}`}>
         <BranchDecoration type={branch.id} className="w-full h-full" />
      </div>
      <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.05] pointer-events-none -translate-x-1/4 translate-y-1/4 rotate-180 ${visual.color}`}>
         <BranchDecoration type={branch.id} className="w-full h-full" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link to="/framework" className={`inline-flex items-center text-slate-500 hover:${visual.color} mb-8 font-medium transition-colors group`}>
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> {ui("branch.back")}
        </Link>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 mb-12 relative overflow-hidden animate-fade-in-up">
          <div className="flex items-center gap-6 mb-6 relative z-10">
             <div className={`p-4 ${visual.bg} ${visual.color} rounded-2xl shadow-inner`}>
                <IconComponent className="h-10 w-10" />
             </div>
             <div>
                <span className={`inline-block mb-2 text-xs font-black uppercase tracking-widest ${visual.color} opacity-80`}>
                  {ui("branch.dimension")}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">{branchTitle}</h1>
             </div>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed relative z-10 pl-2 border-l-4 border-slate-100">
            {branchDesc}
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-8 px-2 flex items-center gap-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
           <span className={`w-8 h-1 ${visual.bg.replace('bg-', 'bg-')} rounded-full ${visual.color.replace('text-', 'bg-')}`}></span>
           {ui("branch.levels")}
        </h2>

        {/* Levels List */}
        <div className="space-y-6">
          {branch.levels.map((level, idx) => (
            <LevelCard key={level.id} level={level} visual={visual} index={idx} />
          ))}
        </div>
        
        {/* Footer CTA */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
           <Link to="/app" className={`inline-flex items-center ${visual.color.replace('text-', 'bg-')} text-white px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg hover:-translate-y-1 shadow-${visual.color.split('-')[1]}-200`}>
              {ui("branch.cta")} <ArrowRight className="ml-2 h-5 w-5" />
           </Link>
        </div>
      </div>
    </div>
  );
};

export default BranchDetail;
