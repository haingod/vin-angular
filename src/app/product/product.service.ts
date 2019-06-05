import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>('assets/product.json');
  }
  getProduct(id: number) {
    return this.http.get<any>('assets/product.json').pipe(
      map(product => product[id - 1])
    );
  }
}
