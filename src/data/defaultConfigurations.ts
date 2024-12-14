import { CarState } from '../types/car';
import { colorOptions } from './options/colorOptions';
import { wheelOptions } from './options/wheelOptions';
import { steeringOptions } from './options/steeringOptions';
import { seatOptions } from './options/seatOptions';
import { stickerOptions } from './options/stickerOptions';

interface ModelConfiguration {
  name: string;
  config: Partial<CarState>;
}

const modelSConfigs: ModelConfiguration[] = [
  {
    name: "Sport Edition",
    config: {
      color: colorOptions[0], // Rouge
      wheels: wheelOptions[1], // Luxury
      steering: steeringOptions[1], // Sport
      seats: seatOptions[0], // Cuir
      stickers: stickerOptions[0], // Racing
    }
  },
  {
    name: "Élégance",
    config: {
      color: colorOptions[1], // Bleu
      wheels: wheelOptions[0], // Sport
      steering: steeringOptions[0], // Standard
      seats: seatOptions[0], // Cuir
      stickers: stickerOptions[1], // Élégant
    }
  }
];

const model3Configs: ModelConfiguration[] = [
  {
    name: "Performance",
    config: {
      color: colorOptions[0], // Rouge
      wheels: wheelOptions[1], // Luxury
      steering: steeringOptions[1], // Sport
      seats: seatOptions[0], // Cuir
      stickers: stickerOptions[0], // Racing
    }
  },
  {
    name: "Confort",
    config: {
      color: colorOptions[1], // Bleu
      wheels: wheelOptions[0], // Sport
      steering: steeringOptions[0], // Standard
      seats: seatOptions[1], // Tissu
      stickers: null, // Pas de stickers
    }
  }
];

const modelConfigurations: Record<string, ModelConfiguration[]> = {
  'model-s': modelSConfigs,
  'model-3': model3Configs,
  // Ajoutez des configurations pour les autres modèles ici
};

export const getDefaultConfigurations = (modelId: string): ModelConfiguration[] => {
  return modelConfigurations[modelId] || [];
};