import React, { useState, useRef } from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import QualityTreeDiagram from '../components/QualityTreeDiagram';
import ListView from '../components/ListView';
import { rawConfig } from '../data/appToolData';
import { AppToolCell, AppToolLane } from '../types';
import { X, CheckCircle2, AlertCircle, LayoutGrid, List, Leaf, Share2, Upload, Save } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AppTool: React.FC = () => {
  const { t, ui } = useLanguage();
  const [selectedNode, setSelectedNode] = useState<AppToolCell | null>(null);
  const [selectedLane, setSelectedLane] = useState<AppToolLane | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [gardenerMode, setGardenerMode] = useState(false);
  
  // Project State
  const [projectInfo, setProjectInfo] = useState({
    name: "My First Tree",
    owner: "Me"
  });

  // Assessment State: Map of Node ID -> { status, checkedCriteria }
  const [assessments, setAssessments] = useState<Record<string, { status: 'todo' | 'in-progress' | 'done', checkedCriteria: boolean[] }>>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNodeClick = (node: AppToolCell) => {
    setSelectedNode(node);
    setSelectedLane(null);
    setSidebarOpen(true);
  };

  const handleLaneClick = (lane: AppToolLane) => {
    setSelectedLane(lane);
    setSelectedNode(null);
    setSidebarOpen(true);
  };

  const handleSave = () => {
    const dataToSave = {
      projectInfo,
      assessments,
      date: new Date().toISOString(),
      version: "1.0"
    };
    
    const blob = new Blob([JSON.stringify(dataToSave, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quality-tree-${projectInfo.name.replace(/\s+/g, '-').toLowerCase()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = JSON.parse(content);
        
        if (data.projectInfo) setProjectInfo(data.projectInfo);
        if (data.assessments) setAssessments(data.assessments);
        
        alert("Project loaded successfully!");
      } catch (error) {
        console.error("Error loading file:", error);
        alert("Error loading file. Please check the format.");
      }
    };
    reader.readAsText(file);
    // Reset input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const triggerLoad = () => {
    fileInputRef.current?.click();
  };

  const updateAssessment = (nodeId: string, updates: Partial<{ status: 'todo' | 'in-progress' | 'done', checkedCriteria: boolean[] }>) => {
    setAssessments(prev => ({
      ...prev,
      [nodeId]: {
        ...(prev[nodeId] || { status: 'todo', checkedCriteria: [] }),
        ...updates
      }
    }));
  };

  const getAssessment = (nodeId: string) => {
    return assessments[nodeId] || { status: 'todo', checkedCriteria: [] };
  };

  const getMissingPrerequisites = (nodeId: string) => {
    const prerequisites = rawConfig.arrows
      .filter(arrow => arrow.to === nodeId)
      .map(arrow => arrow.from);
    
    return prerequisites.filter(prereqId => {
      const assessment = assessments[prereqId];
      return !assessment || assessment.status !== 'done';
    });
  };

  return (
    <div className="h-[calc(100vh-7rem)] bg-slate-50 flex flex-col overflow-hidden">
      <SEO 
        title={ui("seo.app.title")} 
        description={ui("seo.app.description")}
      />
      
      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleLoad} 
        accept=".json" 
        className="hidden" 
      />
      
      {/* Toolbar / Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-between shadow-sm z-20 gap-4">
        
        {/* Left: Project Info */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="flex flex-col">
            <input 
              type="text" 
              value={projectInfo.name}
              onChange={(e) => setProjectInfo(prev => ({ ...prev, name: e.target.value }))}
              className="bg-transparent border border-transparent hover:border-slate-200 rounded px-1.5 py-0.5 text-sm font-bold text-slate-800 focus:ring-2 focus:ring-brand-500 focus:border-transparent w-48 transition-all placeholder-slate-400"
              placeholder="Project Name"
            />
            <div className="flex items-center gap-1 px-2">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Owner:</span>
              <input 
                type="text" 
                value={projectInfo.owner}
                onChange={(e) => setProjectInfo(prev => ({ ...prev, owner: e.target.value }))}
                className="bg-transparent border-none p-0 text-xs text-slate-500 focus:ring-0 w-24 placeholder-slate-300"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="h-8 w-px bg-slate-200 mx-2 hidden md:block"></div>

          {/* Progress Bar Widget */}
          <div className="hidden md:flex flex-col gap-1 w-48">
            <div className="flex justify-between text-[10px] font-medium text-slate-500 uppercase tracking-wider">
              <span>{Object.values(assessments).filter(a => a.status === 'done').length} / {rawConfig.cells.length} Completed</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
              <div 
                className="h-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${(Object.values(assessments).filter(a => a.status === 'done').length / rawConfig.cells.length) * 100}%` }}
              />
              <div 
                className="h-full bg-amber-400 transition-all duration-500"
                style={{ width: `${(Object.values(assessments).filter(a => a.status === 'in-progress').length / rawConfig.cells.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          
          {/* Search / Filter placeholder (optional, can be added later) */}
          <div className="relative hidden lg:block mr-2">
             <input 
               type="text" 
               placeholder="Suche..." 
               className="pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs focus:ring-2 focus:ring-brand-500 focus:border-transparent w-40 transition-all"
               disabled
             />
             <div className="absolute left-2.5 top-1.5 text-slate-400">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
             </div>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <button 
               onClick={triggerLoad}
               className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-white rounded-md transition-all"
               title="Load Project"
            >
              <Upload className="h-4 w-4" />
            </button>
            <button 
               onClick={handleSave}
               className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-white rounded-md transition-all"
               title="Save Project"
            >
              <Save className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
             <button 
              onClick={() => setGardenerMode(!gardenerMode)}
              className={`p-1.5 rounded-md transition-all ${gardenerMode ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              title={gardenerMode ? "Gardener Mode Active" : "Switch to Gardener Mode"}
            >
              <Leaf className="h-4 w-4" />
            </button>
            <div className="w-px h-4 bg-slate-200 mx-1"></div>
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              title="Grid View"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              title="List View"
            >
              <List className="h-4 w-4" />
            </button>
          </div>

          <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-all ml-2">
            View
          </button>
          <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-all">
            <CheckCircle2 className="h-3 w-3" />
            Assess
          </button>

        </div>
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Main Diagram Area */}
        <div className="flex-1 h-full relative bg-slate-50/50">
          {viewMode === 'grid' ? (
            <QualityTreeDiagram 
              data={rawConfig} 
              onNodeClick={handleNodeClick}
              onLaneClick={handleLaneClick}
              selectedNodeId={selectedNode?.id}
              assessments={assessments}
            />
          ) : (
            <ListView 
              data={rawConfig}
              onNodeClick={handleNodeClick}
              onLaneClick={handleLaneClick}
              selectedNodeId={selectedNode?.id}
            />
          )}
        </div>

        {/* Sidebar Details Panel */}
        <AnimatePresence mode="wait">
          {sidebarOpen && (selectedNode || selectedLane) && (
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 350, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="h-full bg-white border-l border-slate-200 shadow-xl z-30 flex flex-col overflow-hidden"
            >
              <div className="w-[350px] min-w-[350px] flex flex-col h-full">
                {/* Node Details */}
                {selectedNode && (
                  <>
                    <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/50">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          {selectedNode.id}
                        </span>
                        {selectedNode.isRoot && (
                          <span className="bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider">
                            Root
                          </span>
                        )}
                        {getAssessment(selectedNode.id).status === 'done' && (
                          <span className="bg-emerald-100 text-emerald-700 text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">
                            Done
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl font-black text-slate-900 leading-tight">
                        {t(selectedNode.label)}
                      </h2>
                    </div>
                    <button 
                      onClick={() => setSidebarOpen(false)}
                      className="p-2 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-brand-500" />
                        {ui("app.description")}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {t(selectedNode.tooltip)}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        {ui("app.okrs")}
                      </h3>
                      <div className="space-y-3">
                        {selectedNode.acceptanceCriteria.map((criteria, idx) => {
                          const isChecked = getAssessment(selectedNode.id).checkedCriteria[idx] || false;
                          return (
                            <label key={idx} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors group">
                              <div className="relative flex items-center mt-0.5">
                                <input 
                                  type="checkbox" 
                                  checked={isChecked}
                                  onChange={(e) => {
                                    const current = getAssessment(selectedNode.id).checkedCriteria;
                                    const newChecked = [...current];
                                    newChecked[idx] = e.target.checked;
                                    updateAssessment(selectedNode.id, { checkedCriteria: newChecked });
                                  }}
                                  className="peer h-5 w-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" 
                                />
                              </div>
                              <span className={`text-sm group-hover:text-slate-900 ${isChecked ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                                {criteria}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                      <h4 className="font-bold text-indigo-900 mb-2 text-sm">Why is this important?</h4>
                      <p className="text-indigo-700 text-sm leading-relaxed">
                        Achieving this level ensures that your team has a solid foundation for scaling. Without this, further automation efforts will be unstable.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 border-t border-slate-100 bg-slate-50">
                    {getMissingPrerequisites(selectedNode.id).length > 0 && getAssessment(selectedNode.id).status !== 'done' && (
                      <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
                        <strong className="block mb-1 font-bold flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          Prerequisites not met:
                        </strong>
                        <ul className="list-disc pl-4 space-y-0.5">
                          {getMissingPrerequisites(selectedNode.id).map(pid => {
                            const pNode = rawConfig.cells.find(c => c.id === pid);
                            return (
                              <li key={pid}>
                                {pNode ? t(pNode.label) : pid} ({pid})
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                    <div className="flex gap-3">
                      <button 
                        onClick={() => updateAssessment(selectedNode.id, { status: 'done' })}
                        disabled={getMissingPrerequisites(selectedNode.id).length > 0 && getAssessment(selectedNode.id).status !== 'done'}
                        className={`flex-1 py-3 rounded-xl font-bold shadow-lg transition-all active:scale-95 
                          ${getAssessment(selectedNode.id).status === 'done' 
                            ? 'bg-emerald-600 text-white shadow-emerald-200' 
                            : getMissingPrerequisites(selectedNode.id).length > 0
                              ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                              : 'bg-brand-600 hover:bg-brand-700 text-white shadow-brand-200'
                          }`}
                      >
                        {getAssessment(selectedNode.id).status === 'done' 
                          ? 'Completed' 
                          : (getMissingPrerequisites(selectedNode.id).length > 0 ? 'Locked' : 'Mark as Done')}
                      </button>
                      <button 
                        onClick={() => updateAssessment(selectedNode.id, { status: 'in-progress' })}
                        className="flex-1 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 py-3 rounded-xl font-bold transition-all"
                      >
                        In Progress
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Lane Details */}
              {selectedLane && (
                <>
                  <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/50">
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">
                        Domain / Branch
                      </span>
                      <h2 className="text-2xl font-black text-slate-900 leading-tight">
                        {selectedLane.label}
                      </h2>
                    </div>
                    <button 
                      onClick={() => setSidebarOpen(false)}
                      className="p-2 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                        Description
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {selectedLane.details.description}
                      </p>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                      <h4 className="font-bold text-amber-900 mb-2 text-sm flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Why it matters
                      </h4>
                      <p className="text-amber-800 text-sm leading-relaxed">
                        {selectedLane.details.importance}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                        Getting Started
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {selectedLane.details.gettingStarted}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                        Resources
                      </h3>
                      <ul className="space-y-2">
                        {selectedLane.details.resources.map((res, idx) => (
                          <li key={idx}>
                            <a 
                              href={res.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-brand-600 hover:text-brand-700 hover:underline"
                            >
                              <Share2 className="h-3 w-3" />
                              {res.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AppTool;
