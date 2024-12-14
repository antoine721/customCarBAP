import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { CarSlider } from '../components/CarSlider';
import { carModels } from '../data/carModels';
import { useCarStore } from '../store/carStore';
import ExitButton from '../components/Exit.tsx';

export const ModelSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { setModel } = useCarStore();

  const handleValidate = () => {
    setModel(carModels[selectedIndex]);
    navigate('/customize/color');
  };

  return (
    <div className="min-h-screen bg-[#6AAADD]">
      <ExitButton />
      <h1 className="text-[#2B5475] text-4xl font-bold text-center p-6">CHOISIS UN MODÈLE DE VOITURE</h1>
      <div className="container mx-auto px-4 pt-20 pb-24 ">
        <div className="max-w-5xl mx-auto">
          <CarSlider
            cars={carModels}
            onSelect={setSelectedIndex}
          />
          
          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              onClick={handleValidate}
              className="bg-[#457DA9] hover:bg-[#2B5475] w-44 max-w-md shadow-lg"
            >
              VALIDER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};