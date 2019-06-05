import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [NavbarComponent, RatingComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, RatingComponent]
})
export class ComponentsModule { }
