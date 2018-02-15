import { NgModule } from '@angular/core';
//import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { CoursedetailsComponent } from './coursedetails.component';


@NgModule({
  imports: [
    ThemeModule,
    //AngularEchartsModule,
  ],
  declarations: [
    CoursedetailsComponent,
       
  ],
})
export class DetailsModule { }
