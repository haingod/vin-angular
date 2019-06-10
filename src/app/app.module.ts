import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ComponentsModule} from './components/components.module';
import {AuthGuard} from './shared/authGuard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'product' },
  { path: 'product', loadChildren: './product/product.module#ProductModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: 'forbidden', loadChildren: './forbidden/forbidden.module#ForbiddenModule' }
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ComponentsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
