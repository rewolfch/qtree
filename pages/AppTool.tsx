
import React, { useState, useEffect, useRef, useLayoutEffect, useMemo } from 'react';
import { GoogleGenAI } from "@google/genai";
import confetti from 'canvas-confetti';
import { rawConfig } from '../data/appToolData';

// --- Sub-components & Helpers ---

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

const Hero = ({ onExplore, progress, nodeCount, completedCount, projectData, setProjectData }: any) => (
    <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-800 border-b border-emerald-100 dark:border-slate-700 py-16 px-4 md:px-8 text-center print:hidden">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Grow Your <span className="text-emerald-600">Quality Tree</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
            Visualisiere und verbessere deine Engineering-Praktiken.
        </p>
        
        <div className="max-w-md mx-auto bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 mb-8 transform transition-all hover:scale-105">
            <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium">
                <span>Maturity Score</span>
                <span>{progress}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3 mb-4 overflow-hidden">
                <div className="bg-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-400">
                <span>{completedCount} of {nodeCount} leaves</span>
                <i className="fas fa-leaf text-emerald-400"></i>
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
            <input 
                type="text" 
                placeholder="Projektname" 
                value={projectData.name}
                onChange={(e) => setProjectData({...projectData, name: e.target.value})}
                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
            />
            <input 
                type="text" 
                placeholder="Verantwortlicher" 
                value={projectData.owner}
                onChange={(e) => setProjectData({...projectData, owner: e.target.value})}
                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
            />
        </div>

        <button onClick={onExplore} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-emerald-200 dark:shadow-none transition-all hover:-translate-y-1 active:scale-95">
            Start Assessment
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
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            Du kannst diesen Knoten nicht abschließen, bevor folgende Abhängigkeiten erfüllt sind:
                        </p>
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
                        Verstanden
                    </button>
                </div>
            </div>
        </div>
    );
};

