import { CustomizationOption } from '../../types/car';

export const stickerOptions: CustomizationOption[] = [
  {
    id: 'racing',
    name: 'Racing',
    preview: 'https://via.placeholder.com/50/FF4500/FF4500',
    layers: {
      front: {
        main: 'https://example.com/layers/stickers/racing-front.png'
      },
      back: {
        main: 'https://example.com/layers/stickers/racing-back.png'
      }
    }
  },
  {
    id: 'elegant',
    name: 'Élégant',
    preview: 'https://via.placeholder.com/50/FFD700/FFD700',
    layers: {
      front: {
        main: 'https://example.com/layers/stickers/elegant-front.png'
      },
      back: {
        main: 'https://example.com/layers/stickers/elegant-back.png'
      }
    }
  }
];