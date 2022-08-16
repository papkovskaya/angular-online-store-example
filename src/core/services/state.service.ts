import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";
import {LocalStorageModel, PrepareToBuyModel, PriceModel, ProductItem} from "../models";

@Injectable()
export class StateService {
  private filterCategoryKey = 'filterCategoryKey';
  private filterSizeKey = 'filterSizeKey';
  private filterPriceKey = 'filterPriceKey';
  private filterColorKey = 'filterColorKey';
  private sortKey = 'sortKey';
  private prepareCartKey = 'prepareCartKey';
  private cartKey = 'cartKey';
  private favoriteKey = 'favoriteKey';

  private localStorage = new ReplaySubject<LocalStorageModel>(1);

  constructor() {
    this.setLocalStorage();
  }

  public setLocalStorage(): void {
    this.localStorage.next(this.generateLocalStorage())
  }

  public getLocalStorage(): Observable<LocalStorageModel> {
    return this.localStorage.asObservable();
  }

  public generateLocalStorage(): LocalStorageModel {
    return {
      filters: {
        [ProductItem.Category]: this.getFilterCategory(),
        [ProductItem.Size]: this.getFilterSize(),
        [ProductItem.Cost]: this.getFilterPrice(),
        [ProductItem.Color]: this.getFilterColor()
      },
      sort: this.getSort(),
      prepareToBuy: this.getPrepareToBuy(),
      cart: this.getCart(),
      favorite: this.getFavorite()
    }
  }

  public getFilterCategory(): string | null {
    return localStorage.getItem(this.filterCategoryKey);
  }

  public getFilterSize(): string[] | null {
    const sizeString: string | null = localStorage.getItem(this.filterSizeKey);
    return sizeString ? JSON.parse(sizeString) : null;
  }

  public getFilterPrice(): PriceModel | null {
    const priceString: string | null = localStorage.getItem(this.filterPriceKey);
    return priceString ? JSON.parse(priceString) : {max: 100, min: 20};
  }

  public getFilterColor(): string[] | null {
    const colorString: string | null = localStorage.getItem(this.filterColorKey);
    return colorString ? JSON.parse(colorString) : null;
  }

  public getSort(): string | null {
    return localStorage.getItem(this.sortKey);
  }

  public getPrepareToBuy(): PrepareToBuyModel | null {
    const prepareToBuyString: string | null = localStorage.getItem(this.prepareCartKey);
    return prepareToBuyString ? JSON.parse(prepareToBuyString) : null;
  }

  public getCart(): string[] | null {
    const cartString: string | null = localStorage.getItem(this.cartKey);
    return cartString ? JSON.parse(cartString) : null;
  }

  public getFavorite(): string[] | null {
    const favoriteString: string | null = localStorage.getItem(this.favoriteKey);
    return favoriteString ? JSON.parse(favoriteString) : null;
  }

  public setFilterCategory(category: string): void {
    localStorage.setItem(this.filterCategoryKey, category);
    this.localStorage.next(this.generateLocalStorage())
  }

  public setFilterSize(size: string): void {
    const currentSizes: string[] | null = this.getFilterSize();
    if (currentSizes) {
      localStorage.setItem(this.filterSizeKey, JSON.stringify([...currentSizes, size]));
    } else {
      localStorage.setItem(this.filterSizeKey, JSON.stringify([size]));
    }
    this.localStorage.next(this.generateLocalStorage())
  }

  public setFilterPrice(price: PriceModel): void {
    const currentPrice: PriceModel | null = this.getFilterPrice();
    if (currentPrice) {
      const newPrice: PriceModel = {
        min: price.min ? price.min : (currentPrice.min ? currentPrice.min : 20),
        max: price.max ? price.max : (currentPrice.max ? currentPrice.max : 100)
      }
      localStorage.setItem(this.filterPriceKey, JSON.stringify(newPrice));
    } else {
      localStorage.setItem(this.filterPriceKey, JSON.stringify(price));
    }
    this.localStorage.next(this.generateLocalStorage())
  }

  public setFilterColor(color: string): void {
    const currentColors: string[] | null = this.getFilterColor();
    if (currentColors) {
      localStorage.setItem(this.filterColorKey, JSON.stringify([...currentColors, color]));
    } else {
      localStorage.setItem(this.filterColorKey, JSON.stringify([color]));
    }
    this.localStorage.next(this.generateLocalStorage())
  }

