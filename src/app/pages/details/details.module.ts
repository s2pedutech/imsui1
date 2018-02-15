import { NgModule } from '@angular/core';
//import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DetailsComponent } from './details.component';


@NgModule({
  imports: [
    ThemeModule,
    //AngularEchartsModule,
  ],
  declarations: [
    DetailsComponent,
       
  ],
})
export class DetailsModule { }
