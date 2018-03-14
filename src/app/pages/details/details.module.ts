import { NgModule } from '@angular/core';

//import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DetailsComponent } from './details.component';
import { ShowErrorsComponent } from './show-errors.component';
import { TelephoneNumberFormatValidatorDirective } from './validators/telephone-number-format-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { PassingYearValidatorDirective} from './validators/passing-year-validator.directive';




@NgModule({
  imports: [
    ThemeModule,
    //AngularEchartsModule,
  ],
  declarations: [
    DetailsComponent,
    ShowErrorsComponent,
    TelephoneNumberFormatValidatorDirective,
    EmailValidatorDirective,
    PassingYearValidatorDirective,   
  ],
})
export class DetailsModule { }
