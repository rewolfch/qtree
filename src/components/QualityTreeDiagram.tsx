import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { AppToolConfig, AppToolCell, AppToolLane } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { ZoomIn, ZoomOut, Maximize, Check, Loader2, GitBranch, Package, Rocket, Bot, Database, UserCheck, ClipboardList, Microscope, Box } from 'lucide-react';

interface QualityTreeDiagramProps {
  data: AppToolConfig;
  onNodeClick: (node: AppToolCell) => void;
  onLaneClick: (lane: AppToolLane) => void;
  selectedNodeId?: string;
  assessments?: Record<string, { status: 'todo' | 'in-progress' | 'done', checkedCriteria: boolean[] }>;
}

const CELL_WIDTH = 220;
const CELL_HEIGHT = 72;
const GAP_X = 40;
const GAP_Y = 16;
const LANE_HEADER_WIDTH = 240;
const HEADER_HEIGHT = 50;

const getIconForLane = (iconName?: string, label?: string) => {
  // Priority: explicit icon name
  if (iconName === "git-branch") return <GitBranch className="h-5 w-5 text-emerald-600" />;
  if (iconName === "microscope") return <Microscope className="h-5 w-5 text-emerald-600" />;
  if (iconName === "package") return <Package className="h-5 w-5 text-emerald-600" />;
  if (iconName === "rocket") return <Rocket className="h-5 w-5 text-emerald-600" />;
  if (iconName === "bot") return <Bot className="h-5 w-5 text-emerald-600" />;
  if (iconName === "database") return <Database className="h-5 w-5 text-emerald-600" />;
  if (iconName === "user-check") return <UserCheck className="h-5 w-5 text-emerald-600" />;
  if (iconName === "clipboard-list") return <ClipboardList className="h-5 w-5 text-emerald-600" />;

  // Fallback: label matching (legacy support)
  if (label) {
    if (label.includes("Config")) return <GitBranch className="h-5 w-5 text-emerald-600" />;
    if (label.includes("Unit Test")) return <Microscope className="h-5 w-5 text-emerald-600" />;
    if (label.includes("Build")) return <Package className="h-5 w-5 text-emerald-600" />;
    if (label.includes("Deployment")) return <Rocket className="h-5 w-5 text-emerald-600" />;
    if (label.includes("Automation")) return <Bot className="h-5 w-5 text-emerald-600" />;
    if (label.includes("Virtualization")) return <Database className="h-5 w-5 text-emerald-600" />;
    if (label.includes("Manual")) return <UserCheck className="h-5 w-5 text-emerald-600" />;
    if (label.includes("Management")) return <ClipboardList className="h-5 w-5 text-emerald-600" />;
  }
  
  return <Box className="h-5 w-5 text-slate-400" />;
};

