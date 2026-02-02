
import React from 'react';
import { ExternalLink, AlertCircle } from 'lucide-react';

const AppTool: React.FC = () => {
  const APP_URL = "https://quality-tree-framework-836825617090.us-west1.run.app/";

  return (
    <div className="w-full flex-grow flex flex-col h-[calc(100vh-64px)] relative bg-slate-50">
      
      {/* Header Bar for Better UX/Navigation */}
      <div className="bg-white border-b border-slate-200 px-6 py-3 flex justify-between items-center shadow-sm z-10">
        <div>
          <h1 className="text-sm font-bold text-slate-900">Quality Tree Assessment App</h1>
          <p className="text-xs text-slate-500">Powered by Google Cloud Run</p>
        </div>
        <a 
          href={APP_URL} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 text-xs font-bold bg-brand-50 text-brand-700 hover:bg-brand-100 px-3 py-2 rounded-lg transition-colors"
        >
          <ExternalLink className="h-3.5 w-3.5" /> In neuem Fenster öffnen
        </a>
      </div>

      {/* Iframe with fallback messaging logic beneath it (z-index) */}
      <div className="relative flex-grow w-full h-full">
         <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 z-0">
            <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-4 animate-pulse">
               <AlertCircle className="h-6 w-6 text-slate-400" />
            </div>
            <p className="text-sm font-medium">Lade App...</p>
            <p className="text-xs mt-2 max-w-md text-center px-4">
              Falls die App nicht lädt, nutzen Sie bitte den Button oben rechts "In neuem Fenster öffnen".
            </p>
         </div>

         <iframe 
          src={APP_URL} 
          className="absolute inset-0 w-full h-full border-none z-10 bg-transparent"
          title="Quality Tree Framework App"
          allow="clipboard-write"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </div>
    </div>
  );
};

export default AppTool;
