
import React, { useState, useEffect, useRef, useLayoutEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { rawConfig } from '../data/appToolData';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';

const ConnectingLines = ({ nodeRefs, hoveredNode, containerRef }: any) => {
  const [lines, setLines] = useState<React.ReactElement[]>([]);

  useLayoutEffect(() => {
    const updateGraph = () => {
       const newLines: React.ReactElement[] = [];
       rawConfig.arrows.forEach((arrow: any) => {
           const startEl = nodeRefs.current.get(arrow.from);
           const endEl = nodeRefs.current.get(arrow.to);
           
           if (startEl && endEl) {
               const startX = startEl.offsetLeft + startEl.offsetWidth / 2;
               const startY = startEl.offsetTop + startEl.offsetHeight / 2;
               const endX = endEl.offsetLeft + endEl.offsetWidth / 2;
               const endY = endEl.offsetTop + endEl.offsetHeight / 2;
               
               const isHovered = hoveredNode === arrow.from || hoveredNode === arrow.to;
               
               const deltaX = endX - startX;
               const midX = startX + (deltaX / 2);
               
               const d = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
               
               newLines.push(
                   <path 
                       key={`${arrow.from}-${arrow.to}`}
                       d={d}
                       fill="none"
                       stroke={isHovered ? "#059669" : "#cbd5e1"}
                       strokeWidth={isHovered ? 2.5 : 1.5}
                       className="transition-all duration-300 ease-in-out"
                       style={{ opacity: isHovered ? 1 : 0.6, zIndex: isHovered ? 10 : 0 }}
                   />
               );
           }
       });
       setLines(newLines);
    };
    updateGraph();
    window.addEventListener('resize', updateGraph);
    const observer = new ResizeObserver(updateGraph);
    if(containerRef.current) observer.observe(containerRef.current);
    return () => { window.removeEventListener('resize', updateGraph); observer.disconnect(); }
  }, [nodeRefs, hoveredNode, containerRef]);

  return <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">{lines}</svg>;
};

const Hero = ({ onExplore, progress, nodeCount, completedCount, projectData, setProjectData, ui }: any) => (
    <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-800 border-b border-emerald-100 dark:border-slate-700 py-16 px-4 md:px-8 text-center print:hidden">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            <span className="text-emerald-600">Quality Tree</span> {ui("app.welcome")}
        </h1>
        
        <div className="max-w-md mx-auto bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 mb-8 transform transition-all hover:scale-105">
            <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium">
                <span>{ui("app.score")}</span>
                <span>{progress}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3 mb-4 overflow-hidden">
                <div className="bg-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-400">
                <span>{completedCount} / {nodeCount} {ui("app.leaves")}</span>
                <i className="fas fa-leaf text-emerald-400"></i>
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
            <input 
                type="text" 
                placeholder={ui("app.project_name")}
                value={projectData.name}
                onChange={(e) => setProjectData({...projectData, name: e.target.value})}
                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
            />
            <input 
                type="text" 
                placeholder={ui("app.owner")}
                value={projectData.owner}
                onChange={(e) => setProjectData({...projectData, owner: e.target.value})}
                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
            />
        </div>

        <button onClick={onExplore} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-emerald-200 dark:shadow-none transition-all hover:-translate-y-1 active:scale-95">
            {ui("app.start")}
        </button>
    </div>
);

const WarningModal = ({ data, onClose, nodes }: any) => {
    if (!data.isOpen) return null;
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-md w-full p-6 animate-scale-in border-l-4 border-amber-500">
                <div className="flex items-start mb-4">
                    <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-full mr-3 text-amber-600">
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Prerequisites Missing</h3>
                    </div>
                </div>
                <ul className="list-disc pl-10 mb-6 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                    {data.missingNodes.map((id: string) => {
                        const n = nodes.find((x: any) => x.id === id);
                        return <li key={id}>{n ? n.title : id}</li>;
                    })}
                </ul>
                <div className="flex justify-end">
                    <button onClick={onClose} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg font-medium transition-colors">
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

