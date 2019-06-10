import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('assets/product.json');
  }
  getProduct(id: number) {
    return this.http.get<Product[]>('assets/product.json').pipe(
      map(products => {
        return products.find(product => product.id === id);
      }),
      catchError(err => of(err))
    );
  }
  queryProducts(input) {
    return this.http.get<Product[]>('assets/product.json').pipe(
      map(products => {
        return products.filter(product => product.name.toLowerCase().includes(input.toLowerCase()));
      }),
      catchError(err => of(err))
    );
  }
}