const BranchDetailPopup = ({ branch, onClose }: any) => {
    if (!branch) return null;
    const { details } = branch;

    return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in" onClick={onClose}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden animate-scale-in flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-8 text-white relative shrink-0">
                    <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"><i className="fas fa-times text-xl"></i></button>
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm">
                            <i className={`fas ${branch.icon}`}></i>
                        </div>
                        <h2 className="text-3xl font-serif font-bold tracking-tight">{branch.name}</h2>
                    </div>
                </div>
                <div className="p-8 overflow-y-auto grow space-y-8 bg-white dark:bg-slate-900">
                    {details ? (
                        <>
                            <div className="space-y-4">
                                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                    {details.description}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border border-amber-100 dark:border-amber-800">
                                    <h3 className="text-amber-800 dark:text-amber-400 font-bold mb-3 flex items-center gap-2">
                                        <i className="fas fa-star"></i> Warum ist das wichtig?
                                    </h3>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                        {details.importance}
                                    </p>
                                </div>
                                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-xl border border-emerald-100 dark:border-emerald-800">
                                    <h3 className="text-emerald-800 dark:text-emerald-400 font-bold mb-3 flex items-center gap-2">
                                        <i className="fas fa-play-circle"></i> Wie starte ich?
                                    </h3>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                        {details.gettingStarted}
                                    </p>
                                </div>
                            </div>

                            {details.resources && details.resources.length > 0 && (
                                <div>
                                    <h3 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2 uppercase text-sm tracking-wider">
                                        <i className="fas fa-book-reader text-slate-400"></i> Weiterführende Informationen
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {details.resources.map((res: any, i: number) => (
                                            <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:shadow-md transition-all group bg-slate-50 dark:bg-slate-800/50">
                                                <i className="fas fa-external-link-alt text-slate-400 group-hover:text-emerald-500 mr-3"></i>
                                                <span className="text-slate-700 dark:text-slate-200 font-medium text-sm group-hover:text-emerald-700 dark:group-hover:text-emerald-400">{res.label}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-12 text-slate-500">
                            <i className="fas fa-info-circle text-4xl mb-4 text-slate-300"></i>
                            <p>Für diesen Bereich sind noch keine detaillierten Informationen hinterlegt.</p>
                        </div>
                    )}
                </div>
                <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-end">
                    <button onClick={onClose} className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold hover:opacity-90 transition-opacity">
                        Verstanden
                    </button>
                </div>
            </div>
        </div>
    );
};

const ExportModal = ({ branches, onClose, onExport }: any) => {
    const [selected, setSelected] = useState(branches.map((b: any) => b.id));
    const [showTrend, setShowTrend] = useState(true);

    const toggleBranch = (id: string) => {
        if (selected.includes(id)) setSelected(selected.filter((x: string) => x !== id));
        else setSelected([...selected, id]);
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-scale-in flex flex-col max-h-[90vh]">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                    <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">Report konfigurieren</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><i className="fas fa-times"></i></button>
                </div>
                <div className="p-6 overflow-y-auto">
                    <div className="mb-6">
                        <label className="flex items-center space-x-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                            <input type="checkbox" checked={showTrend} onChange={e => setShowTrend(e.target.checked)} className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500" />
                            <span className="font-medium text-slate-700 dark:text-slate-200">Trendanalyse einschließen</span>
                        </label>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Disziplinen</label>
                        {branches.map((b: any) => (
                            <div key={b.id} onClick={() => toggleBranch(b.id)} className="flex items-center justify-between p-3 rounded-lg border border-transparent hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors group">
                                <div className="flex items-center">
                                    <div className={`w-8 h-8 rounded flex items-center justify-center mr-3 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30`}>
                                        <i className={`fas ${b.icon}`}></i>
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">{b.name}</span>
                                </div>
                                {selected.includes(b.id) && <i className="fas fa-check-circle text-emerald-500 text-lg"></i>}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-6 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 flex justify-end space-x-3">
                    <button onClick={onClose} className="px-5 py-2.5 rounded-lg font-medium text-slate-600 hover:bg-white border border-transparent hover:border-slate-200 transition-all">Abbrechen</button>
                    <button onClick={() => onExport({ branches: selected, showTrend })} className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold shadow-lg shadow-emerald-200 dark:shadow-none transition-all flex items-center">
                        <i className="fas fa-print mr-2"></i> Report erstellen
                    </button>
                </div>
            </div>
        </div>
    );
};

const ListView = ({ branches, nodes, userState, onNodeClick, isGardener, onStatusChange, onBranchInfoClick }: any) => {
    const [collapsed, setCollapsed] = useState<any>(() => {
        const initial: any = {};
        branches.forEach((b: any) => initial[b.id] = true);
        return initial;
    });

    const toggleCollapse = (branchId: string) => {
        setCollapsed((prev: any) => ({ ...prev, [branchId]: !prev[branchId] }));
    };

    const allCollapsed = branches.every((b: any) => collapsed[b.id]);

    const toggleAll = () => {
        const newState: any = {};
        branches.forEach((b: any) => newState[b.id] = !allCollapsed);
        setCollapsed(newState);
    };

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 pb-32">
            <div className="flex justify-end mb-6">
                <button onClick={toggleAll} className="flex items-center text-sm font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-lg transition-colors">
                    <i className={`fas ${allCollapsed ? 'fa-expand-arrows-alt' : 'fa-compress-arrows-alt'} mr-2`}></i>
                    {allCollapsed ? 'Alles ausklappen' : 'Alles einklappen'}
                </button>
            </div>
            {branches.map((branch: any) => {
                const branchNodes = nodes.filter((n: any) => n.branchId === branch.id).sort((a: any,b: any) => a.level - b.level);
                const completed = branchNodes.filter((n: any) => userState[n.id]?.status === 'completed').length;
                const progress = Math.round((completed / branchNodes.length) * 100) || 0;
                const isCollapsed = collapsed[branch.id];

                return (
                    <div key={branch.id} className="mb-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div 
                          onClick={() => toggleCollapse(branch.id)}
                          className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors select-none group"
                        >
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl mr-4 pointer-events-none">
                                    <i className={`fas ${branch.icon}`}></i>
                                </div>
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                      {branch.name}
                                      <button 
                                          onClick={(e) => { e.stopPropagation(); onBranchInfoClick(branch.id); }}
                                          className="w-6 h-6 rounded-full flex items-center justify-center bg-slate-100 hover:bg-emerald-100 text-slate-400 hover:text-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-900 dark:text-slate-500 dark:hover:text-emerald-400 transition-colors ml-1"
                                          title="Details zur Disziplin anzeigen"
                                      >
                                          <i className="fas fa-info text-xs"></i>
                                      </button>
                                      <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center ml-2 pointer-events-none">
                                        <i className={`fas fa-chevron-${isCollapsed ? 'down' : 'up'} text-xs text-slate-500`}></i>
                                      </div>
                                    </h2>
                                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-1 pointer-events-none">
                                        <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs font-bold mr-2">{branchNodes.length} Nodes</span>
                                        <span>{completed} abgeschlossen</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-48 pointer-events-none">
                                <div className="flex justify-between text-xs mb-1 font-bold text-slate-500">
                                    <span>Progress</span>
                                    <span>{progress}%</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                                </div>
                            </div>
                        </div>
                        {!isCollapsed && (
                          <div className="divide-y divide-slate-100 dark:divide-slate-800 animate-slide-up">
                              {branchNodes.map((node: any) => {
                                  const state = userState[node.id] || { status: 'locked' };
                                  const isNA = state.status === 'not-relevant';
                                  return (
                                      <div key={node.id} onClick={() => onNodeClick(node.id)} className={`p-4 cursor-pointer flex items-center justify-between group transition-colors ${isNA ? 'bg-slate-50 dark:bg-slate-950 opacity-70' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                                          <div className="flex items-center gap-4">
                                              <div className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold border ${state.status === 'completed' ? 'bg-emerald-500 border-emerald-500 text-white' : isNA ? 'bg-slate-200 border-slate-300 text-slate-500 dark:bg-slate-800 dark:border-slate-700' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400'}`}>
                                                  {state.status === 'completed' ? <i className="fas fa-check"></i> : isNA ? <i className="fas fa-ban"></i> : `L${node.level}`}
                                              </div>
                                              <div>
                                                  <div className={`font-medium ${isNA ? 'text-slate-500 dark:text-slate-500 line-through decoration-slate-400' : 'text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400'} transition-colors`}>{node.title}</div>
                                              </div>
                                          </div>
                                          <div className="flex items-center">
                                              {isGardener && !isNA && (
                                                  <div className="flex mr-4 gap-1" onClick={e => e.stopPropagation()}>
                                                      <button onClick={() => onStatusChange(node.id, 'locked')} className={`w-6 h-6 rounded flex items-center justify-center text-xs ${state.status === 'locked' ? 'bg-slate-200 text-slate-600' : 'text-slate-300 hover:bg-slate-100'}`}><i className="fas fa-lock"></i></button>
                                                      <button onClick={() => onStatusChange(node.id, 'in-progress')} className={`w-6 h-6 rounded flex items-center justify-center text-xs ${state.status === 'in-progress' ? 'bg-amber-100 text-amber-600' : 'text-slate-300 hover:bg-amber-50'}`}><i className="fas fa-spinner"></i></button>
                                                      <button onClick={() => onStatusChange(node.id, 'completed')} className={`w-6 h-6 rounded flex items-center justify-center text-xs ${state.status === 'completed' ? 'bg-emerald-100 text-emerald-600' : 'text-slate-300 hover:bg-emerald-50'}`}><i className="fas fa-check"></i></button>
                                                  </div>
                                              )}
                                              {isNA && <span className="text-[10px] uppercase font-bold text-slate-400 mr-4 border border-slate-200 rounded px-2 py-0.5">N/A</span>}
                                              <i className="fas fa-chevron-right text-slate-300 dark:text-slate-600 group-hover:translate-x-1 transition-transform"></i>
                                          </div>
                                      </div>
                                  )
                              })}
                          </div>
                        )}
                    </div>
                )
            })}
        </div>
    );
};

const DetailPopup = ({ node, onClose, onStatusChange, onOkrToggle, nodeState, isGardener, isMobile, allNodes, userState, onNavigate, branches }: any) => {
    const [isNaInputOpen, setIsNaInputOpen] = useState(false);
    const [naReason, setNaReason] = useState('');

    if (!node) return null;
    const branchName = branches.find((b: any) => b.id === node.branchId)?.name?.toUpperCase();

    // Helper to get prerequisites
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
        if (!naReason.trim()) {
            alert("Bitte geben Sie einen Grund an, warum dieser Punkt nicht relevant ist.");
            return;
        }
        onStatusChange(node.id, 'not-relevant', { comment: naReason, timestamp: new Date().toISOString() });
        setIsNaInputOpen(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className={`bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-scale-in flex flex-col ${isMobile ? 'h-[90vh]' : 'max-h-[90vh] h-[800px]'}`} onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 relative shrink-0">
                     <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"><i className="fas fa-times text-xl"></i></button>
                     <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                         <span>Level {node.level}</span>
                         <span>•</span>
                         <span>{branchName}</span>
                     </div>
                     <h2 className={`text-3xl md:text-4xl font-serif font-bold ${isNA ? 'text-slate-400 dark:text-slate-500 line-through decoration-2' : 'text-slate-900 dark:text-white'} leading-tight`}>{node.title}</h2>
                     {isNA && <div className="inline-block mt-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-bold uppercase rounded-full">Nicht Relevant</div>}
                </div>
                 
                 {/* Content */}
                 <div className="p-6 md:p-8 overflow-y-auto grow bg-white dark:bg-slate-900">
                     {isNaInputOpen ? (
                         <div className="animate-fade-in">
                             <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Warum ist dieser Punkt nicht relevant?</h4>
                             <textarea 
                                 className="w-full p-4 border border-slate-300 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none min-h-[150px]"
                                 placeholder="Begründung eingeben (z.B. Legacy-System, wird durch anderen Prozess abgedeckt...)"
                                 value={naReason}
                                 onChange={(e) => setNaReason(e.target.value)}
                                 autoFocus
                             ></textarea>
                             <div className="flex gap-3 mt-4 justify-end">
                                 <button onClick={() => setIsNaInputOpen(false)} className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors">Abbrechen</button>
                                 <button onClick={handleSaveNa} className="px-6 py-2 bg-slate-800 hover:bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold rounded-lg transition-colors">Bestätigen</button>
                             </div>
                         </div>
                     ) : (
                         <>
                             {isNA && nodeState.notRelevantData && (
                                 <div className="mb-8 p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
                                     <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                                         <i className="fas fa-comment-slash"></i> Begründung für Ausschluss
                                     </h4>
                                     <p className="text-slate-700 dark:text-slate-300 italic mb-2">"{nodeState.notRelevantData.comment}"</p>
                                     <div className="text-[10px] text-slate-400 text-right">{new Date(nodeState.notRelevantData.timestamp).toLocaleString()}</div>
                                 </div>
                             )}

                             {/* Description */}
                             <div className="mb-8">
                                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                      <i className="fas fa-align-left text-slate-400"></i> Beschreibung
                                  </h4>
                                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                      {node.description || "Keine Beschreibung verfügbar."}
                                  </div>
                             </div>

                             {/* Prerequisites Section */}
                             {prerequisites.length > 0 && (
                                 <div className="mb-8">
                                     <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                         <i className="fas fa-sitemap text-slate-400"></i> Voraussetzungen
                                     </h4>
                                     <div className="flex flex-wrap gap-2">
                                         {prerequisites.map((p: any) => {
                                             const isPNa = p.status === 'not-relevant';
                                             const isPDone = p.status === 'completed';
                                             return (
                                                 <button 
                                                     key={p.id}
                                                     onClick={() => onNavigate(p.id)}
                                                     className={`px-3 py-2 rounded-lg text-sm font-medium border flex items-center gap-2 transition-colors ${isPDone ? 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-400' : isPNa ? 'bg-slate-100 border-slate-200 text-slate-500 dark:bg-slate-800 dark:border-slate-700' : 'bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-900/30 dark:border-amber-800 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/50 cursor-pointer'}`}
                                                 >
                                                     {isPDone ? <i className="fas fa-check-circle"></i> : isPNa ? <i className="fas fa-ban"></i> : <i className="fas fa-exclamation-circle"></i>}
                                                     {p.title}
                                                 </button>
                                             );
                                         })}
                                     </div>
                                 </div>
                             )}
                             
                             {/* OKRs */}
                             {(node.acceptanceCriteria && node.acceptanceCriteria.length > 0) && (
                                 <div className={`mb-8 ${isNA ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
                                     <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                         <i className="fas fa-list-check text-slate-400"></i> Akzeptanzkriterien (OKRs)
                                     </h4>
                                     <div className="space-y-3">
                                          {node.acceptanceCriteria.map((criterion: string, idx: number) => {
                                              const isChecked = nodeState.checkedOkrs?.includes(idx);
                                              return (
                                                  <div key={idx} 
                                                       onClick={() => !isNA && onOkrToggle(idx)}
                                                       className={`p-4 rounded-xl border flex items-start gap-4 cursor-pointer transition-all hover:shadow-md ${isChecked ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-900' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-300'}`}>
                                                      <div className={`mt-1 w-6 h-6 rounded border flex items-center justify-center shrink-0 transition-colors ${isChecked ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600'}`}>
                                                          {isChecked && <i className="fas fa-check text-xs"></i>}
                                                      </div>
                                                      <span className={`text-base ${isChecked ? 'text-emerald-900 dark:text-emerald-100' : 'text-slate-600 dark:text-slate-300'}`}>{criterion}</span>
                                                  </div>
                                              );
                                          })}
                                     </div>
                                 </div>
                             )}
                         </>
                     )}
                 </div>

                 {/* Footer */}
                 {!isNaInputOpen && (
                     <div className="p-4 md:p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex flex-col md:flex-row gap-4">
                         <button 
                             onClick={() => setIsNaInputOpen(true)}
                             className={`md:flex-none py-3 px-4 rounded-xl font-medium text-sm border border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50 dark:hover:text-slate-300 dark:hover:bg-slate-800 transition-colors ${isNA ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300' : ''}`}
                             title="Als nicht relevant markieren"
                         >
                             {isNA ? "Begründung ändern" : "Nicht relevant"}
                         </button>
                         <div className="flex-1 flex gap-4">
                             <button 
                                 onClick={() => onStatusChange(node.id, 'in-progress')}
                                 className={`flex-1 py-3 px-6 rounded-xl font-bold text-base border-2 transition-all flex items-center justify-center gap-2 ${nodeState.status === 'in-progress' ? 'bg-amber-50 border-amber-500 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'}`}
                             >
                                 <i className="fas fa-hourglass-half"></i> In Arbeit
                             </button>
                             <button 
                                 onClick={() => onStatusChange(node.id, 'completed')}
                                 className={`flex-1 py-3 px-6 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 ${nodeState.status === 'completed' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 dark:shadow-none' : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg'} ${(hasMissingPrereqs) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                 disabled={hasMissingPrereqs}
                                 title={hasMissingPrereqs ? "Bitte zuerst Voraussetzungen erfüllen" : "Abschließen"}
                             >
                                 <i className="fas fa-check-circle"></i> Erledigt
                             </button>
                         </div>
                     </div>
                 )}
            </div>
        </div>
    );
};

const AiChat = ({ nodes, branches, projectData }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatSessionRef = useRef<any>(null);

    // Initialize chat session when data is available
    useEffect(() => {
       if (!chatSessionRef.current && nodes.length > 0) {
           try {
               const apiKey = process.env.API_KEY;

               if (apiKey) {
                   const ai = new GoogleGenAI({ apiKey });
                   
                   const systemInstruction = `You are the Quality Tree Assistant. 
You answer questions about the Quality Tree Framework based on the provided data.
The framework is from the book "Quality-Tree-Framework" by Serge Baumberger (Infometis AG).

Data:
${branches.map((b: any) => `Branch: ${b.name}`).join('\n')}

Nodes:
${nodes.map((n: any) => `- ${n.title} (${branches.find((b: any)=>b.id===n.branchId)?.name}): ${n.description}. OKRs: ${n.acceptanceCriteria.join(', ')}`).join('\n')}

Keep answers helpful and concise.`;

                   chatSessionRef.current = ai.chats.create({
                      model: 'gemini-3-flash-preview',
                      config: {
                          systemInstruction: systemInstruction,
                      }
                   });
                   
                   // Initial greeting
                   const name = projectData.owner || "Qualitäts-Held";
                   setMessages([
                      { role: 'system', text: `Hallo ${name}! Ich bin dein Quality Tree Assistant mit KI-Power. Wie kann ich dir helfen?` }
                   ]);
               } else {
                   setMessages([{role: 'system', text: 'AI Assistant disabled (No API Key found).'}]);
               }
           } catch (error) {
               console.error("AI Init Error:", error);
               setMessages([{role: 'system', text: 'AI initialization failed.'}]);
           }
       }
    }, [nodes, branches, projectData.owner]);

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            if (chatSessionRef.current) {
                const result = await chatSessionRef.current.sendMessage({ message: userMsg.text });
                const responseText = result.text;
                setMessages(prev => [...prev, { role: 'model', text: responseText }]);
            } else {
                setMessages(prev => [...prev, { role: 'model', text: "AI not initialized." }]);
            }
        } catch (error) {
            console.error("AI Error:", error);
            setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error." }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl flex items-center justify-center text-2xl z-[55] transition-transform hover:scale-110 active:scale-95 ai-helper-btn">
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-robot'}`}></i>
            </button>
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 z-[55] overflow-hidden animate-slide-up flex flex-col h-96">
                    <div className="bg-indigo-600 p-4 text-white font-bold flex justify-between items-center">
                        <span><i className="fas fa-robot mr-2"></i>Quality Assistant</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50 dark:bg-slate-950">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-xl p-3 text-sm whitespace-pre-wrap ${m.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-sm'}`}>
                                    {m.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                          <div className="flex justify-start">
                            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl rounded-bl-none p-3 shadow-sm flex space-x-1">
                              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                            </div>
                          </div>
                        )}
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-2">
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="Frage etwas..." className="flex-1 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:text-white" />
                        <button onClick={handleSend} className="w-10 h-10 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center"><i className="fas fa-paper-plane"></i></button>
                    </div>
                </div>
            )}
        </>
    );
};

const PrintReport = ({ userState, getProgress, projectData, config, branches, nodes }: any) => {
    if (!config) return null;

    const filteredBranches = branches.filter((b: any) => config.branches.includes(b.id));
    
    const chunks: any[] = [];
    for (let i = 0; i < filteredBranches.length; i += 2) {
        chunks.push(filteredBranches.slice(i, i + 2));
    }

    const trendData = branches.map((b: any) => {
       const bNodes = nodes.filter((n: any) => n.branchId === b.id);
       const completed = bNodes.filter((n: any) => userState[n.id]?.status === 'completed').length;
       return { name: b.name, total: bNodes.length, completed, percentage: Math.round((completed/bNodes.length)*100) || 0 };
    });

    return (
        <div id="print-report-content" className="hidden print:block w-full bg-white text-black p-8">
            <div className="mb-8 border-b-2 border-emerald-900 pb-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-2">Quality Tree Report</h1>
                        <p className="text-slate-600 mb-6">Generiert am {new Date().toLocaleDateString('de-DE')}</p>
                        {(projectData.name || projectData.owner) && (
                            <div className="bg-slate-50 border border-slate-200 rounded p-4 inline-block min-w-[300px]">
                                {projectData.name && <div><div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Projekt / Bereich</div><div className="text-xl font-bold text-slate-900">{projectData.name}</div></div>}
                                {projectData.owner && <div className="mt-2"><div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Verantwortlich</div><div className="text-base font-medium text-slate-700">{projectData.owner}</div></div>}
                            </div>
                        )}
                    </div>
                    <div className="text-right bg-emerald-50 p-4 rounded border border-emerald-100"><div className="text-5xl font-bold text-emerald-700">{getProgress()}%</div><div className="text-xs text-emerald-800 uppercase tracking-widest font-bold mt-1">Maturity Score</div></div>
                </div>
            </div>
            {config.showTrend && (
                <div className="mb-10 break-inside-avoid">
                  <h2 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-indigo-500 pl-3">Trend & Status Übersicht</h2>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {trendData.map((d: any) => (
                          <div key={d.name} className="flex items-center text-sm">
                              <div className="w-48 font-medium text-slate-700 truncate mr-2">{d.name}</div>
                              <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200"><div className="h-full bg-emerald-600" style={{ width: `${d.percentage}%` }}></div></div>
                              <div className="w-12 text-right font-bold text-slate-900">{d.percentage}%</div>
                          </div>
                      ))}
                  </div>
                </div>
            )}
            <div className="flex flex-col gap-8">
                {chunks.map((chunk, i) => (
                    <div key={i} className="grid grid-cols-1 gap-8 break-after-page">
                        {chunk.map((b: any) => (
                            <div key={b.id} className="break-inside-avoid border border-slate-300 rounded-lg overflow-hidden">
                                <div className="bg-slate-100 px-4 py-3 border-b border-slate-300 flex items-center justify-between">
                                    <div className="flex items-center"><div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center mr-3 text-xs"><i className={`fas ${b.icon}`}></i></div><h2 className="text-lg font-bold text-slate-900">{b.name}</h2></div>
                                    <div className="text-xs font-medium text-slate-500">{nodes.filter((n: any) => n.branchId === b.id && userState[n.id]?.status === 'completed').length} / {nodes.filter((n: any) => n.branchId === b.id).length} Erledigt</div>
                                </div>
                                <div className="p-4 grid grid-cols-2 gap-x-4 gap-y-2">
                                    {nodes.filter((n: any) => n.branchId === b.id).sort((a: any,b: any) => a.level - b.level).map((node: any) => {
                                        const state = userState[node.id] || { status: 'locked' };
                                        const isNA = state.status === 'not-relevant';
                                        return (
                                            <div key={node.id} className={`flex items-center p-1.5 rounded border ${state.status === 'completed' ? 'bg-emerald-50 border-emerald-200' : isNA ? 'bg-slate-50 border-slate-100 opacity-60' : 'bg-white border-slate-100'}`}>
                                                <div className={`w-5 h-5 flex items-center justify-center rounded text-[9px] font-bold border shrink-0 mr-2 ${state.status === 'completed' ? 'bg-emerald-600 border-emerald-600 text-white' : isNA ? 'bg-slate-200 border-slate-300 text-slate-400' : 'bg-white border-slate-200 text-slate-400'}`}>{state.status === 'completed' ? <i className="fas fa-check"></i> : isNA ? <i className="fas fa-ban"></i> : `L${node.level}`}</div>
                                                <span className={`text-[11px] leading-tight truncate ${state.status === 'completed' ? 'font-bold text-emerald-900' : 'font-medium text-slate-600'}`}>{node.title}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Main App Component ---

const AppTool: React.FC = () => {
  // --- Data Initialization ---
  const levels = Array.from({ length: 9 }, (_, i) => ({ id: i + 1, label: `Level ${i + 1}` }));
  const icons = ["fa-cogs", "fa-vial", "fa-cube", "fa-rocket", "fa-robot", "fa-server", "fa-user-check", "fa-chart-line"];

  const appBranches = rawConfig.lanes.map((lane: any, index: number) => ({
      id: `branch-${index}`,
      name: lane.label,
      icon: icons[index] || "fa-circle",
      startRow: lane.startRow,
      endRow: lane.endRow,
      details: lane.details
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
          title: cell.label.de || cell.label.en, 
          description: cell.tooltip?.de || cell.tooltip?.en || "",
          acceptanceCriteria: cell.acceptanceCriteria || [],
          level: col - 1,
          branchId: branch ? branch.id : null,
          row: row,
          col: col,
          ...cell
      };
  }).filter(n => n.branchId !== null);

  // --- State ---
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [activeBranchId, setActiveBranchId] = useState<string | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [isGardenerMode, setIsGardenerMode] = useState(false);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [userState, setUserState] = useState<any>({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [warningData, setWarningData] = useState<any>({ isOpen: false, missingNodes: [] });
  const [projectData, setProjectData] = useState({ name: '', owner: '' });
  
  const [showExportModal, setShowExportModal] = useState(false);
  const [reportConfig, setReportConfig] = useState({ branches: appBranches.map(b=>b.id), showTrend: true });
  
  const [isMobile, setIsMobile] = useState(false);
  const [selectedMobileBranchId, setSelectedMobileBranchId] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const gridRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef(new Map());
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Effects ---
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

  const toggleTheme = () => {
    if (isDarkMode) { document.documentElement.classList.remove('dark'); localStorage.setItem('qtree-theme', 'light'); setIsDarkMode(false); } 
    else { document.documentElement.classList.add('dark'); localStorage.setItem('qtree-theme', 'dark'); setIsDarkMode(true); }
  };

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

  // --- Helpers ---
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
  const activeBranch = appBranches.find((b: any) => b.id === activeBranchId);

  const filteredSearchNodes = useMemo(() => {
    if (!searchQuery) return [];
    return appNodes.filter((n: any) => n.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, appNodes]);

  const handleExportConfig = (config: any) => {
      setReportConfig(config);
      setShowExportModal(false);
      setTimeout(() => window.print(), 100);
  };

  const handleShareMail = () => {
      const subject = `Quality Tree Report: ${projectData.name || 'Mein Projekt'}`;
      const body = `Hallo,\n\nHier ist der Status des Quality Tree Assessments für ${projectData.name}.\nGesamtfortschritt: ${getProgress()}%\n\nViele Grüße`;
      window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const scrollGrid = (direction: number) => {
      if(gridRef.current) gridRef.current.scrollBy({ left: direction * 400, behavior: 'smooth' });
  };

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 1.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.2));
  const handleZoomReset = () => setZoomLevel(1);

  const handleSaveProject = () => {
      const data = { version: "1.0", timestamp: new Date().toISOString(), projectData, userState };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `quality-tree-${projectData.name ? projectData.name.replace(/[^a-z0-9]/gi, '_').toLowerCase() : 'project'}-${new Date().toISOString().slice(0,10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
  };

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

  const renderNodeCard = (node: any) => {
      const state = getNodeState(node.id);
      const isCompleted = state.status === 'completed';
      const isInProgress = state.status === 'in-progress';
      const isLocked = state.status === 'locked';
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
              statusIndicator = (
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] shadow-sm border-2 border-white dark:border-slate-900 z-20"><i className="fas fa-check"></i></div>
              );
          } else if (isInProgress) {
              cardClasses = "bg-amber-50 dark:bg-amber-900/20 border-amber-400 dark:border-amber-500 shadow-md ring-1 ring-amber-400/20";
              textClasses = "text-amber-900 dark:text-amber-100 font-medium";
              statusIndicator = (
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-amber-400 text-white flex items-center justify-center text-[10px] shadow-sm border-2 border-white dark:border-slate-900 z-20"><i className="fas fa-spinner fa-spin"></i></div>
              );
          } else if (isLocked) {
              cardClasses = "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 opacity-90";
          }
      } else {
          if (isCompleted) { cardClasses = "bg-white dark:bg-slate-800 border-b-4 border-b-emerald-500 border-slate-200 dark:border-slate-700 shadow-sm"; } 
          else if (isInProgress) { cardClasses = "bg-white dark:bg-slate-800 border-b-4 border-b-amber-400 border-slate-200 dark:border-slate-700 shadow-sm"; }
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
  };

  // --- Render ---
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-100 print:bg-white flex flex-col">
      <style>{`
          /* Custom Scrollbar */
          ::-webkit-scrollbar { width: 10px; height: 10px; }
          ::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 4px; }
          ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 6px; border: 2px solid #f1f5f9; }
          ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
          .dark ::-webkit-scrollbar-track { background: #0f172a; }
          .dark ::-webkit-scrollbar-thumb { background: #334155; border-color: #0f172a; }
          .dark ::-webkit-scrollbar-thumb:hover { background: #475569; }
          @media print { 
             body { background: white; } 
             @page { margin: 15mm; size: A4; } 
             nav, .pt-20, #tree-grid-container, .print\\:hidden, #list-view-container, .ai-helper-btn, .scroll-btn, .toolbar { display: none !important; } 
             #print-report-content, .print\\:block { display: block !important; }
             * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; } 
          }
      `}</style>
      
      <input type="file" ref={fileInputRef} style={{display: 'none'}} onChange={handleFileChange} accept=".json" />

      <WarningModal data={warningData} onClose={() => setWarningData({ ...warningData, isOpen: false })} nodes={appNodes} />
      {showExportModal && <ExportModal branches={appBranches} onClose={() => setShowExportModal(false)} onExport={handleExportConfig} />}
      <BranchDetailPopup branch={activeBranchId ? appBranches.find((b: any) => b.id === activeBranchId) : null} onClose={() => setActiveBranchId(null)} />
      <PrintReport userState={userState} getProgress={getProgress} projectData={projectData} config={reportConfig} branches={appBranches} nodes={appNodes} />
      <AiChat nodes={appNodes} branches={appBranches} projectData={projectData} />

      {/* Tool Control Bar (formerly Nav) */}
      <div className="toolbar sticky top-[64px] left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm h-14 transition-all duration-200 print:hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex justify-between items-center">
            {/* Left Controls: Search */}
            <div className="relative w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><i className="fas fa-search text-slate-400 text-xs"></i></div>
                <input type="text" placeholder="Search leaves..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="block w-full pl-8 pr-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-xs transition-colors" />
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

            {/* Right Controls */}
            <div className="flex items-center space-x-2 md:space-x-4">
                <div className="hidden xl:flex items-center bg-slate-100 dark:bg-slate-800 rounded p-1 border border-slate-200 dark:border-slate-700">
                    <button onClick={handleSaveProject} className="w-8 h-7 flex items-center justify-center rounded text-xs transition-all text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400" title="Projekt speichern (JSON)"><i className="fas fa-download"></i></button>
                    <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                    <button onClick={handleLoadClick} className="w-8 h-7 flex items-center justify-center rounded text-xs transition-all text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400" title="Projekt laden (JSON)"><i className="fas fa-upload"></i></button>
                </div>
                {viewMode === 'map' && !isMobile && (
                    <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 rounded p-1 border border-slate-200 dark:border-slate-700">
                        <button onClick={handleZoomOut} className="w-8 h-7 flex items-center justify-center rounded text-xs transition-all text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" title="Zoom Out"><i className="fas fa-minus"></i></button>
                        <span onClick={handleZoomReset} className="text-[10px] font-medium text-slate-600 dark:text-slate-300 w-8 text-center cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-400" title="Reset Zoom">{Math.round(zoomLevel * 100)}%</span>
                        <button onClick={handleZoomIn} className="w-8 h-7 flex items-center justify-center rounded text-xs transition-all text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" title="Zoom In"><i className="fas fa-plus"></i></button>
                    </div>
                )}
                <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded p-1 border border-slate-200 dark:border-slate-700">
                      <button onClick={() => setViewMode('map')} className={`w-8 h-7 flex items-center justify-center rounded text-xs transition-all ${viewMode === 'map' ? 'bg-white dark:bg-slate-600 text-emerald-700 dark:text-emerald-400 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`} title="Netzwerk"><i className="fas fa-project-diagram"></i></button>
                      <button onClick={() => setViewMode('list')} className={`w-8 h-7 flex items-center justify-center rounded text-xs transition-all ${viewMode === 'list' ? 'bg-white dark:bg-slate-600 text-emerald-700 dark:text-emerald-400 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`} title="Liste"><i className="fas fa-list-ul"></i></button>
                </div>
                <button onClick={toggleTheme} className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">{isDarkMode ? <i className="fas fa-sun text-amber-400"></i> : <i className="fas fa-moon"></i>}</button>
                <button onClick={handleShareMail} className="text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800 w-8 h-8 rounded flex items-center justify-center transition-colors mr-1" title="Per E-Mail teilen"><i className="fas fa-envelope"></i></button>
                {isGardenerMode && (
                    <button onClick={() => setShowExportModal(true)} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs font-medium flex items-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1.5 rounded transition-colors"><i className="fas fa-print mr-2"></i> Report</button>
                )}
                <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded p-1 border border-slate-200 dark:border-slate-700">
                  <button onClick={() => setIsGardenerMode(false)} className={`px-3 py-1 rounded text-xs font-medium transition-all ${!isGardenerMode ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-500' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>View</button>
                  <button onClick={() => setIsGardenerMode(true)} className={`px-3 py-1 rounded text-xs font-medium transition-all flex items-center ${isGardenerMode ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}><i className="fas fa-check-square mr-1.5"></i> Assess</button>
                </div>
                <div className="hidden lg:flex items-center space-x-4 ml-2 pl-4 border-l border-slate-300 dark:border-slate-700 h-6">
                    <a href="https://qualitytreepro-836825617090.us-west1.run.app" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-600 hover:text-emerald-800 dark:text-emerald-500 dark:hover:text-emerald-400 uppercase tracking-wider transition-colors">PRO</a>
                    <a href="https://www.quality-tree.com/#/author" className="text-xs font-bold text-slate-500 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400 uppercase tracking-wider transition-colors">About</a>
                    <a href="https://www.quality-tree.com/#/author" className="text-xs font-bold text-slate-500 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400 uppercase tracking-wider transition-colors">Contact</a>
                </div>
            </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col">
        <Hero onExplore={scrollToTree} progress={getProgress()} nodeCount={appNodes.length} completedCount={getCompletedCount()} projectData={projectData} setProjectData={setProjectData} />

        <div className="flex-grow">
          {viewMode === 'map' && (
            <>
              <div className={`print:hidden ${isMobile ? 'block' : 'hidden'}`}>
                <div id="mobile-branch-selector" className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4">
                    {!selectedMobileBranchId ? (
                        <div className="max-w-md mx-auto space-y-4">
                            <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-6 text-center">Disziplin wählen</h2>
                            {appBranches.map((branch: any) => (
                                <div key={branch.id} onClick={() => setSelectedMobileBranchId(branch.id)} className="p-4 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center space-x-4 cursor-pointer active:scale-95 transition-transform">
                                    <div className="w-10 h-10 rounded bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400"><i className={`fas ${branch.icon} text-base`}></i></div>
                                    <div><h3 className="font-bold text-base text-slate-900 dark:text-white">{branch.name}</h3></div>
                                    <div className="flex-1 text-right"><i className="fas fa-chevron-right text-slate-300 dark:text-slate-600"></i></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="max-w-md mx-auto">
                            <button onClick={() => setSelectedMobileBranchId(null)} className="mb-6 flex items-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium text-sm"><i className="fas fa-arrow-left mr-2"></i> Zurück zur Übersicht</button>
                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-800">
                                {levels.map(level => {
                                     const branchNodes = appNodes.filter((n: any) => n.branchId === selectedMobileBranchId && n.level === level.id);
                                     if (branchNodes.length === 0) return null;
                                     return (
                                         <div key={level.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                             <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{level.id}</span>
                                             </div>
                                             <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4"><div className="space-y-4">{branchNodes.map((node: any) => renderNodeCard(node))}</div></div>
                                         </div>
                                     );
                                })}
                            </div>
                        </div>
                    )}
                </div>
              </div>
              <div className="relative w-full">
                  <button onClick={() => scrollGrid(-1)} className="fixed left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white dark:bg-slate-800 shadow-lg rounded-full flex items-center justify-center text-slate-600 dark:text-slate-200 hover:scale-110 transition-transform scroll-btn border border-slate-200 dark:border-slate-700 hidden md:flex" aria-label="Scroll left"><i className="fas fa-chevron-left"></i></button>
                  <button onClick={() => scrollGrid(1)} className="fixed right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white dark:bg-slate-800 shadow-lg rounded-full flex items-center justify-center text-slate-600 dark:text-slate-200 hover:scale-110 transition-transform scroll-btn border border-slate-200 dark:border-slate-700 hidden md:flex" aria-label="Scroll right"><i className="fas fa-chevron-right"></i></button>
                  <div id="tree-grid-container" ref={gridRef} className={`relative w-full overflow-auto bg-slate-50 dark:bg-slate-950 pt-12 pb-32 px-8 min-h-screen print:hidden ${isMobile ? 'hidden' : 'block'}`}>
                        <div style={{ transform: zoomLevel === 1 ? 'none' : `scale(${zoomLevel})`, transformOrigin: 'top left', width: 'fit-content', minWidth: '100%', height: 'fit-content' }}>
                          <div className="relative inline-block min-w-full">
                              <ConnectingLines nodeRefs={nodeRefs} hoveredNode={hoveredNodeId} containerRef={gridRef} />
                              <div className="inline-grid gap-x-8 gap-y-8 relative z-10" style={{ gridTemplateColumns: `250px repeat(${levels.length}, minmax(160px, 1fr))` }}>
                              <div className="sticky top-0 left-0 z-50 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 h-10 flex items-center justify-center text-xs font-bold text-slate-400 tracking-widest uppercase border-r">AST</div>
                              {levels.map(level => (
                                  <div key={level.id} className="sticky top-0 z-40 text-center pb-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Level {level.id}</span>
                                  </div>
                              ))}
                              {appBranches.map((branch: any) => (
                                  <React.Fragment key={branch.id}>
                                      <div className="sticky left-0 z-30 flex items-center bg-slate-50 dark:bg-slate-950 pr-4 border-r border-slate-200 dark:border-slate-800 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
                                          <div 
                                              onClick={() => setActiveBranchId(branch.id)}
                                              className="flex items-center space-x-3 w-full p-4 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                                          >
                                              <div className="w-8 h-8 rounded bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 flex-shrink-0"><i className={`fas ${branch.icon}`}></i></div>
                                              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight flex-1">{branch.name}</h3>
                                              <i className="fas fa-info-circle text-slate-300 dark:text-slate-600 group-hover:text-emerald-500 transition-colors"></i>
                                          </div>
                                      </div>
                                      {levels.map(level => {
                                          const cellNodes = appNodes.filter((n: any) => n.branchId === branch.id && n.level === level.id);
                                          return (
                                              <div key={`${branch.id}-${level.id}`} className="flex flex-col items-center justify-center space-y-2 min-h-[100px]">
                                                  {cellNodes.length === 0 && <div className="w-full h-full border border-dashed border-slate-200 dark:border-slate-800 rounded-lg opacity-30"></div>}
                                                  {cellNodes.map((node: any) => renderNodeCard(node))}
                                              </div>
                                          );
                                      })}
                                  </React.Fragment>
                              ))}
                              </div>
                          </div>
                        </div>
                  </div>
              </div>
            </>
          )}

          {viewMode === 'list' && (
              <div id="list-view-container">
                <ListView branches={appBranches} nodes={appNodes} userState={userState} onNodeClick={setActiveNodeId} isGardener={isGardenerMode} onStatusChange={(id: string, status: string) => handleStatusChangeAttempt(id, status)} onBranchInfoClick={setActiveBranchId} />
              </div>
          )}
        </div>
      </div>

      {activeNodeId && (
        <DetailPopup node={activeNode} onClose={() => setActiveNodeId(null)} onStatusChange={(id: string, status: string, data: any) => handleStatusChangeAttempt(id, status, data, () => setActiveNodeId(null))} onOkrToggle={(idx: number) => toggleNodeOkr(activeNodeId, idx)} nodeState={getNodeState(activeNodeId)} isGardener={isGardenerMode} isMobile={isMobile} allNodes={appNodes} userState={userState} onNavigate={setActiveNodeId} branches={appBranches} />
      )}
    </div>
  );
};

export default AppTool;
