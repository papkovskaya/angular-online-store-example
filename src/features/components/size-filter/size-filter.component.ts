import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SizeProduct} from "../../../core/models";

@Component({
  selector: 'app-size-filter',
  templateUrl: './size-filter.component.html',
  styleUrls: ['./size-filter.component.css']
})
export class SizeFilterComponent implements OnInit {
  @Input() selectedSizes: string[];
  @Output() selectSize: EventEmitter<SizeProduct> = new EventEmitter<SizeProduct>();
  @Output() removeSize: EventEmitter<SizeProduct> = new EventEmitter<SizeProduct>();

  constructor() {
    this.selectedSizes = [];
  }

  public ngOnInit(): void {
  }

  public changeSmallSize($event: Event): void {
    this.onInputChange($event, SizeProduct.S);
  }

  public changeMediumSize($event: Event): void {
    this.onInputChange($event, SizeProduct.M);
  }

  public changeLargeSize($event: Event): void {
    this.onInputChange($event, SizeProduct.L);
  }

  private onInputChange($event: Event, size: SizeProduct): void {
    const input = $event.target as HTMLInputElement;
    if (input.checked) {
      this.selectSize.emit(size);
    } else {
      this.removeSize.emit(size);
    }
  }

}
