import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

interface NavigationProps {
  title: string;
  showExit?: boolean;
  onNext?: () => void;
  onBack?: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  title,
  showExit = false,
  onNext,
  onBack,
  currentStep,
  totalSteps,
}) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#6AAADD]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {onBack && (
            <Button variant="secondary" size="sm" onClick={onBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
          )}
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        
        {showExit && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              navigate('/');
            }}
          >
            Quitter
          </Button>
        )}
      </div>
    </div>
  );
};