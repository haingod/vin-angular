import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {ComponentsModule} from './components/components.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'product' },
  { path: 'product', loadChildren: './product/product.module#ProductModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' }
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
