import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#6AAADD] flex items-center justify-center p-4">
      <div className="text-center">
        <Button
          size="lg"
          onClick={() => navigate('/models')}
          className="bg-[#457DA9] text-white rounded-xl hover:bg-[#2B5475] w-96 h-28 text-2xl"
        >
          Crée ta voiture
        </Button>
      </div>
    </div>
  );
};