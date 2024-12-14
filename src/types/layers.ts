export type LayerType = 
  | 'background'
  | 'rearWheels'
  | 'steering'
  | 'color'
  | 'stickers'
  | 'shadows'
  | 'seats'
  | 'frontWheels'
  | 'carInterior'
  | 'contours';

export interface LayerOrder {
  front: LayerType[];
  back: LayerType[];
}

export const LAYER_ORDER: LayerOrder = {
  front: [
    'background',
    'rearWheels',
    'steering',
    'color',
    'stickers',
    'shadows',
    'seats',
    'frontWheels'
  ],
  back: [
    'background',
    'rearWheels',
    'color',
    'carInterior',
    'stickers',
    'shadows',
    'contours',
    'seats',
    'steering',
    'frontWheels'
  ]
};