import React, { useState } from 'react';
import { AppNode } from '../types';

interface ListViewProps {
  branches: any[];
  nodes: AppNode[];
  userState: any;
  onNodeClick: (id: string) => void;
  isGardener: boolean;
  onStatusChange: (id: string, status: string) => void;
  onBranchInfoClick: (branch: any) => void;
}

const ListView: React.FC<ListViewProps> = ({ branches, nodes, userState, onNodeClick, isGardener, onStatusChange, onBranchInfoClick }) => {
    const [collapsed, setCollapsed] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        branches.forEach((b: any) => initial[b.id] = true);
        return initial;
    });

    const toggleCollapse = (branchId: string) => {
        setCollapsed(prev => ({ ...prev, [branchId]: !prev[branchId] }));
    };

    const allCollapsed = branches.every((b: any) => collapsed[b.id]);

    const toggleAll = () => {
        const newState: Record<string, boolean> = {};
        branches.forEach((b: any) => newState[b.id] = !allCollapsed);
        setCollapsed(newState);
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 pb-32">
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
                        className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors select-none group"
                        >
                            <div className="flex items-center cursor-pointer" onClick={() => toggleCollapse(branch.id)}>
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl mr-4 pointer-events-none">
                                    <i className={`fas ${branch.icon}`}></i>
                                </div>
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        {branch.name}
                                        <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center ml-2 pointer-events-none">
                                            <i className={`fas fa-chevron-${isCollapsed ? 'down' : 'up'} text-xs text-slate-500`}></i>
                                        </div>
                                        </h2>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); onBranchInfoClick(branch); }}
                                            className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-emerald-600 transition-colors"
                                        >
                                            <i className="fas fa-info-circle"></i>
                                        </button>
                                    </div>
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

export default ListView;
