import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CarState } from '../types/car';
import { RotateCw } from 'lucide-react';

interface CarPreviewProps {
  carState: CarState;
  onToggleView: () => void;
}

export const CarPreview: React.FC<CarPreviewProps> = ({ carState, onToggleView }) => {
  const { selectedModel, color, wheels, steering, seats, motif, currentView } = carState;

  if (!selectedModel) return null;

  const layers = [
    { id: 'base', image: selectedModel.image },
    color && { id: 'color', image: color.layer },
    wheels && { id: 'wheels', image: wheels.layer },
    steering && { id: 'steering', image: steering.layer },
    seats && { id: 'seats', image: seats.layer },
    motif && { id: 'motif', image: motif.layer },
  ].filter(Boolean);

  return (
    <div>
      
      <div className="relative h-72 ">
        <AnimatePresence mode="wait">
          {layers.map((layer) => (
            <motion.img
              key={layer.id}
              src={layer.image}
              alt={`${layer.id} layer`}
              className="absolute inset-0 w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};