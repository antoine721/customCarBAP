import { CustomizationOption } from '../../types/car';

export const steeringOptions: CustomizationOption[] = [
  {
    id: 'standard',
    name: 'Standard',
    preview: 'https://via.placeholder.com/50/444444/444444',
    layers: {
      front: {
        main: 'https://example.com/layers/steering/standard-front.png'
      },
      back: {
        main: 'https://example.com/layers/steering/standard-back.png'
      }
    }
  },
  {
    id: 'sport',
    name: 'Sport',
    preview: 'https://via.placeholder.com/50/222222/222222',
    layers: {
      front: {
        main: 'https://example.com/layers/steering/sport-front.png'
      },
      back: {
        main: 'https://example.com/layers/steering/sport-back.png'
      }
    }
  }
];