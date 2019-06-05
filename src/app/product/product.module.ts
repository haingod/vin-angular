import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductService} from './product.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [ProductComponent, ProductDetailComponent, ProductListComponent],
  providers: [ProductService]
})

export class ProductModule {

}
