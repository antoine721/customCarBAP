import React from 'react';
import { CarModel } from '../types/car';

interface ModelCardProps {
  model: CarModel;
  isSelected: boolean;
}

export const ModelCard: React.FC<ModelCardProps> = ({ model, isSelected }) => {
  return (
    <div
      className={`
        relative rounded-lg overflow-hidden transition-all duration-300
        ${isSelected ? 'ring-4 ring-blue-500 scale-105' : 'hover:scale-102'}
      `}
    >
      <img
        src={model.image}
        alt={model.name}
        className="w-full h-64 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="text-xl font-bold text-white">{model.name}</h3>
      </div>
    </div>
  );
};