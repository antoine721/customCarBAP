import React from 'react';
import { RotateCw } from 'lucide-react';
import { ViewAngle } from '../../types/car';

interface ViewToggleProps {
  currentView: ViewAngle;
  onToggle: () => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="absolute top-4 right-4 z-50 bg-white/80 p-3 rounded-full shadow-lg 
                 hover:bg-white transition-all duration-200 ease-in-out
                 group flex items-center gap-2"
      aria-label={`Switch to ${currentView === 'front' ? 'back' : 'front'} view`}
    >
      <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        {currentView === 'front' ? 'Vue arrière' : 'Vue avant'}
      </span>
      <RotateCw className="w-5 h-5" />
    </button>
  );
};