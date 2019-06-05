import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductService} from './product.service';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../components/components.module';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductComponent },
  { path: ':id', component: ProductDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ComponentsModule,
    FormsModule,
  ],
  declarations: [ProductComponent, ProductDetailComponent, ProductListComponent],
  providers: [ProductService]
})

export class ProductModule {

}
