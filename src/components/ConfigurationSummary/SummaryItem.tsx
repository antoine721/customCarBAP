import React from 'react';
import { formatPrice } from '../../utils/formatters';

interface SummaryItemProps {
  label: string;
  value: string;
  price?: number;
}

export const SummaryItem: React.FC<SummaryItemProps> = ({ label, value, price }) => {
  return (
    <div className="flex justify-between items-center text-gray-700">
      <div>
        <span className="font-medium">{label}:</span>
        <span className="ml-2">{value}</span>
      </div>
      {price && (
        <span className="font-medium">{formatPrice(price)}</span>
      )}
    </div>
  );
};