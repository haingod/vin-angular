import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: Product[];
  @Output() filterEvent = new EventEmitter();
  isToggleShowImage: boolean;
  filterValue: string;
  toggleStatus = {
    show: 'Show Image',
    hide: 'Hide Image'
  };
  constructor() {
    this.isToggleShowImage = true;
  }

  toggleShowImage() {
    this.isToggleShowImage = !this.isToggleShowImage;
  }
  changeFilter() {
    this.filterEvent.emit(this.filterValue);
  }
}
