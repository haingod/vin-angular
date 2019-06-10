import { Component, AfterViewInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements AfterViewInit {
  searchTerms: Subject<string> = new Subject();
  products: Observable<Product[]>;
  constructor(private productService: ProductService) {
    this.products = this.searchTerms.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term: string) => this.productService.queryProducts(term)),
    );
  }

  filterProduct(searchText) {
    this.searchTerms.next(searchText);
  }

  ngAfterViewInit() {
    // initial get all
    this.filterProduct('');
  }
}
