export interface CarModel {
  id: string;
  name: string;
  image: string;
}

export interface CustomizationOption {
  id: string;
  name: string;
  preview: string;
  layer?: string;
}

export interface CarState {
  selectedModel: CarModel | null;
  color: CustomizationOption | null;
  wheels: CustomizationOption | null;
  steering: CustomizationOption | null;
  seats: CustomizationOption | null;
  motif: CustomizationOption | null;
  background: CustomizationOption | null;
  currentView: 'front' | 'back';
}