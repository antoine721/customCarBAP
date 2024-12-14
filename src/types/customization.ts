import { CustomizationOption } from './car';

export type { CustomizationOption } from './car';

export interface CustomizationStep {
  id: string;
  title: string;
  options: CustomizationOption[];
}
