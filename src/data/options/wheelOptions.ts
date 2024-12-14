import { CustomizationOption } from '../../types/car';

export const wheelOptions: CustomizationOption[] = [
  {
    id: 'sport',
    name: 'Sport 19"',
    preview: 'https://via.placeholder.com/50/888888/888888',
    layers: {
      front: {
        front: 'https://example.com/layers/wheels/sport-front-wheel.png',
        rear: 'https://example.com/layers/wheels/sport-rear-wheel.png'
      },
      back: {
        front: 'https://example.com/layers/wheels/sport-front-wheel-back.png',
        rear: 'https://example.com/layers/wheels/sport-rear-wheel-back.png'
      }
    }
  },
  {
    id: 'luxury',
    name: 'Luxury 20"',
    preview: 'https://via.placeholder.com/50/666666/666666',
    layers: {
      front: {
        front: 'https://example.com/layers/wheels/luxury-front-wheel.png',
        rear: 'https://example.com/layers/wheels/luxury-rear-wheel.png'
      },
      back: {
        front: 'https://example.com/layers/wheels/luxury-front-wheel-back.png',
        rear: 'https://example.com/layers/wheels/luxury-rear-wheel-back.png'
      }
    }
  }
];