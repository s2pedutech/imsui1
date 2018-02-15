import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

//import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { CoursesComponent } from './courses.component';
import { CoursesService } from '../../@core/data/courses.service';



@NgModule({
  imports: [
    ThemeModule,
        Ng2SmartTableModule,

    //AngularEchartsModule,
  ],
  declarations: [
    CoursesComponent,
       
  ],
  providers: [
    CoursesService
    ],
})
export class CoursesModule { }
