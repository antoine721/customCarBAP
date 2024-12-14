import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CarState } from '../../types/car';
import { createCarLayers } from '../../utils/layerUtils';
import { ViewToggle } from './ViewToggle';
import { CarLayer } from './CarLayer';

interface CarPreviewProps {
  carState: CarState;
  onToggleView: () => void;
}

export const CarPreview: React.FC<CarPreviewProps> = ({ carState, onToggleView }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handleViewToggle = () => {
    setIsTransitioning(true);
    onToggleView();
  };

  if (!carState.selectedModel) return null;

  const layers = createCarLayers(carState);

  return (
    <div className="relative w-full aspect-video max-w-3xl mx-auto bg-gray-100 rounded-lg overflow-hidden">
      <ViewToggle 
        currentView={carState.currentView} 
        onToggle={handleViewToggle} 
      />
      
      <div className="relative w-full h-full perspective-1000">
        <AnimatePresence mode="wait">
          {layers.map((layer) => (
            <CarLayer 
              key={layer.id} 
              {...layer} 
              isTransitioning={isTransitioning}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};