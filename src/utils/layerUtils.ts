import { CarState, CustomizationOption, ViewAngle } from '../types/car';
import { LAYER_ORDER, LayerType } from '../types/layers';

interface Layer {
  id: LayerType;
  image: string;
  zIndex: number;
}

const getBaseLayer = (model: CarState['selectedModel'], view: ViewAngle): string | undefined => {
  if (!model?.layers?.[view]) return undefined;
  return model.layers[view].base;
};

const getShadowsLayer = (model: CarState['selectedModel'], view: ViewAngle): string | undefined => {
  if (!model?.layers?.[view]) return undefined;
  return model.layers[view].shadows;
};

const getInteriorLayer = (model: CarState['selectedModel'], view: ViewAngle): string | undefined => {
  if (view === 'back' && model?.layers?.back) {
    return model.layers.back.interior;
  }
  return undefined;
};

const getContoursLayer = (model: CarState['selectedModel'], view: ViewAngle): string | undefined => {
  if (view === 'back' && model?.layers?.back) {
    return model.layers.back.contours;
  }
  return undefined;
};

const getCustomizationLayer = (
  option: CustomizationOption | null,
  view: ViewAngle,
  type: 'main' | 'front' | 'rear'
): string | undefined => {
  if (!option?.layers?.[view]) return undefined;
  return option.layers[view][type];
};

export const createCarLayers = (carState: CarState): Layer[] => {
  const { selectedModel, color, wheels, steering, seats, stickers, background, currentView } = carState;
  const layerOrder = LAYER_ORDER[currentView];

  if (!selectedModel) return [];

  const layerMap = new Map<LayerType, string | undefined>([
    ['background', getCustomizationLayer(background, currentView, 'main')],
    ['rearWheels', getCustomizationLayer(wheels, currentView, 'rear')],
    ['frontWheels', getCustomizationLayer(wheels, currentView, 'front')],
    ['steering', getCustomizationLayer(steering, currentView, 'main')],
    ['color', getCustomizationLayer(color, currentView, 'main')],
    ['stickers', getCustomizationLayer(stickers, currentView, 'main')],
    ['shadows', getShadowsLayer(selectedModel, currentView)],
    ['seats', getCustomizationLayer(seats, currentView, 'main')],
    ['carInterior', getInteriorLayer(selectedModel, currentView)],
    ['contours', getContoursLayer(selectedModel, currentView)],
  ]);

  return layerOrder
    .map((layerType, index) => {
      const image = layerMap.get(layerType);
      if (!image) return null;

      return {
        id: layerType,
        image,
        zIndex: index
      };
    })
    .filter((layer): layer is Layer => layer !== null);
};