import { ProductItem } from '../models';

export interface FilterModel {
  [ProductItem.Category]: string | null,
  [ProductItem.Size]: string[] | null,
  [ProductItem.Cost]: PriceModel | null,
  [ProductItem.Color]: string[] | null,
}

export interface PrepareToBuyModel {
    [keyName: string]: { selectedSize: string | null; selectedColor: string | null };
}

export interface PriceModel {
  min?: number;
  max?: number;
}

export enum Sort {
  sortA = 'sort-a',
  sortZ = 'sort-z',
  sortOne = 'sort-one',
  sortNine = 'sort-nine',
  sortWish = 'sort-wish',
}
export type SortType = `${Sort}`;

export interface LocalStorageModel {
  filters: FilterModel | null;
  sort: string | null;
  prepareToBuy: PrepareToBuyModel | null;
  cart: string[] | null;
  favorite: string[] | null;
}
