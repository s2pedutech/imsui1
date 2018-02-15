import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { Dashboard1Component } from './dashboard1.component';
//import { DetailsModule } from '../details/details.module';


//import { PagesRoutingModule, routedComponents } from './pages-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
//import { Dashboard1RoutingModule, routedComponents} from './dashboard1-routing.module';


@NgModule({
  imports: [
    ThemeModule,
    //TablesRoutingModule,
    Ng2SmartTableModule,
    //Dashboard1RoutingModule,
    //PagesRoutingModule,
    //DetailsModule,

  ],
  declarations: [
                Dashboard1Component,
            //...routedComponents,
  ],
  providers: [
    SmartTableService,
        //routedComponents,

  ],
})
export class Dashboard1Module { }
