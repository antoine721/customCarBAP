import { create } from 'zustand';
import { CarModel, CustomizationOption, CarState } from '../types/car';

interface CarStore extends CarState {
  setModel: (model: CarModel | null) => void;
  setColor: (color: CustomizationOption | null) => void;
  setWheels: (wheels: CustomizationOption | null) => void;
  setSteering: (steering: CustomizationOption | null) => void;
  setSeats: (seats: CustomizationOption | null) => void;
  setmotif: (motif: CustomizationOption | null) => void;
  setBackground: (background: CustomizationOption | null) => void;
  toggleView: () => void;
  reset: () => void;
}

export const useCarStore = create<CarStore>((set) => ({
  selectedModel: null,
  color: null,
  wheels: null,
  steering: null,
  seats: null,
  motif: null,
  background: null,
  currentView: 'front',
  setModel: (model) => set({ selectedModel: model }),
  setColor: (color) => set({ color }),
  setWheels: (wheels) => set({ wheels }),
  setSteering: (steering) => set({ steering }),
  setSeats: (seats) => set({ seats }),
  setmotif: (motif) => set({ motif }),
  setBackground: (background) => set({ background }),
  toggleView: () => set((state) => ({ 
    currentView: state.currentView === 'front' ? 'back' : 'front' 
  })),
  reset: () => set({
    selectedModel: null,
    color: null,
    wheels: null,
    steering: null,
    seats: null,
    motif: null,
    background: null,
    currentView: 'front',
  }),
}));