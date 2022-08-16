import { Component, OnInit } from '@angular/core';
import {faArrowDown19, faArrowDown91, faArrowDownAZ, faArrowDownZA, faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sorting-filter',
  templateUrl: './sorting-filter.component.html',
  styleUrls: ['./sorting-filter.component.css']
})
export class SortingFilterComponent implements OnInit {
  faArrowDownAZ = faArrowDownAZ;
  faArrowDownZA = faArrowDownZA;
  faArrowDown19 = faArrowDown19;
  faArrowDown91 = faArrowDown91;
  faHeart = faHeart;

  constructor() { }

  ngOnInit(): void {
  }

}
