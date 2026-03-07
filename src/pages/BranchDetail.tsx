import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { branches } from '../data/framework';
import { useLanguage } from '../contexts/LanguageContext';
import DashboardLayout from '../components/DashboardLayout';
import { 
  GitBranch, Microscope, Package, Rocket, Bot, Database, UserCheck, ClipboardList, 
  ArrowRight, BarChart3, Target, BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  "git-branch": <GitBranch className="h-8 w-8" />,
  "microscope": <Microscope className="h-8 w-8" />,
  "package": <Package className="h-8 w-8" />,
  "rocket": <Rocket className="h-8 w-8" />,
  "bot": <Bot className="h-8 w-8" />,
  "database": <Database className="h-8 w-8" />,
  "user-check": <UserCheck className="h-8 w-8" />,
  "clipboard-list": <ClipboardList className="h-8 w-8" />,
};

const BranchDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  
  const branch = branches.find(b => b.id === id);

  if (!branch) {
    return (
      <DashboardLayout>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-slate-900">Branch not found</h2>
          <Link to="/framework" className="text-brand-600 hover:underline mt-4 inline-block">
            Return to Framework
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  const BranchIcon = iconMap[branch.icon] || <GitBranch className="h-8 w-8" />;

  return (
    <DashboardLayout
      title={t(branch.title)}
      subtitle={t(branch.description)}
      actions={
        <Link 
          to="/app" 
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg hover:shadow-brand-500/30"
        >
          Open in App Tool <ArrowRight className="h-4 w-4" />
        </Link>
      }
      rightSidebar={
        <>
          {/* Quick Stats Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BarChart3 className="h-4 w-4" /> Branch Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                <span className="text-slate-600 text-sm font-medium">Maturity Levels</span>
                <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded text-xs">5</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                <span className="text-slate-600 text-sm font-medium">Key Capabilities</span>
                <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded text-xs">
                  {branch.levels.length * 3} {/* Estimate */}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 text-sm font-medium">Avg. Implementation</span>
                <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded text-xs">3-6 mo</span>
              </div>
            </div>
          </div>

          {/* Resources Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="block text-sm text-brand-600 hover:text-brand-800 hover:underline font-medium truncate">
                  Best Practices Guide: {t(branch.title)}
                </a>
              </li>
              <li>
                <a href="#" className="block text-sm text-brand-600 hover:text-brand-800 hover:underline font-medium truncate">
                  Assessment Template (XLSX)
                </a>
              </li>
              <li>
                <a href="#" className="block text-sm text-brand-600 hover:text-brand-800 hover:underline font-medium truncate">
                  Case Study: Enterprise Scale
                </a>
              </li>
            </ul>
          </div>
        </>
      }
    >
      {/* Hero / Intro */}
      <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          {React.cloneElement(BranchIcon as React.ReactElement, { className: "w-64 h-64 text-brand-900" })}
        </div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wide mb-6 border border-brand-100">
            Core Domain
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why this matters</h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl text-lg">
            {t(branch.description)} This domain is critical for establishing a stable, scalable, and high-quality software delivery lifecycle. 
            Mastering {t(branch.title)} enables teams to move faster with higher confidence.
          </p>
        </div>
      </div>

      {/* Levels Grid */}
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Target className="h-5 w-5 text-brand-600" /> Maturity Progression
      </h3>
      
      <div className="space-y-6">
        {branch.levels.map((level, index) => (
          <motion.div 
            key={level.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-slate-200 to-slate-100 group-hover:from-brand-500 group-hover:to-brand-400 transition-colors"></div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              {/* Level Indicator */}
              <div className="shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-brand-50 group-hover:border-brand-100 transition-colors">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Level</span>
                <span className="text-2xl font-black text-slate-900 group-hover:text-brand-700">{level.id}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                  {t(level.title)}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {t(level.description)}
                </p>
              </div>

              {/* Action */}
              <div className="shrink-0">
                <Link 
                  to={`/framework/${branch.id}/level/${level.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-brand-600 transition-colors"
                >
                  View Details <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default BranchDetail;

