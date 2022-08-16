import {JsonResponseModel, ProductItem, JsonItem, ProductItemModel} from "../../core/models";

export function mapProductFromJson(jsonResponse: JsonResponseModel[], itemsInCart: string[], favoriteItems: string[]): ProductItemModel[] {
  return Array.from(jsonResponse).map((responseItem: JsonResponseModel) => ({
    [ProductItem.Name]: responseItem[JsonItem.Name],
    [ProductItem.Img]: responseItem[JsonItem.Img],
    [ProductItem.Color]: responseItem[JsonItem.Color],
    [ProductItem.Category]: responseItem[JsonItem.Category],
    [ProductItem.Description]: responseItem[JsonItem.Desciption],
    [ProductItem.Size]: responseItem[JsonItem.Size],
    [ProductItem.Cost]: responseItem[JsonItem.Cost],
    [ProductItem.IsItemInCart]: itemsInCart.includes(responseItem[JsonItem.Name]),
    [ProductItem.IsItemFavorite]: favoriteItems.includes(responseItem[JsonItem.Name]),
    [ProductItem.IsItemReadyToBuy]: false
  }));
}
