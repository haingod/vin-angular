import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ComponentsModule} from '../components/components.module';
import {ForbiddenComponent} from './forbidden.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ForbiddenComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [ForbiddenComponent]
})

export class ForbiddenModule {

}
