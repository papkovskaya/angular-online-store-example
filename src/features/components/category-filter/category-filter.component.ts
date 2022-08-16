import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category, CategoryType} from "../../../core/models";

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {
  @Output() filterBy: EventEmitter<Category> = new EventEmitter<Category>();
  Category = Category;

  constructor() { }

  ngOnInit(): void {
  }

}