const QualityTreeDiagram: React.FC<QualityTreeDiagramProps> = ({ data, onNodeClick, onLaneClick, selectedNodeId, assessments = {} }) => {
  const { t } = useLanguage();
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Calculate grid dimensions
  const maxCol = data.cells.reduce((max, cell) => {
    const colIndex = parseInt(cell.id.match(/C(\d+)/)?.[1] || "0");
    return Math.max(max, colIndex);
  }, 0);
  
  // Calculate total height based on the last lane's endRow
  const maxRow = data.lanes[data.lanes.length - 1].endRow;
  
  const totalWidth = LANE_HEADER_WIDTH + (maxCol + 1) * (CELL_WIDTH + GAP_X) + 100;
  const totalHeight = maxRow * (CELL_HEIGHT + GAP_Y) + GAP_Y + HEADER_HEIGHT + 50;

  // Ref to track current state for event handlers without re-binding
  const stateRef = useRef({ scale, position });
  
  // Update ref when state changes
  useEffect(() => {
    stateRef.current = { scale, position };
  }, [scale, position]);

  const fitToScreen = React.useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { clientWidth, clientHeight } = container;
    const padding = 40; // More breathing room
    
    const availableWidth = clientWidth - padding;
    const availableHeight = clientHeight - padding;

    const scaleX = availableWidth / totalWidth;
    const scaleY = availableHeight / totalHeight;

    // Fit entire diagram, cap at 2.0 for better visibility on large screens
    const newScale = Math.min(scaleX, scaleY, 2.0);
    
    // Center the diagram
    const scaledWidth = totalWidth * newScale;
    const scaledHeight = totalHeight * newScale;
    
    const x = (clientWidth - scaledWidth) / 2;
    const y = (clientHeight - scaledHeight) / 2;

    setScale(newScale);
    setPosition({ x, y });
  }, [totalWidth, totalHeight]);

  // Initial fit
  useLayoutEffect(() => {
    fitToScreen();
  }, [fitToScreen]);

  // Auto-fit on container resize
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        fitToScreen();
      });
    });
    
    observer.observe(container);
    
    return () => observer.disconnect();
  }, [fitToScreen]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const { scale, position } = stateRef.current;
      
      // Calculate new scale
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      const newScale = Math.min(Math.max(0.1, scale * delta), 3);
      
      // Zoom towards mouse pointer
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate new position to keep the point under mouse stationary
      const newX = mouseX - (mouseX - position.x) * (newScale / scale);
      const newY = mouseY - (mouseY - position.y) * (newScale / scale);

      setPosition({ x: newX, y: newY });
      setScale(newScale);
    };

    // Add non-passive event listener to prevent page scroll
    container.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', onWheel);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Helper to get coordinates for a cell ID (R{row}C{col})
  const getCellCoords = (id: string) => {
    const rowMatch = id.match(/R(\d+)/);
    const colMatch = id.match(/C(\d+)/);
    const row = rowMatch ? parseInt(rowMatch[1]) : 1;
    const col = colMatch ? parseInt(colMatch[1]) : 1;
    
    // Adjust row to be 0-indexed for calculation (R1 -> index 0)
    const rowIndex = row - 1;
    // Adjust col to be 0-indexed for calculation (C1 -> index 0)
    const colIndex = col - 1;
    
    return {
      x: LANE_HEADER_WIDTH + colIndex * (CELL_WIDTH + GAP_X),
      y: rowIndex * (CELL_HEIGHT + GAP_Y) + GAP_Y + HEADER_HEIGHT
    };
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-50 border border-slate-200 rounded-xl select-none" id="diagram-container">
      {/* Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 bg-white p-2 rounded-lg shadow-md border border-slate-100">
        <button onClick={() => setScale(s => Math.min(3, s + 0.1))} className="p-2 hover:bg-slate-100 rounded-md text-slate-600" title="Zoom In">
          <ZoomIn className="h-5 w-5" />
        </button>
        <button onClick={() => setScale(s => Math.max(0.1, s - 0.1))} className="p-2 hover:bg-slate-100 rounded-md text-slate-600" title="Zoom Out">
          <ZoomOut className="h-5 w-5" />
        </button>
        <button onClick={fitToScreen} className="p-2 hover:bg-slate-100 rounded-md text-slate-600" title="Fit to Screen">
          <Maximize className="h-5 w-5" />
        </button>
      </div>

      <div 
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div 
          style={{ 
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: '0 0',
            width: totalWidth,
            height: totalHeight,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
          }}
          className="relative p-10"
        >
          {/* Column Headers (Levels) */}
          <div className="absolute top-0 left-0 w-full h-[50px] flex pointer-events-none border-b border-slate-100">
             <div 
                className="absolute top-0 left-0 font-bold text-slate-400 text-xs uppercase tracking-wider text-right pr-8 flex items-center justify-end"
                style={{ width: LANE_HEADER_WIDTH, height: HEADER_HEIGHT }}
              >
                AST Levels
              </div>
              {Array.from({ length: maxCol }).map((_, i) => {
                return (
                  <div 
                    key={i} 
                    className="absolute top-0 flex items-center justify-center"
                    style={{
                      left: LANE_HEADER_WIDTH + i * (CELL_WIDTH + GAP_X),
                      width: CELL_WIDTH,
                      height: HEADER_HEIGHT
                    }}
                  >
                    <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                      Level {i + 1}
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Lanes Background */}
          {data.lanes.map((lane, idx) => {
            const startY = (lane.startRow - 1) * (CELL_HEIGHT + GAP_Y) + HEADER_HEIGHT;
            const height = (lane.endRow - lane.startRow + 1) * (CELL_HEIGHT + GAP_Y);
            
            return (
              <div 
                key={idx}
                className="absolute left-0 w-full flex items-center group cursor-pointer hover:bg-slate-50/50 transition-colors"
                style={{ 
                  top: startY, 
                  height: height 
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onLaneClick(lane);
                }}
              >
                <div 
                  className="absolute left-0 top-0 w-full h-full border-b border-slate-100 pointer-events-none"
                />
                
                <div 
                  className="flex items-center justify-end px-6 h-full"
                  style={{ width: LANE_HEADER_WIDTH }}
                >
                  <div className="flex items-center gap-3 w-full justify-end">
                    <span className="font-bold text-slate-600 text-sm text-right leading-tight group-hover:text-brand-600 transition-colors">
                      {lane.label}
                    </span>
                    <div className="p-2 bg-white border border-slate-100 rounded-lg shrink-0 shadow-sm group-hover:border-brand-200 group-hover:shadow-md transition-all">
                      {getIconForLane(lane.icon, lane.label)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Arrows SVG Layer */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#cbd5e1" />
              </marker>
              <marker id="arrowhead-active" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
              </marker>
            </defs>
            {data.arrows.map((arrow, idx) => {
              const start = getCellCoords(arrow.from);
              const end = getCellCoords(arrow.to);
              
              // Adjust start/end to be at edges of cards
              const startX = start.x + CELL_WIDTH;
              const startY = start.y + CELL_HEIGHT / 2;
              const endX = end.x;
              const endY = end.y + CELL_HEIGHT / 2;

              const isRelated = arrow.from === hoveredNodeId || arrow.to === hoveredNodeId;

              return (
                <g key={idx}>
                  {/* Base Line */}
                  <path
                    d={`M ${startX} ${startY} C ${startX + 30} ${startY}, ${endX - 30} ${endY}, ${endX} ${endY}`}
                    stroke={isRelated ? "#93c5fd" : "#cbd5e1"}
                    strokeWidth={isRelated ? "3" : "2"}
                    fill="none"
                    markerEnd={isRelated ? "url(#arrowhead-active)" : "url(#arrowhead)"}
                    className="transition-colors duration-300"
                  />
                  {/* Animated Flow Line - Only visible when related */}
                  {isRelated && (
                    <motion.path
                      d={`M ${startX} ${startY} C ${startX + 30} ${startY}, ${endX - 30} ${endY}, ${endX} ${endY}`}
                      stroke="#3b82f6"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "linear"
                      }}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Cells */}
          {data.cells.map((cell) => {
            const coords = getCellCoords(cell.id);
            const isSelected = selectedNodeId === cell.id;
            const status = assessments[cell.id]?.status || 'todo';
            const isHovered = hoveredNodeId === cell.id;
            
            let statusClasses = '';
            let statusIcon = null;

            if (status === 'done') {
              statusClasses = 'ring-2 ring-emerald-500 bg-emerald-50 border-emerald-200 text-slate-900 hover:border-emerald-300';
              statusIcon = <div className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full p-1 shadow-sm z-30"><Check className="h-3 w-3" /></div>;
            } else if (status === 'in-progress') {
              statusClasses = 'ring-2 ring-amber-500 bg-amber-50 border-amber-200 text-slate-900 hover:border-amber-300';
              statusIcon = <div className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full p-1 shadow-sm z-30"><Loader2 className="h-3 w-3 animate-spin" /></div>;
            }

            // Uniform style for all cells
            const baseClasses = 'bg-white border-slate-200 text-slate-700 hover:border-brand-300 hover:shadow-md';
            
            const levelIndex = parseInt(cell.id.match(/C(\d+)/)?.[1] || "0") - 1;

            return (
              <motion.div
                key={cell.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02, y: -1 }}
                onMouseEnter={() => setHoveredNodeId(cell.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  onNodeClick(cell);
                }}
                className={`absolute z-10 px-3 py-2 rounded-lg border cursor-pointer shadow-sm transition-all duration-200 flex flex-col justify-center
                  ${isSelected 
                    ? 'ring-2 ring-brand-500 ring-offset-2 shadow-lg z-20' 
                    : isHovered ? 'shadow-lg ring-1 ring-brand-200 z-20' : ''
                  }
                  ${status !== 'todo' ? statusClasses : baseClasses}
                `}
                style={{
                  left: coords.x,
                  top: coords.y,
                  width: CELL_WIDTH,
                  height: CELL_HEIGHT
                }}
              >
                <div className="flex items-start justify-between gap-2 h-full">
                  <div className="flex flex-col justify-center h-full flex-1 min-w-0">
                    <div className="text-[9px] font-bold text-slate-300 uppercase tracking-wider mb-0.5">
                      L{levelIndex + 1}
                    </div>
                    <div className="font-bold text-xs leading-snug line-clamp-2">
                      {t(cell.label)}
                    </div>
                  </div>
                  
                  {statusIcon && (
                    <div className="shrink-0 -mr-1 -mt-1">
                      {statusIcon}
                    </div>
                  )}
                </div>
                
                {isSelected && status === 'todo' && (
                  <div className="absolute -top-1 -right-1 bg-brand-500 text-white rounded-full p-0.5 shadow-sm z-30">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping absolute top-0.5 left-0.5 opacity-75"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full relative"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QualityTreeDiagram;
