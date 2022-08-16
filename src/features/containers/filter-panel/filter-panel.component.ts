import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilterPanelService} from "./filter-panel.service";
import {
  Category,
  Color,
  ColorType, FilterModel,
  LocalStorageModel, PriceModel,
  ProductItem,
  SizeProduct,
  SizeProductType
} from "../../../core/models";
import {map, Observable, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css'],
  providers: [FilterPanelService]
})
export class FilterPanelComponent implements OnInit, OnDestroy {
  public selectedColors: string[];
  public selectedSizes: string[];
  public selectedPrices: PriceModel;
  private destroySource = new Subject<void>();

  constructor(private readonly connect: FilterPanelService) {
    this.selectedColors = [];
    this.selectedSizes = [];
    this.selectedPrices = this.defaultPriceRange();
  }

  public ngOnInit(): void {
    this.subscribeOnState()
      .pipe(takeUntil(this.destroySource))
      .subscribe();
  }

  public defaultPriceRange(): PriceModel {
    return {
      min: 20,
      max: 100
    }
  }

  public subscribeOnState(): Observable<void> {
    return this.connect.getState().pipe(
      map((state: LocalStorageModel) => {
        const filters: FilterModel | null = state.filters;
        if (filters) {
          this.selectedColors = filters[ProductItem.Color] || [];
          this.selectedSizes = filters[ProductItem.Size] || [];
          this.selectedPrices = filters[ProductItem.Cost] || this.defaultPriceRange();
        }
      })
    )
  }

  public onFilterByCategory(category: Category): void {
    this.connect.filterByCategory(category);
  }

  public onFilterBySizeSelected(size: SizeProduct): void {
    this.connect.selectFilterSize(size);
  }

  public onFilterBySizeUnselected(size: SizeProduct): void {
    this.connect.removeFilterSize(size);
  }

  public onMinPriceSelected(price: number): void {
    this.connect.setPrice({min: price});
  }

  public onMaxPriceSelected(price: number): void {
    this.connect.setPrice({max: price});
  }

  public onColorSelected(color: string): void {
    this.connect.selectColor(color);
  }

  public onColorRemoved(color: string): void {
    this.connect.removeColor(color);
  }

  public ngOnDestroy(): void {
    this.destroySource.next();
    this.destroySource.complete();
  }

  public resetFilters(): void {
    this.connect.resetFilters();
  }

  public resetAllSettings(): void {
    this.connect.resetAll();
  }
}
