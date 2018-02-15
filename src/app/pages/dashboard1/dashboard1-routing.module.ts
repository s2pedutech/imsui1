/*import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Dashboard1Component } from './dashboard1.component';

import { DetailsComponent } from './details/details.component';
//import { DetailsModule } from '../details/details.module';


const routes: Routes = [{
  path: '',
  component: Dashboard1Component,
  
  children: [{
    path: 'details',
    component: DetailsComponent,
    //loadChildren: './details/details.module#DetailsModule',
  }],
  {
    path: '',
    redirectTo: 'dashboard1',
    pathMatch: 'full',
  },
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

    //DetailsModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class Dashboard1RoutingModule {

}

export const routedComponents = [
  Dashboard1Component,
  DetailsComponent,
];
*/