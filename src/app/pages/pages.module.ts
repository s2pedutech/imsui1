import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { Dashboard1Module } from './dashboard1/dashboard1.module';
import { AdmittedModule } from './admitted/admitted.module';

import { DetailsModule } from './details/details.module';
import { CoursesModule } from './courses/courses.module';


import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    Dashboard1Module,
    DetailsModule,
    AdmittedModule,
    CoursesModule,
      //Dashboard1Component,

    
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    
  ],
})
export class PagesModule {
}
