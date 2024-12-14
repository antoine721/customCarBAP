import { CustomizationOption } from '../types/customization';
import {
  colorOptions,
  wheelOptions,
  steeringOptions,
  seatOptions,
  stickerOptions
} from './customizationOptions';

interface CustomizationStep {
  id: string;
  title: string;
  options: CustomizationOption[];
}

interface ModelCustomization {
  [modelId: string]: CustomizationStep[];
}

const modelCustomizations: ModelCustomization = {
  modelA: [
    { id: 'color', title: 'Couleur', options: colorOptions },
    { id: 'wheels', title: 'Roues', options: wheelOptions },
  ],
  modelB: [
    { id: 'steering', title: 'Volant', options: steeringOptions },
    { id: 'seats', title: 'Sièges', options: seatOptions },
  ],
  // Ajoutez d'autres modèles et leurs options ici
};

export default modelCustomizations;