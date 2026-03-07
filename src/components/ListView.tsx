import React from 'react';
import { AppToolConfig, AppToolCell, AppToolLane } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

interface ListViewProps {
  data: AppToolConfig;
  onNodeClick: (node: AppToolCell) => void;
  onLaneClick?: (lane: AppToolLane) => void;
  selectedNodeId?: string;
}

const ListView: React.FC<ListViewProps> = ({ data, onNodeClick, onLaneClick, selectedNodeId }) => {
  const { t } = useLanguage();

  // Helper to get cells for a lane
  const getCellsForLane = (laneIndex: number) => {
    const lane = data.lanes[laneIndex];
    return data.cells.filter(cell => {
      const rowMatch = cell.id.match(/R(\d+)/);
      const row = rowMatch ? parseInt(rowMatch[1]) : 0;
      return row >= lane.startRow && row <= lane.endRow;
    });
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-slate-50 p-6 space-y-8">
      {data.lanes.map((lane, idx) => {
        const cells = getCellsForLane(idx);
        if (cells.length === 0) return null;

        return (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div 
              className={`bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center ${onLaneClick ? 'cursor-pointer hover:bg-slate-100 transition-colors' : ''}`}
              onClick={() => onLaneClick && onLaneClick(lane)}
            >
              <div>
                <h3 className="font-bold text-slate-800 text-lg">{lane.label}</h3>
                <p className="text-slate-500 text-sm mt-1">{lane.details.description}</p>
              </div>
              <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded-full">
                {cells.length} Items
              </span>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cells.map(cell => {
                const isSelected = selectedNodeId === cell.id;
                 const colorClasses = {
                  'yellow': 'bg-amber-50 border-amber-200 hover:border-amber-300',
                  'blue': 'bg-blue-50 border-blue-200 hover:border-blue-300',
                  'light-blue': 'bg-sky-50 border-sky-200 hover:border-sky-300',
                }[cell.class || ''] || 'bg-white border-slate-200 hover:border-brand-300';

                return (
                  <motion.div
                    key={cell.id}
                    whileHover={{ y: -2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNodeClick(cell);
                    }}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 relative
                      ${isSelected ? 'ring-2 ring-brand-500 ring-offset-2' : ''}
                      ${colorClasses}
                    `}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-slate-400">{cell.id}</span>
                      {cell.isRoot && (
                        <span className="bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider">
                          Root
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2">{t(cell.label)}</h4>
                    <p className="text-sm text-slate-600 line-clamp-2">{t(cell.tooltip)}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
