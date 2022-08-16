import {Component, Input, OnInit} from '@angular/core';
import {faHeart, faCircleMinus} from '@fortawesome/free-solid-svg-icons';
import {ProductItemModel, ProductItem} from "../../../core/models";

@Component({
  selector: 'app-sticker-item',
  templateUrl: './sticker-item.component.html',
  styleUrls: ['./sticker-item.component.css']
})
export class StickerItemComponent implements OnInit {
  @Input() sticker!: ProductItemModel;

  faHeart = faHeart;
  faCircleMinus = faCircleMinus;
  ProductItem = ProductItem;

  constructor() { }

  ngOnInit(): void {
  }

}