const DetailPopup = ({ node, onClose, onStatusChange, onOkrToggle, nodeState, isGardener, isMobile, allNodes, userState, onNavigate, branches, ui }: any) => {
    const [isNaInputOpen, setIsNaInputOpen] = useState(false);
    const [naReason, setNaReason] = useState('');

    if (!node) return null;
    const branchName = branches.find((b: any) => b.id === node.branchId)?.name?.toUpperCase();

    const getPrerequisites = (nodeId: string) => {
        if (!rawConfig || !rawConfig.arrows) return [];
        return rawConfig.arrows
            .filter((a: any) => a.to === nodeId)
            .map((a: any) => {
                 const prereqNode = allNodes.find((n: any) => n.id === a.from);
                 const status = userState[a.from]?.status || 'locked';
                 return { ...prereqNode, status };
            })
            .filter((n: any) => n);
    };

    const prerequisites = getPrerequisites(node.id);
    const hasMissingPrereqs = prerequisites.some((p: any) => p.status !== 'completed' && p.status !== 'not-relevant');
    const isNA = nodeState.status === 'not-relevant';

    const handleSaveNa = () => {
        if (!naReason.trim()) return;
        onStatusChange(node.id, 'not-relevant', { comment: naReason, timestamp: new Date().toISOString() });
        setIsNaInputOpen(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className={`bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-scale-in flex flex-col ${isMobile ? 'h-[90vh]' : 'max-h-[90vh] h-[800px]'}`} onClick={e => e.stopPropagation()}>
                <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 relative shrink-0">
                     <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"><i className="fas fa-times text-xl"></i></button>
                     <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                         <span>{ui("app.level")} {node.level}</span>
                         <span>•</span>
                         <span>{branchName}</span>
                     </div>
                     <h2 className={`text-3xl md:text-4xl font-serif font-bold ${isNA ? 'text-slate-400 dark:text-slate-500 line-through decoration-2' : 'text-slate-900 dark:text-white'} leading-tight`}>{node.title}</h2>
                     {isNA && <div className="inline-block mt-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-bold uppercase rounded-full">{ui("app.not_relevant")}</div>}
                </div>
                 
                 <div className="p-6 md:p-8 overflow-y-auto grow bg-white dark:bg-slate-900">
                     {isNaInputOpen ? (
                         <div className="animate-fade-in">
                             <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{ui("app.reason_na")}</h4>
                             <textarea 
                                 className="w-full p-4 border border-slate-300 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none min-h-[150px]"
                                 placeholder={ui("app.reason_placeholder")}
                                 value={naReason}
                                 onChange={(e) => setNaReason(e.target.value)}
                                 autoFocus
                             ></textarea>
                             <div className="flex gap-3 mt-4 justify-end">
                                 <button onClick={() => setIsNaInputOpen(false)} className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors">{ui("app.cancel")}</button>
                                 <button onClick={handleSaveNa} className="px-6 py-2 bg-slate-800 hover:bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold rounded-lg transition-colors">{ui("app.confirm")}</button>
                             </div>
                         </div>
                     ) : (
                         <>
                             <div className="mb-8">
                                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                      <i className="fas fa-align-left text-slate-400"></i> {ui("app.description")}
                                  </h4>
                                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                      {node.description}
                                  </div>
                             </div>

                             {prerequisites.length > 0 && (
                                 <div className="mb-8">
                                     <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                         <i className="fas fa-sitemap text-slate-400"></i> {ui("app.prerequisites")}
                                     </h4>
                                     <div className="flex flex-wrap gap-2">
                                         {prerequisites.map((p: any) => {
                                             const isPDone = p.status === 'completed';
                                             return (
                                                 <button 
                                                     key={p.id}
                                                     onClick={() => onNavigate(p.id)}
                                                     className={`px-3 py-2 rounded-lg text-sm font-medium border flex items-center gap-2 transition-colors ${isPDone ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-amber-50 border-amber-200 text-amber-700'}`}
                                                 >
                                                     {isPDone ? <i className="fas fa-check-circle"></i> : <i className="fas fa-exclamation-circle"></i>}
                                                     {p.title}
                                                 </button>
                                             );
                                         })}
                                     </div>
                                 </div>
                             )}
                             
                             {(node.acceptanceCriteria && node.acceptanceCriteria.length > 0) && (
                                 <div className={`mb-8 ${isNA ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
                                     <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                         <i className="fas fa-list-check text-slate-400"></i> {ui("app.okrs")}
                                     </h4>
                                     <div className="space-y-3">
                                          {node.acceptanceCriteria.map((criterion: string, idx: number) => {
                                              const isChecked = nodeState.checkedOkrs?.includes(idx);
                                              return (
                                                  <div key={idx} 
                                                       onClick={() => !isNA && onOkrToggle(idx)}
                                                       className={`p-4 rounded-xl border flex items-start gap-4 cursor-pointer transition-all hover:shadow-md ${isChecked ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`}>
                                                      <div className={`mt-1 w-6 h-6 rounded border flex items-center justify-center shrink-0 transition-colors ${isChecked ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-300'}`}>
                                                          {isChecked && <i className="fas fa-check text-xs"></i>}
                                                      </div>
                                                      <span className={`text-base ${isChecked ? 'text-emerald-900' : 'text-slate-600'}`}>{criterion}</span>
                                                  </div>
                                              );
                                          })}
                                     </div>
                                 </div>
                             )}
                         </>
                     )}
                 </div>

                 {!isNaInputOpen && (
                     <div className="p-4 md:p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex flex-col md:flex-row gap-4">
                         <button 
                             onClick={() => setIsNaInputOpen(true)}
                             className={`md:flex-none py-3 px-4 rounded-xl font-medium text-sm border border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50 dark:hover:text-slate-300 dark:hover:bg-slate-800 transition-colors ${isNA ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300' : ''}`}
                         >
                             {ui("app.not_relevant")}
                         </button>
                         <div className="flex-1 flex gap-4">
                             <button 
                                 onClick={() => onStatusChange(node.id, 'in-progress')}
                                 className={`flex-1 py-3 px-6 rounded-xl font-bold text-base border-2 transition-all flex items-center justify-center gap-2 ${nodeState.status === 'in-progress' ? 'bg-amber-50 border-amber-500 text-amber-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}
                             >
                                 <i className="fas fa-hourglass-half"></i> {ui("app.in_progress")}
                             </button>
                             <button 
                                 onClick={() => onStatusChange(node.id, 'completed')}
                                 className={`flex-1 py-3 px-6 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 ${nodeState.status === 'completed' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md'} ${(hasMissingPrereqs) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                 disabled={hasMissingPrereqs}
                             >
                                 <i className="fas fa-check-circle"></i> {ui("app.done")}
                             </button>
                         </div>
                     </div>
                 )}
            </div>
        </div>
    );
};

const AppTool: React.FC = () => {
  const { t, ui } = useLanguage();
  
  const levels = Array.from({ length: 9 }, (_, i) => ({ id: i + 1, label: `${ui("app.level")} ${i + 1}` }));
  const icons = ["fa-cogs", "fa-vial", "fa-cube", "fa-rocket", "fa-robot", "fa-server", "fa-user-check", "fa-chart-line"];

  const appBranches = rawConfig.lanes.map((lane: any, index: number) => ({
      id: `branch-${index}`,
      name: lane.label,
      icon: icons[index] || "fa-circle",
      startRow: lane.startRow,
      endRow: lane.endRow,
      details: {
          description: t(lane.details.description),
          importance: t(lane.details.importance),
          gettingStarted: t(lane.details.gettingStarted),
          resources: lane.details.resources
      }
  }));

  const appNodes = rawConfig.cells.map((cell: any) => {
      const match = cell.id.match(/R(\d+)C(\d+)/);
      let row = 0, col = 0;
      if (match) {
          row = parseInt(match[1]);
          col = parseInt(match[2]);
      }
      const branch = appBranches.find(b => row >= b.startRow && row <= b.endRow);
      return {
          id: cell.id,
          title: t(cell.label), 
          description: t(cell.tooltip),
          acceptanceCriteria: cell.acceptanceCriteria || [],
          level: col - 1,
          branchId: branch ? branch.id : null,
          row: row,
          col: col,
          ...cell
      };
  }).filter(n => n.branchId !== null);

  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [isGardenerMode, setIsGardenerMode] = useState(false);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [userState, setUserState] = useState<any>({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [warningData, setWarningData] = useState<any>({ isOpen: false, missingNodes: [] });
  const [projectData, setProjectData] = useState({ name: '', owner: '' });
  
  const [isMobile, setIsMobile] = useState(false);

  const gridRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef(new Map());
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('qtree-theme');
    if (savedTheme === 'dark') { setIsDarkMode(true); document.documentElement.classList.add('dark'); }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('qtree-state');
    if (saved) setUserState(JSON.parse(saved));
    const savedProject = localStorage.getItem('qtree-project');
    if (savedProject) setProjectData(JSON.parse(savedProject));
  }, []);

  useEffect(() => {
    localStorage.setItem('qtree-state', JSON.stringify(userState));
    localStorage.setItem('qtree-project', JSON.stringify(projectData));
  }, [userState, projectData]);

  const scrollToTree = () => {
    const target = isMobile ? document.getElementById('mobile-branch-selector') : gridRef.current;
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  const getPrerequisites = (nodeId: string) => {
    if (!rawConfig || !rawConfig.arrows) return [];
    return rawConfig.arrows
        .filter((a: any) => a.to === nodeId)
        .map((a: any) => a.from);
  };

  const updateNodeStatus = (id: string, status: string, additionalData = {}) => {
    setUserState((prev: any) => {
        const existing = prev[id] || { status: 'locked', checkedOkrs: [] };
        let newData = { ...existing, status: status, lastUpdated: new Date().toISOString() };
        if (status === 'not-relevant') newData.notRelevantData = additionalData;
        else delete newData.notRelevantData;
        return { ...prev, [id]: newData };
    });
  };

  const triggerConfetti = () => {
      if (typeof confetti !== 'function') return;
      const count = 200;
      const defaults = { origin: { y: 0.7 } };
      function fire(particleRatio: number, opts: any) {
          confetti(Object.assign({}, defaults, opts, { particleCount: Math.floor(count * particleRatio) }));
      }
      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleStatusChangeAttempt = (id: string, status: string, data?: any, onSuccess?: () => void) => {
      if (status === 'completed') {
          const prerequisites = getPrerequisites(id);
          const missing = prerequisites.filter((pid: string) => {
             const pState = userState[pid];
             return !pState || (pState.status !== 'completed' && pState.status !== 'not-relevant');
          });
          if (missing.length > 0) { setWarningData({ isOpen: true, missingNodes: missing }); return; }
          triggerConfetti();
      }
      updateNodeStatus(id, status, data);
      if (onSuccess) onSuccess();
  };

  const toggleNodeOkr = (id: string, okrIndex: number) => {
      setUserState((prev: any) => {
          const currentNode = prev[id] || { status: 'locked', checkedOkrs: [] };
          const checked = new Set(currentNode.checkedOkrs || []);
          if (checked.has(okrIndex)) checked.delete(okrIndex); else checked.add(okrIndex);
          return { ...prev, [id]: { ...currentNode, checkedOkrs: Array.from(checked) } }
      });
  };

  const getNodeState = (id: string) => {
      const state = userState[id];
      return { status: state?.status || 'locked', checkedOkrs: state?.checkedOkrs || [], notRelevantData: state?.notRelevantData };
  }

  const getProgress = () => {
    let score = 0;
    let totalRelevant = 0;
    appNodes.forEach((node: any) => {
        const state = userState[node.id];
        if (state?.status === 'not-relevant') { /* Exclude */ } 
        else {
            totalRelevant++;
            if (state?.status === 'completed') score += 1;
            else if (state?.status === 'in-progress') score += 0.5;
        }
    });
    if (totalRelevant === 0) return 0;
    return Math.round((score / totalRelevant) * 100);
  };
  
  const getCompletedCount = () => Object.values(userState).filter((s: any) => s.status === 'completed').length;
  const activeNode = appNodes.find((n: any) => n.id === activeNodeId);

  const filteredSearchNodes = useMemo(() => {
    if (!searchQuery) return [];
    return appNodes.filter((n: any) => n.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, appNodes]);

  const handleLoadClick = () => { if (fileInputRef.current) fileInputRef.current.click(); };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
          try {
              const data = JSON.parse(e.target?.result as string);
              if (data.userState && data.projectData) {
                  setUserState(data.userState);
                  setProjectData(data.projectData);
                  alert('Projekt erfolgreich geladen!');
              } else {
                  alert('Ungültiges Dateiformat.');
              }
          } catch (err) { console.error(err); alert('Fehler beim Lesen der Datei.'); }
      };
      reader.readAsText(file);
      if (event.target) event.target.value = '';
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-100 print:bg-white flex flex-col">
      <SEO 
        title={ui("seo.app.title")} 
        description={ui("seo.app.description")}
      />
      <input type="file" ref={fileInputRef} style={{display: 'none'}} onChange={handleFileChange} accept=".json" />

      <WarningModal data={warningData} onClose={() => setWarningData({ ...warningData, isOpen: false })} nodes={appNodes} />
      
      {activeNodeId && (
        <DetailPopup node={activeNode} onClose={() => setActiveNodeId(null)} onStatusChange={(id: string, status: string, data: any) => handleStatusChangeAttempt(id, status, data, () => setActiveNodeId(null))} onOkrToggle={(idx: number) => toggleNodeOkr(activeNodeId, idx)} nodeState={getNodeState(activeNodeId)} isGardener={isGardenerMode} isMobile={isMobile} allNodes={appNodes} userState={userState} onNavigate={setActiveNodeId} branches={appBranches} ui={ui} />
      )}

      <div className="toolbar sticky top-[64px] left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm h-14 transition-all duration-200 print:hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex justify-between items-center">
            <div className="relative w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><i className="fas fa-search text-slate-400 text-xs"></i></div>
                <input type="text" placeholder={ui("app.search_nodes")} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="block w-full pl-8 pr-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-xs transition-colors" />
                {searchQuery && filteredSearchNodes.length > 0 && (
                  <div className="absolute top-full mt-1 w-full bg-white dark:bg-slate-800 rounded-md shadow-lg border border-slate-200 dark:border-slate-700 max-h-60 overflow-y-auto z-50">
                    {filteredSearchNodes.map((node: any) => (
                      <div key={node.id} className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer text-xs border-b border-slate-50 dark:border-slate-700 last:border-0" onClick={() => { setActiveNodeId(node.id); setSearchQuery(''); }}>
                          <div className="font-bold text-slate-800 dark:text-slate-200">{node.title}</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">{node.branchId} • L{node.level}</div>
                      </div>
                    ))}
                  </div>
                )}
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
                <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded p-1 border border-slate-200 dark:border-slate-700">
                      <button onClick={() => setViewMode('map')} className={`w-8 h-7 flex items-center justify-center rounded text-xs transition-all ${viewMode === 'map' ? 'bg-white dark:bg-slate-600 text-emerald-700 dark:text-emerald-400 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`} title={ui("app.view_map")}><i className="fas fa-project-diagram"></i></button>
                      <button onClick={() => setViewMode('list')} className={`w-8 h-7 flex items-center justify-center rounded text-xs transition-all ${viewMode === 'list' ? 'bg-white dark:bg-slate-600 text-emerald-700 dark:text-emerald-400 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`} title={ui("app.view_list")}><i className="fas fa-list-ul"></i></button>
                </div>
                <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded p-1 border border-slate-200 dark:border-slate-700">
                  <button onClick={() => setIsGardenerMode(false)} className={`px-3 py-1 rounded text-xs font-medium transition-all ${!isGardenerMode ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-500' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>{ui("app.view")}</button>
                  <button onClick={() => setIsGardenerMode(true)} className={`px-3 py-1 rounded text-xs font-medium transition-all flex items-center ${isGardenerMode ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}><i className="fas fa-check-square mr-1.5"></i> {ui("app.assess")}</button>
                </div>
            </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col">
        <Hero onExplore={scrollToTree} progress={getProgress()} nodeCount={appNodes.length} completedCount={getCompletedCount()} projectData={projectData} setProjectData={setProjectData} ui={ui} />

        <div className="flex-grow">
          {viewMode === 'map' ? (
             <div id="tree-grid-container" ref={gridRef} className={`relative w-full overflow-auto bg-slate-50 dark:bg-slate-950 pt-12 pb-32 px-8 min-h-screen print:hidden ${isMobile ? 'hidden' : 'block'}`}>
                  <div style={{ width: 'fit-content', minWidth: '100%', height: 'fit-content' }}>
                          <div className="relative inline-block min-w-full">
                              <ConnectingLines nodeRefs={nodeRefs} hoveredNode={hoveredNodeId} containerRef={gridRef} />
                              <div className="inline-grid gap-x-8 gap-y-8 relative z-10" style={{ gridTemplateColumns: `250px repeat(${levels.length}, minmax(160px, 1fr))` }}>
                              <div className="sticky top-0 left-0 z-50 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 h-10 flex items-center justify-center text-xs font-bold text-slate-400 tracking-widest uppercase border-r">{ui("app.ast")}</div>
                              {levels.map(level => (
                                  <div key={level.id} className="sticky top-0 z-40 text-center pb-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">{level.label}</span>
                                  </div>
                              ))}
                              {appBranches.map((branch: any) => (
                                  <React.Fragment key={branch.id}>
                                      <div className="sticky left-0 z-30 flex items-center bg-slate-50 dark:bg-slate-950 pr-4 border-r border-slate-200 dark:border-slate-800 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
                                          <div 
                                              className="flex items-center space-x-3 w-full p-4 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                                          >
                                              <div className="w-8 h-8 rounded bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 flex-shrink-0"><i className={`fas ${branch.icon}`}></i></div>
                                              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight flex-1">{branch.name}</h3>
                                              <i className="fas fa-info-circle text-slate-300 dark:text-slate-600 group-hover:text-emerald-500 transition-colors"></i>
                                          </div>
                                      </div>
                                      {levels.map(level => {
                                          const cellNodes = appNodes.filter((n: any) => n.branchId === branch.id && n.level === level.id - 1);
                                          return (
                                              <div key={`${branch.id}-${level.id}`} className="flex flex-col items-center justify-center space-y-2 min-h-[100px]">
                                                  {cellNodes.map((node: any) => {
                                                      const state = getNodeState(node.id);
                                                      const isCompleted = state.status === 'completed';
                                                      const isInProgress = state.status === 'in-progress';
                                                      const isNotRelevant = state.status === 'not-relevant';
                                                      let cardClasses = "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm";
                                                      let textClasses = "text-slate-700 dark:text-slate-200";
                                                      let statusIndicator = null;
                                                      if (isNotRelevant) {
                                                          cardClasses = "bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 border-dashed opacity-60";
                                                          textClasses = "text-slate-400 dark:text-slate-600 line-through decoration-slate-300 dark:decoration-slate-700";
                                                      } else if (isGardenerMode) {
                                                          if (isCompleted) {
                                                              cardClasses = "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 dark:border-emerald-500 shadow-md ring-1 ring-emerald-500/20";
                                                              textClasses = "text-emerald-900 dark:text-emerald-100 font-medium";
                                                              statusIndicator = (<div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] shadow-sm border-2 border-white dark:border-slate-900 z-20"><i className="fas fa-check"></i></div>);
                                                          } else if (isInProgress) {
                                                              cardClasses = "bg-amber-50 dark:bg-amber-900/20 border-amber-400 dark:border-amber-500 shadow-md ring-1 ring-amber-400/20";
                                                              textClasses = "text-amber-900 dark:text-amber-100 font-medium";
                                                              statusIndicator = (<div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-amber-400 text-white flex items-center justify-center text-[10px] shadow-sm border-2 border-white dark:border-slate-900 z-20"><i className="fas fa-spinner fa-spin"></i></div>);
                                                          }
                                                      } else {
                                                          if (isCompleted) cardClasses = "bg-white dark:bg-slate-800 border-b-4 border-b-emerald-500 border-slate-200 dark:border-slate-700 shadow-sm";
                                                          else if (isInProgress) cardClasses = "bg-white dark:bg-slate-800 border-b-4 border-b-amber-400 border-slate-200 dark:border-slate-700 shadow-sm";
                                                      }
                                                      return (
                                                        <div key={node.id} ref={el => { if(el) nodeRefs.current.set(node.id, el) }} 
                                                             className={`relative group perspective w-full max-w-[160px] print:hidden z-10 transition-transform duration-200 hover:-translate-y-0.5`} 
                                                             onMouseEnter={() => setHoveredNodeId(node.id)} 
                                                             onMouseLeave={() => setHoveredNodeId(null)} 
                                                             onClick={() => setActiveNodeId(node.id)}>
                                                            <div className={`relative w-full min-h-[70px] p-3 rounded-lg border text-left flex flex-col justify-between transition-all duration-200 ${cardClasses}`}>
                                                                {statusIndicator}
                                                                <div className="flex justify-between items-start mb-2">
                                                                    <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">L{node.level}</span>
                                                                    {isNotRelevant && <i className="fas fa-ban text-xs text-slate-300 dark:text-slate-600"></i>}
                                                                </div>
                                                                <h4 className={`text-[11px] leading-snug font-semibold ${textClasses} line-clamp-3`}>{node.title}</h4>
                                                            </div>
                                                        </div>
                                                      )
                                                  })}
                                              </div>
                                          );
                                      })}
                                  </React.Fragment>
                              ))}
                              </div>
                          </div>
                  </div>
             </div>
          ) : (
              <div className="p-8 max-w-4xl mx-auto">{ui("app.list_view_placeholder")}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppTool;
