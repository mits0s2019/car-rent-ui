import {BaseDTO} from './BaseDTO';

export interface CarDTO extends BaseDTO{
  id?: number;
  url?: string;
  brand?: string;
  price?: number;
}
