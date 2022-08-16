import { Injectable } from '@angular/core';
import {StateService} from "../../../core/services/state.service";
import {Category, CategoryType, ColorType, LocalStorageModel, PriceModel, SizeProductType} from "../../../core/models";
import {Observable} from "rxjs";

@Injectable()
export class FilterPanelService {

  constructor(private readonly state: StateService) { }

  public getState(): Observable<LocalStorageModel> {
    return this.state.getLocalStorage();
  }

  public filterByCategory(category: CategoryType): void {
    this.state.setFilterCategory(category);
  }

  public selectFilterSize(size: SizeProductType): void {
    this.state.setFilterSize(size);
  }

  public removeFilterSize(size: SizeProductType): void {
    this.state.deleteFromFilterSize(size);
  }

  public setPrice(price: PriceModel): void {
    this.state.setFilterPrice(price);
  }

  public selectColor(color: string): void {
    this.state.setFilterColor(color);
  }

  public removeColor(color: string): void {
    this.state.deleteFromFilterColors(color);
  }

  public resetFilters(): void {
    this.state.resetAllFilters();
  }

  public resetAll(): void {
    this.state.resetLocalStorage();
  }
}
