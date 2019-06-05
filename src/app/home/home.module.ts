import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ComponentsModule} from '../components/components.module';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [HomeComponent]
})

export class HomeModule {

}
