import { Component, Input } from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: Product[];
  filteredProductList: Product[];
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
    this.filteredProductList = this.products.filter(
      product => product.name.toLowerCase().indexOf(this.filterValue.toLowerCase()) > -1
    );
  }
}
