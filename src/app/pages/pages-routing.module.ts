import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { DetailsComponent } from './details/details.component';
import { AdmittedComponent } from './admitted/admitted.component';
import { CoursesComponent } from './courses/courses.component';



const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
  
    path: 'dashboard1',
    component: Dashboard1Component,
   /*children:[
          
    {
    path: 'details',
    component: DetailsComponent,
    }],*/
  },
  
   {
    path: 'details',
    component: DetailsComponent,
       // loadChildren: './details/details.module#DetailsModule',

  },
  {
    path: 'admitted',
    component: AdmittedComponent,
       

  },
  {
    path: 'courses',
    component: CoursesComponent,
       

  },
  
  /*  
{
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  },
  {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  },
 {
    path: 'dashboard1',
   loadChildren: './dashboard1/dashboard1.module#Dashboard1Module',
        //component: Dashboard1Component,

  }, 
  {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  },  {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  },
  */
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
