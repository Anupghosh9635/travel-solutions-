import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { IncompleateInfoComponent } from './incompleate-info/incompleate-info.component';
import { InactiveInfoComponent } from './inactive-info/inactive-info.component';
import { AllpackageInfoComponent } from './allpackage-info/allpackage-info.component';
import { FormsModule } from '@angular/forms';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../Auth/auth.guard';


const routes:Routes = [
  { path: 'admin', component: AdminInfoComponent },  
  // { path: 'admin', component: AdminInfoComponent , canActivate :[AuthGuard] },  
  { path: 'admin/in-cpmpleate', component: IncompleateInfoComponent },
  { path: 'admin/in-active', component: InactiveInfoComponent },
  { path: 'admin/all-package', component: AllpackageInfoComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    RouterModule
  ],
  declarations: [
    IncompleateInfoComponent,
    InactiveInfoComponent,
    AllpackageInfoComponent,
    AdminInfoComponent 
  ],
  exports: [RouterModule]
})
export class ActionModule { }
