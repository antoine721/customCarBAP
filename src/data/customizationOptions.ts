import { CustomizationOption } from '../types/car';

export const colorOptions: CustomizationOption[] = [
  {
    id: 'red',
    name: 'Rouge Passion',
    preview: 'https://via.placeholder.com/50/ff0000/ff0000',
    layer: 'https://example.com/layers/red-car.png'
  },
  {
    id: 'blue',
    name: 'Bleu Océan',
    preview: 'https://via.placeholder.com/50/0000ff/0000ff',
    layer: 'https://example.com/layers/blue-car.png'
  },
  {
    id: 'black',
    name: 'Noir Intense',
    preview: 'https://via.placeholder.com/50/000000/000000',
    layer: 'https://example.com/layers/black-car.png'
  }
];

export const wheelOptions: CustomizationOption[] = [
  {
    id: 'sport',
    name: 'Sport 19"',
    preview: 'https://via.placeholder.com/50/888888/888888',
    layer: 'https://example.com/layers/sport-wheels.png'
  },
  {
    id: 'luxury',
    name: 'Luxury 20"',
    preview: 'https://via.placeholder.com/50/666666/666666',
    layer: 'https://example.com/layers/luxury-wheels.png'
  }
];

export const steeringOptions: CustomizationOption[] = [
  {
    id: 'standard',
    name: 'Standard',
    preview: 'https://via.placeholder.com/50/444444/444444',
    layer: 'https://example.com/layers/standard-steering.png'
  },
  {
    id: 'sport',
    name: 'Sport',
    preview: 'https://via.placeholder.com/50/222222/222222',
    layer: 'https://example.com/layers/sport-steering.png'
  }
];

export const seatOptions: CustomizationOption[] = [
  {
    id: 'leather',
    name: 'Cuir',
    preview: 'https://via.placeholder.com/50/8B4513/8B4513',
    layer: 'https://example.com/layers/leather-seats.png'
  },
  {
    id: 'fabric',
    name: 'Tissu',
    preview: 'https://via.placeholder.com/50/808080/808080',
    layer: 'https://example.com/layers/fabric-seats.png'
  }
];

export const motifOptions: CustomizationOption[] = [
  {
    id: 'racing',
    name: 'Racing',
    preview: 'https://via.placeholder.com/50/FF4500/FF4500',
    layer: 'https://example.com/layers/racing-stickers.png'
  },
  {
    id: 'elegant',
    name: 'Élégant',
    preview: 'https://via.placeholder.com/50/FFD700/FFD700',
    layer: 'https://example.com/layers/elegant-stickers.png'
  }
];

export const backgroundOptions: CustomizationOption[] = [
  {
    id: 'city',
    name: 'Ville',
    preview: 'https://via.placeholder.com/50/4682B4/4682B4',
    layer: 'https://example.com/layers/city-background.png'
  },
  {
    id: 'nature',
    name: 'Nature',
    preview: 'https://via.placeholder.com/50/228B22/228B22',
    layer: 'https://example.com/layers/nature-background.png'
  }
];