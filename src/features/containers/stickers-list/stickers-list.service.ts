import {Injectable} from '@angular/core';
import {StickersService} from "../../services/stickers.service";
import {
  Category,
  ColorType,
  FilterModel,
  LocalStorageModel,
  ProductItem,
  ProductItemModel,
  SizeProductType
} from "../../../core/models";
import {Observable} from "rxjs";
import {StateService} from "../../../core/services/state.service";

@Injectable()
export class StickersListService {
  constructor(
    private readonly stickers: StickersService,
    private readonly state: StateService
  ) { }

  public getStickers(): Observable<ProductItemModel[]> {
    return this.stickers.getStickers();
  };

  public getLocalStorage(): Observable<LocalStorageModel> {
    return this.state.getLocalStorage();
  }

  public filterStickers(filters: FilterModel, stickers: ProductItemModel[]): ProductItemModel[] {
    let stickersToFilter = [...stickers];

    if (filters[ProductItem.Category] && filters[ProductItem.Category] !== Category.All) {
      stickersToFilter = stickersToFilter.filter((sticker: ProductItemModel) => {
        return sticker[ProductItem.Category] === filters[ProductItem.Category]?.toLowerCase()
      })
    }

    if (filters[ProductItem.Size] && filters[ProductItem.Size]?.length) {
      stickersToFilter = stickersToFilter.filter((sticker: ProductItemModel) => {
        return sticker[ProductItem.Size].some((size: SizeProductType) => {
          return filters[ProductItem.Size]?.includes(size);
        })
      })
    }

    if (filters[ProductItem.Cost]) {
      const min: number = filters[ProductItem.Cost]?.min || 20;
      const max: number = filters[ProductItem.Cost]?.max || 100;

      stickersToFilter = stickersToFilter.filter((sticker: ProductItemModel) => {
        return sticker[ProductItem.Cost] >= min && sticker[ProductItem.Cost] <= max;
      })
    }

    if (filters[ProductItem.Color] && filters[ProductItem.Color]?.length) {
      stickersToFilter = stickersToFilter.filter((sticker: ProductItemModel) => {
        return sticker[ProductItem.Color].some((color: ColorType) => {
          return filters[ProductItem.Color]?.includes(color);
        })
      })
    }
    return stickersToFilter;
  }

  public sortStickers(): ProductItemModel[] {
    return [];
  }

  public searchStickers(): ProductItemModel[] {
    return [];
  }
}
