import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { CarPreview } from '../components/CarPreview';
import { Button } from '../components/Button';
import { useCarStore } from '../store/carStore';
import { Download, Redo } from 'lucide-react';

export const Finish: React.FC = () => {
  const navigate = useNavigate();
  const carState = useCarStore();
  const reset = useCarStore(state => state.reset);

  const handleNewConfiguration = () => {
    reset();
    navigate('/');
  };

  if (!carState.selectedModel) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 pt-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Voici votre {carState.selectedModel.name} personnalisée
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <CarPreview
              carState={carState}
              onToggleView={carState.toggleView}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={handleNewConfiguration}
              className="flex items-center justify-center gap-2"
            >

              Nouvelle configuration
            </Button>
            
            <Button
              size="lg"
              className="flex items-center justify-center gap-2"
            >
              Télécharger la configuration
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};