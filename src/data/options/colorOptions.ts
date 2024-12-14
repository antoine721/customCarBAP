import { CustomizationOption } from '../../types/car';

export const colorOptions: CustomizationOption[] = [
  {
    id: 'red',
    name: 'Rouge Passion',
    preview: 'https://via.placeholder.com/50/ff0000/ff0000',
    layers: {
      front: {
        main: 'https://example.com/layers/colors/red-front.png'
      },
      back: {
        main: 'https://example.com/layers/colors/red-back.png'
      }
    }
  },
  {
    id: 'blue',
    name: 'Bleu Océan',
    preview: 'https://via.placeholder.com/50/0000ff/0000ff',
    layers: {
      front: {
        main: 'https://example.com/layers/colors/blue-front.png'
      },
      back: {
        main: 'https://example.com/layers/colors/blue-back.png'
      }
    }
  }
];