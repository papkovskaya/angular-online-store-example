import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LocalStorageModel, ProductItemModel} from "../../../core/models";
import {map, Observable, Subject, takeUntil} from "rxjs";
import {StickersListService} from "./stickers-list.service";

@Component({
  selector: 'app-stickers-list',
  templateUrl: './stickers-list.component.html',
  styleUrls: ['./stickers-list.component.css'],
  providers: [StickersListService]
})
export class StickersListComponent implements OnInit, OnDestroy {
  @Input() stickers: ProductItemModel[];
  private destroySource: Subject<void> = new Subject<void>();


  constructor(private readonly connect: StickersListService) {
    this.stickers = [];
  }

  ngOnInit(): void {
    this.connect.getStickers()
      .pipe(takeUntil(this.destroySource))
      .subscribe((stickers: ProductItemModel[]) => this.stickers = stickers);

    this.onLocalStorageChange()
      .pipe(takeUntil(this.destroySource))
      .subscribe();
  }

  public onLocalStorageChange(): Observable<void> {
    return this.connect.getLocalStorage().pipe(
      map((storage: LocalStorageModel) => {
        if (storage.filters) {
          this.stickers = this.connect.filterStickers(storage.filters, this.stickers);
        }
      }));
  }

  ngOnDestroy(): void {
    this.destroySource.next();
    this.destroySource.complete()
  }

}
