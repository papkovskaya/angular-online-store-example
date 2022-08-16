
export interface ProductItemModel {
  [ProductItem.Name]: string;
  [ProductItem.Img]: string;
  [ProductItem.Color]: ColorType[];
  [ProductItem.Category]: CategoryType;
  [ProductItem.Size]: SizeProductType[];
  [ProductItem.Cost]: number;
  [ProductItem.IsItemInCart]: boolean;
  [ProductItem.IsItemFavorite]: boolean;
  [ProductItem.IsItemReadyToBuy]: boolean;
}

export enum Category {
  All = 'All',
  Drift = 'Drift',
  Jdm = 'JDM',
  Stance = 'Stance',
}

export type CategoryType = `${Category}`;

export enum SizeProduct {
  S = 's',
  M = 'm',
  L = 'l'
}

export type SizeProductType = `${SizeProduct}`;

export enum Color {
  White = 'white',
  Black = 'black',
  Yellow = 'yellow',
  Green = 'green',
  Pink = 'pink',
  Red = 'red',
}

export type ColorType = `${Color}`;

export enum ProductItem {
  Name = 'name',
  Img = 'img',
  Color = 'color',
  Category = 'category',
  Description = 'description',
  Size = 'size',
  Cost = 'cost',
  IsItemInCart = 'IsItemInCart',
  IsItemFavorite = 'IsItemFavorite',
  IsItemReadyToBuy = 'IsItemReadyToBuy'
}
