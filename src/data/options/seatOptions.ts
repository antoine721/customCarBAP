import { CustomizationOption } from '../../types/car';

export const seatOptions: CustomizationOption[] = [
  {
    id: 'leather',
    name: 'Cuir',
    preview: 'https://via.placeholder.com/50/8B4513/8B4513',
    layers: {
      front: {
        main: 'https://example.com/layers/seats/leather-front.png'
      },
      back: {
        main: 'https://example.com/layers/seats/leather-back.png'
      }
    }
  },
  {
    id: 'fabric',
    name: 'Tissu',
    preview: 'https://via.placeholder.com/50/808080/808080',
    layers: {
      front: {
        main: 'https://example.com/layers/seats/fabric-front.png'
      },
      back: {
        main: 'https://example.com/layers/seats/fabric-back.png'
      }
    }
  }
];