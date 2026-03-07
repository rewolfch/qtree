import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { branches } from '../data/framework';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  GitBranch, Microscope, Package, Rocket, Bot, Database, UserCheck, ClipboardList, 
  Search, Home, Menu, X, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  "git-branch": <GitBranch className="h-4 w-4" />,
  "microscope": <Microscope className="h-4 w-4" />,
  "package": <Package className="h-4 w-4" />,
  "rocket": <Rocket className="h-4 w-4" />,
  "bot": <Bot className="h-4 w-4" />,
  "database": <Database className="h-4 w-4" />,
  "user-check": <UserCheck className="h-4 w-4" />,
  "clipboard-list": <ClipboardList className="h-4 w-4" />,
};

interface DashboardLayoutProps {
  children: React.ReactNode;
  rightSidebar?: React.ReactNode;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  rightSidebar,
  title,
  subtitle,
  actions
}) => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedBranch, setExpandedBranch] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleBranch = (branchId: string) => {
    setExpandedBranch(expandedBranch === branchId ? null : branchId);
  };

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  // Filter branches for search
  const filteredBranches = branches.filter(b => 
    t(b.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.levels.some(l => t(l.title).toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex h-[calc(100vh-64px)] bg-slate-50 overflow-hidden">
      {/* Left Sidebar - Persistent Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 pt-16 md:pt-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-slate-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search framework..." 
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Navigation Tree */}
          <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
            <Link 
              to="/framework" 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/framework' 
                  ? 'bg-brand-50 text-brand-700' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Home className="h-4 w-4" />
              Overview
            </Link>

            <div className="pt-4 pb-2 px-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Branches
            </div>

            {filteredBranches.map(branch => {
              const isBranchActive = isActive(`/framework/${branch.id}`);
              const isExpanded = expandedBranch === branch.id || isBranchActive || searchQuery.length > 0;
              
              return (
                <div key={branch.id} className="space-y-1">
                  <button
                    onClick={() => toggleBranch(branch.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors group ${
                      isBranchActive 
                        ? 'bg-slate-100 text-slate-900' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`p-1 rounded-md ${isBranchActive ? 'bg-white shadow-sm text-brand-600' : 'text-slate-400 group-hover:text-slate-600'}`}>
                        {iconMap[branch.icon]}
                      </span>
                      <span className="truncate">{t(branch.title)}</span>
                    </div>
                    <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-10 pr-2 py-1 space-y-0.5 border-l border-slate-100 ml-5">
                          {/* Link to Branch Detail */}
                          <Link
                            to={`/framework/${branch.id}`}
                            className={`block px-3 py-1.5 rounded-md text-xs transition-colors ${
                              location.pathname === `/framework/${branch.id}`
                                ? 'bg-brand-50 text-brand-700 font-medium'
                                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                          >
                            Overview
                          </Link>
                          
                          {/* Levels */}
                          {branch.levels.map(level => (
                            <Link
                              key={level.id}
                              to={`/framework/${branch.id}/level/${level.id}`}
                              className={`block px-3 py-1.5 rounded-md text-xs transition-colors ${
                                location.pathname === `/framework/${branch.id}/level/${level.id}`
                                  ? 'bg-brand-50 text-brand-700 font-medium'
                                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                              }`}
                            >
                              Level {level.id}: {t(level.title)}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          
          {/* Footer of Sidebar */}
          <div className="p-4 border-t border-slate-100 text-xs text-slate-400 text-center">
            v2.0.0 • Quality Tree Framework
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-200 bg-white">
          <span className="font-bold text-slate-900">QTF Explorer</span>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="max-w-[1600px] mx-auto p-6 lg:p-10">
            {/* Page Header */}
            {(title || actions) && (
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                <div className="max-w-3xl">
                  {title && (
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
                      {title}
                    </h1>
                  )}
                  {subtitle && (
                    <p className="text-lg text-slate-500 leading-relaxed">
                      {subtitle}
                    </p>
                  )}
                </div>
                {actions && (
                  <div className="flex items-center gap-3 shrink-0">
                    {actions}
                  </div>
                )}
              </div>
            )}

            {/* Main Content Grid */}
            <div className="grid grid-cols-12 gap-8">
              {/* Center Content */}
              <div className={`col-span-12 ${rightSidebar ? 'lg:col-span-8 xl:col-span-9' : ''}`}>
                {children}
              </div>

              {/* Right Sidebar (Context) */}
              {rightSidebar && (
                <div className="col-span-12 lg:col-span-4 xl:col-span-3 space-y-6">
                  <div className="sticky top-6 space-y-6">
                    {rightSidebar}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
