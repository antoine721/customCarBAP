import React from 'react';
import { CarState } from '../../types/car';
import { formatPrice } from '../../utils/formatters';
import { SummaryItem } from './SummaryItem';

interface ConfigurationSummaryProps {
  carState: CarState;
}

export const ConfigurationSummary: React.FC<ConfigurationSummaryProps> = ({ carState }) => {
  const { selectedModel, color, wheels, steering, seats, stickers } = carState;

  if (!selectedModel) return null;

  const items = [
    { label: 'Modèle', value: selectedModel.name, price: selectedModel.price },
    color && { label: 'Couleur', value: color.name },
    wheels && { label: 'Roues', value: wheels.name },
    steering && { label: 'Volant', value: steering.name },
    seats && { label: 'Sièges', value: seats.name },
    stickers && { label: 'Stickers', value: stickers.name },
  ].filter(Boolean);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Résumé de votre configuration</h2>
      
      <div className="space-y-3">
        {items.map((item, index) => (
          <SummaryItem
            key={index}
            label={item.label}
            value={item.value}
            price={item.price}
          />
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Prix total</span>
          <span className="text-xl font-bold text-blue-600">
            {formatPrice(selectedModel.price)}
          </span>
        </div>
      </div>
    </div>
  );
};