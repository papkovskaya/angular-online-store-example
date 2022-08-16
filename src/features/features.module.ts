import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './containers/catalog/catalog.component';
import { FilterPanelComponent } from './containers/filter-panel/filter-panel.component';
import { SortingPanelComponent } from './containers/sorting-panel/sorting-panel.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { SizeFilterComponent } from './components/size-filter/size-filter.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { ColorFilterComponent } from './components/color-filter/color-filter.component';
import { SortingFilterComponent } from './components/sorting-filter/sorting-filter.component';
import { StickerItemComponent } from './components/sticker-item/sticker-item.component';
import { StickersListComponent } from './containers/stickers-list/stickers-list.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {GetStickersInterceptorService} from "./interceptors/get-stickers-interceptor.service";
import {StickersService} from "./services/stickers.service";



@NgModule({
  declarations: [
    CatalogComponent,
    FilterPanelComponent,
    SortingPanelComponent,
    CategoryFilterComponent,
    SizeFilterComponent,
    PriceFilterComponent,
    ColorFilterComponent,
    SortingFilterComponent,
    StickerItemComponent,
    StickersListComponent
  ],
  exports: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GetStickersInterceptorService,
      multi: true
    },
    StickersService
  ]
})
export class FeaturesModule { }