  public setSort(sort: string): void {
    localStorage.setItem(this.sortKey, sort);
    this.localStorage.next(this.generateLocalStorage())
  }

  public setPrepareToBuy(name: string, props: {size: string, color: string}): void {
    const currentPrepare: PrepareToBuyModel | null = this.getPrepareToBuy();
    const newPrepare: PrepareToBuyModel = currentPrepare
      ? {
        ...currentPrepare,
        [name]: {
          selectedSize: props.size ? props.size : currentPrepare[name]?.selectedSize,
          selectedColor: props.color ? props.color : currentPrepare[name]?.selectedColor
        }
      }
      : {
        [name]: {
          selectedSize: props.size,
          selectedColor: props.color
        }
      };
    localStorage.setItem(this.sortKey, JSON.stringify(newPrepare));

    this.localStorage.next(this.generateLocalStorage())
  }

  public setCart(name: string): void {
    const currentCart: string[] | null = this.getCart();
    if (currentCart) {
      localStorage.setItem(this.cartKey, JSON.stringify([...currentCart, name]));
    } else {
      localStorage.setItem(this.cartKey, JSON.stringify([name]));
    }
    this.localStorage.next(this.generateLocalStorage())
  }

  public setFavorite(name: string): void {
    const currentFavorite: string[] | null = this.getFavorite();
    if (currentFavorite) {
      localStorage.setItem(this.favoriteKey, JSON.stringify([...currentFavorite, name]));
    } else {
      localStorage.setItem(this.favoriteKey, JSON.stringify([name]));
    }
    this.localStorage.next(this.generateLocalStorage())
  }

  public deleteFromFilterSize(size: string): void {
    const currentSizes: string[] | null = this.getFilterSize();
    if (currentSizes) {
      const newSizes: string[] = currentSizes.filter((currentSize: string) => currentSize !== size);
      localStorage.setItem(this.filterSizeKey, JSON.stringify(newSizes));
      this.localStorage.next(this.generateLocalStorage())
    }
  }

  public deleteFromFilterColors(color: string): void {
    const currentColors: string[] | null = this.getFilterColor();
    if (currentColors) {
      const newColors: string[] = currentColors.filter((currentColor: string) => currentColor !== color);
      localStorage.setItem(this.filterColorKey, JSON.stringify(newColors));
      this.localStorage.next(this.generateLocalStorage())
    }
  }

  public deleteFromPrepareToBuy(name: string, props: {size: boolean, color: boolean}): void {
    const currentPrepare: PrepareToBuyModel | null = this.getPrepareToBuy();
    if (currentPrepare && currentPrepare[name]) {
      if (props.size && props.color) {
        delete currentPrepare[name];
        localStorage.setItem(this.prepareCartKey, JSON.stringify(currentPrepare));
      } else {
        const newPrepare: PrepareToBuyModel = {
          ...currentPrepare,
          [name]: {
            selectedSize: props.size ? null : currentPrepare[name]?.selectedSize,
            selectedColor: props.color ? null : currentPrepare[name]?.selectedColor
          }
        };
        localStorage.setItem(this.prepareCartKey, JSON.stringify(newPrepare));
      }
      this.localStorage.next(this.generateLocalStorage())
    }
  }

  public deleteFromCart(name: string): void {
    const currentCart: string[] | null = this.getCart();
    if (currentCart) {
      localStorage.setItem(
        this.cartKey,
        JSON.stringify(currentCart.filter((cartName: string) => cartName !== name))
      );
      this.localStorage.next(this.generateLocalStorage())
    }
  }

  public deleteFromFavorite(name: string): void {
    const currentFavorite: string[] | null = this.getFavorite();
    if (currentFavorite) {
      localStorage.setItem(
        this.favoriteKey,
        JSON.stringify(currentFavorite.filter((favName: string) => favName !== name))
      );
      this.localStorage.next(this.generateLocalStorage())
    }
  }

  public resetAllFilters(): void {
    localStorage.removeItem(this.filterCategoryKey);
    localStorage.removeItem(this.filterSizeKey);
    localStorage.removeItem(this.filterPriceKey);
    localStorage.removeItem(this.filterColorKey);
    this.localStorage.next(this.generateLocalStorage())
  }

  public resetLocalStorage(): void {
    localStorage.clear();
    this.localStorage.next(this.generateLocalStorage())
  }
}
