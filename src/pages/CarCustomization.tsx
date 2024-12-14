import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CarPreview } from '../components/CarPreview';
import { CustomizationGrid } from '../components/CustomizationGrid';
import { Button } from '../components/Button';
import { useCarStore } from '../store/carStore';
import {
  colorOptions,
  wheelOptions,
  steeringOptions,
  seatOptions,
  motifOptions,
  backgroundOptions
} from '../data/customizationOptions';
import { CustomizationOption } from '../types/car';

type CustomizationStep = {
  id: keyof Omit<ReturnType<typeof useCarStore>, 'selectedModel' | 'currentView' | 'setModel' | 'toggleView' | 'reset'>;
  title: string;
  options: CustomizationOption[];
};

const customizationSteps: CustomizationStep[] = [
  { id: 'color', title: 'UNE COULEUR', options: colorOptions },
  { id: 'wheels', title: 'DES ROUES', options: wheelOptions },
  { id: 'steering', title: 'UN VOLANT', options: steeringOptions },
  { id: 'seats', title: 'UN SIEGES', options: seatOptions },
  { id: 'motif', title: 'UN MOTIF', options: motifOptions },
  { id: 'fond', title: 'UN FOND', options: backgroundOptions },
];

export const CarCustomization: React.FC = () => {
  const { step } = useParams<{ step: string }>();
  const navigate = useNavigate();
  const carState = useCarStore();
  
  const currentStepIndex = customizationSteps.findIndex(s => s.id === step);
  const currentStep = customizationSteps[currentStepIndex];
  
  if (!currentStep) {
    navigate('/models');
    return null;
  }

  const handleNext = () => {
    const nextStep = customizationSteps[currentStepIndex + 1];
    if (nextStep) {
      navigate(`/customize/${nextStep.id}`);
    } else {
      navigate('/finish');
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      navigate(`/customize/${customizationSteps[currentStepIndex - 1].id}`);
    } else {
      navigate('/models');
    }
  };

  const setterName = `set${step!.charAt(0).toUpperCase()}${step!.slice(1)}` as keyof typeof carState;
  const setter = carState[setterName] as (option: CustomizationOption) => void;

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-[#2B5475] text-3xl font-bold text-center p-4">CHOISIS {currentStep.title}</h1>
      
      <div className="container mx-auto px-4 pb-24">
        <CarPreview
          carState={carState}
          onToggleView={carState.toggleView}
        />
        
        <CustomizationGrid
          options={currentStep.options}
          selectedOption={carState[currentStep.id]}
          onSelect={setter}
        />

        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
          <div className="container mx-auto flex justify-between gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={handleBack}
              className="w-1/2"
            >
              Précédent
            </Button>
            <Button
              size="lg"
              onClick={handleNext}
              className="w-1/2"
            >
              {currentStepIndex === customizationSteps.length - 1 ? 'Terminer' : 'Suivant'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};