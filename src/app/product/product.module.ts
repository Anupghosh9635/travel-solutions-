import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourPackagesComponent } from './tour-packages/tour-packages.component';
import { SharedModule } from '../shared/shared.module';

const routes:Routes = [
  { path: 'tour-packages/:name', component: TourPackagesComponent }
]

@NgModule({
  declarations: [TourPackagesComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule] 
})
export class ProductModule { }
