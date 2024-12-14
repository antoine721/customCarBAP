import React from 'react';
import { motion } from 'framer-motion';
import { LayerType } from '../../types/layers';

interface CarLayerProps {
  id: LayerType;
  image: string;
  zIndex: number;
  isTransitioning: boolean;
}

export const CarLayer: React.FC<CarLayerProps> = ({ 
  id, 
  image, 
  zIndex, 
  isTransitioning 
}) => {
  return (
    <motion.img
      key={`${id}-${image}`}
      src={image}
      alt={`${id} layer`}
      className="absolute inset-0 w-full h-full object-contain"
      style={{ zIndex }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        rotateY: isTransitioning ? 180 : 0 
      }}
      exit={{ 
        opacity: 0,
        rotateY: isTransitioning ? -180 : 0 
      }}
      transition={{ 
        duration: 0.4,
        ease: "easeInOut"
      }}
    />
  );
};