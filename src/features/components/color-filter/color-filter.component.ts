import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Color} from "../../../core/models";

@Component({
  selector: 'app-color-filter',
  templateUrl: './color-filter.component.html',
  styleUrls: ['./color-filter.component.css']
})
export class ColorFilterComponent implements OnInit {
  @Input() selectedColors: string[];
  @Output() selectColor: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeColor: EventEmitter<string> = new EventEmitter<string>();
  colors = Object.values(Color);

  constructor() {
    this.selectedColors = [];
  }

  ngOnInit(): void {
  }

  onColorClicked(color: string) {
    if (this.selectedColors.includes(color)) {
      this.removeColor.emit(color);
    } else {
      this.selectColor.emit(color);
    }
  }
}
