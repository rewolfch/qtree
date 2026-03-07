import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { branches } from '../data/framework';
import { rawConfig } from '../data/appToolData';
import { useLanguage } from '../contexts/LanguageContext';
import DashboardLayout from '../components/DashboardLayout';
import { 
  CheckCircle2, Target, Clock, BookOpen, 
  Wrench, ListChecks
} from 'lucide-react';
import { motion } from 'framer-motion';

const LevelDetail: React.FC = () => {
  const { branchId, levelId } = useParams<{ branchId: string; levelId: string }>();
  const { t } = useLanguage();
  
  const branch = branches.find(b => b.id === branchId);
  const level = branch?.levels.find(l => l.id.toString() === levelId);

  if (!branch || !level) {
    return (
      <DashboardLayout>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-slate-900">Level not found</h2>
          <Link to="/framework" className="text-brand-600 hover:underline mt-4 inline-block">
            Return to Framework
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  // Find corresponding lane in appToolData
  // This is a heuristic match based on label/id similarity or order
  // For now, let's try to match by index if possible, or string inclusion
  const branchIndex = branches.findIndex(b => b.id === branchId);
  const lane = rawConfig.lanes[branchIndex]; // Assuming order matches framework.ts

  // Find cells for this branch (lane) and level (column)
  // Level ID maps to Column ID? framework level 1 = column 1?
  // In appToolData, cells are R{row}C{col}.
  // Lane has startRow and endRow.
  // So we look for cells where row is in [startRow, endRow] and col == levelId
  // Note: levelId is 1-based index from framework.ts
  // In appToolData, C1 is likely Level 1.
  
  const targetCol = parseInt(levelId || "0");
  
  const cells = rawConfig.cells.filter(cell => {
    const rowMatch = cell.id.match(/R(\d+)/);
    const colMatch = cell.id.match(/C(\d+)/);
    if (!rowMatch || !colMatch) return false;
    
    const row = parseInt(rowMatch[1]);
    const col = parseInt(colMatch[1]);
    
    return lane && row >= lane.startRow && row <= lane.endRow && col === targetCol;
  });

  return (
    <DashboardLayout
      title={`${t(branch.title)}: Level ${level.id}`}
      subtitle={t(level.title)}
      rightSidebar={
        <>
          {/* Progress / Checklist */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <ListChecks className="h-4 w-4" /> Implementation Checklist
            </h3>
            <div className="space-y-3">
              {cells.length > 0 ? (
                cells.map(cell => (
                  <div key={cell.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full border-2 border-slate-200 flex items-center justify-center">
                      {/* Checkbox placeholder */}
                    </div>
                    <span className="text-sm text-slate-600 font-medium leading-snug">
                      {t(cell.label)}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-400 italic">No specific practices defined for this level yet.</p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Related
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to={`/framework/${branchId}`} className="block text-sm text-brand-600 hover:text-brand-800 hover:underline font-medium truncate">
                  Back to {t(branch.title)}
                </Link>
              </li>
              {parseInt(levelId || "0") < 5 && (
                <li>
                  <Link to={`/framework/${branchId}/level/${parseInt(levelId || "0") + 1}`} className="block text-sm text-brand-600 hover:text-brand-800 hover:underline font-medium truncate">
                    Next Level: Level {parseInt(levelId || "0") + 1}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </>
      }
    >
      {/* Level Description */}
      <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm border border-slate-100">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wide mb-6 border border-brand-100">
          Maturity Level {level.id}
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
        <p className="text-slate-600 leading-relaxed text-lg">
          {t(level.description)}
        </p>
      </div>

      {/* Practices (Leaves) */}
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Target className="h-5 w-5 text-brand-600" /> Key Practices & Capabilities
      </h3>

      <div className="space-y-8">
        {cells.length > 0 ? (
          cells.map((cell, index) => (
            <motion.div 
              key={cell.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all"
            >
              <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {t(cell.label)}
                    </h4>
                    <p className="text-slate-500 leading-relaxed">
                      {t(cell.tooltip)}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-400 font-mono text-xs font-bold border border-slate-100">
                      {cell.id}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-slate-100 w-full"></div>

                {/* Structured Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Success Factors / Acceptance Criteria */}
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Success Factors
                    </h5>
                    <ul className="space-y-3">
                      {cell.acceptanceCriteria?.map((criteria, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                          <span className="leading-relaxed">{criteria}</span>
                        </li>
                      )) || <li className="text-slate-400 italic text-sm">No specific criteria defined.</li>}
                    </ul>
                  </div>

                  {/* Tools & Implementation (Mocked/Placeholder for now as per request for structure) */}
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-blue-500" /> Recommended Tools
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {['Jira', 'GitHub', 'GitLab', 'Jenkins'].map(tool => (
                          <span key={tool} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-amber-500" /> Time to Implement
                      </h5>
                      <p className="text-sm text-slate-600">
                        Typically takes <span className="font-bold text-slate-900">2-4 weeks</span> for initial setup.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-200 border-dashed">
            <p className="text-slate-500">No specific practices defined for this level in the current configuration.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default LevelDetail;
