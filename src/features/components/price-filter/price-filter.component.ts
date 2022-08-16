import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PriceModel} from "../../../core/models";

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css']
})
export class PriceFilterComponent implements OnInit {
  @Input() prices: PriceModel;
  @Output() setMinPrice: EventEmitter<number> = new EventEmitter<number>();
  @Output() setMaxPrice: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.prices = {};
  }

  public ngOnInit(): void {
  }

  public inputValue($event: Event): number {
    const inputElement = $event.target as HTMLInputElement;
    return Number(inputElement.value);
  }
}
