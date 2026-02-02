
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { branches } from '../data/framework';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { LeafIcon, GrowthBackground } from '../components/Illustrations';
import SEO from '../components/SEO';

const BranchDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const branch = branches.find(b => b.id === id);

  if (!branch) {
    return (
      <div className="p-12 text-center">
        <SEO title="Branch Not Found" description="The requested framework branch could not be found." />
        Branch not found. <Link to="/framework">Go back</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 relative overflow-hidden">
      <SEO 
        title={`${branch.title} - Framework Dimension`} 
        description={branch.description}
      />

      {/* Background Illustrations */}
      <GrowthBackground className="text-brand-600 top-0 left-0 w-[800px] h-[800px] -translate-x-1/3 -translate-y-1/3" />
      <GrowthBackground className="text-brand-600 bottom-0 right-0 w-[600px] h-[600px] translate-x-1/3 translate-y-1/3 rotate-180" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link to="/framework" className="inline-flex items-center text-slate-500 hover:text-brand-600 mb-8 font-medium transition-colors group">
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Zurück zur Übersicht
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="flex items-center gap-4 mb-6 relative z-10">
             <div className="p-3 bg-brand-50 rounded-2xl text-brand-600">
                <LeafIcon className="h-10 w-10" />
             </div>
             <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{branch.title}</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed relative z-10">{branch.description}</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-8 px-2 flex items-center gap-3">
           <span className="w-8 h-1 bg-brand-500 rounded-full"></span>
           Reifestufen (Levels)
        </h2>

        <div className="space-y-8">
          {branch.levels.map((level, idx) => (
            <div 
              key={level.id} 
              className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 relative overflow-hidden hover:shadow-xl hover:border-brand-100 transition-all group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-500 opacity-20 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 font-bold text-lg shadow-inner">
                    {level.id}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900">{level.title}</h3>
                    <LeafIcon className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:text-brand-400 transition-all text-slate-300" />
                  </div>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">{level.description}</p>
                  
                  {level.tools && level.tools.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-50">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider self-center mr-2">Tools:</span>
                      {level.tools.map(tool => (
                        <span key={tool} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="flex-shrink-0 pt-1">
                  <CheckCircle2 className="h-8 w-8 text-slate-200 group-hover:text-brand-500 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <Link to="/app" className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-600 transition-all shadow-lg hover:-translate-y-1">
              Assessment starten <ArrowRight className="ml-2 h-5 w-5" />
           </Link>
        </div>
      </div>
    </div>
  );
};

export default BranchDetail;
