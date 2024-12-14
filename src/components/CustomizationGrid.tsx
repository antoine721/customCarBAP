import React from 'react';
import { CustomizationOption } from '../types/car';

interface CustomizationGridProps {
  options: CustomizationOption[];
  selectedOption: CustomizationOption | null;
  onSelect: (option: CustomizationOption) => void;
}

export const CustomizationGrid: React.FC<CustomizationGridProps> = ({
  options,
  selectedOption,
  onSelect,
}) => {
  return (
    <div className="flex gap-4 p-4">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option)}
          className={`
            aspect-square rounded-lg h-24 overflow-hidden border-2 transition-all
            ${selectedOption?.id === option.id
              ? 'border-blue-500 scale-105 shadow-lg'
              : 'border-gray-200 hover:border-gray-300'
            }
          `}
        >
          <img
            src={option.preview}
            alt={option.name}
            className="h-24 object-cover"
          />
        </button>
      ))}
    </div>
  );
};