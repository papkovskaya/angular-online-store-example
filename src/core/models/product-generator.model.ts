import { JsonResponseModel } from './json-response.model';
import { ProductItemModel } from './product-item.model';

export interface ProductGeneratorModel {
  mapProductFromJson(jsonResponse: JsonResponseModel[], itemsInCart: string[], favoriteNames: string[]): ProductItemModel[];
}
