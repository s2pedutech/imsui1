import { ThemeModule } from '../../@theme/theme.module';


import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

    
import { Ng2SmartTableModule } from 'ng2-smart-table';
//import { DetailsComponent } from '../details/details.component';


import { SmartTableService } from '../../@core/data/smart-table.service';


        
@Component({
  selector: 'ngx-smart-table',
  templateUrl: './dashboard1.component.html',
 /* styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],*/
    styleUrls: ['./dashboard1.component.scss'],

  
  

})
@NgModule({
  imports: [
    ThemeModule,
    //TablesRoutingModule,
    Ng2SmartTableModule,
   // RouterModule.forRoot(routes),
    //DetailsModule,
    //DetailsComponent,
  ],
    //exports: [ RouterModule ],

  declarations: [
        Dashboard1Component,
  ],
  providers: [
    SmartTableService,
  ],
})


export class Dashboard1Component {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      mob: {
        title: 'Mobile Number',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
     
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService, private router: Router) {
  
        this.service.getEData().subscribe(k => {
   //this.items = k;
    console.log(k);
    this.source.load(k);
    //return this.items;
});
        
      /*  .filter((item) => item.isAdmitted === "false");
    this.source.load(enquirydata);
    */
    //this.enquiryData();
  }

  onDeleteConfirm(event): void {
  console.log("here");
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  /*enquiryData(){
  console.log("here am i ");
        const enquirydata = this.service.getenquiryData().filter((item) => item.isAdmitted === "false");
        console.log(enquirydata);
    this.source.load(enquirydata);

  console.log("enquiryData called");
}*/

onEdit(event)
{
    console.log(event.data);
    //event.preventDefault();
            this.router.navigate(['pages/details'],{ queryParams: event.data });

    
}

addData(){
this.router.navigate(['pages/details'],{ queryParams: null });


}
  /*admitData(){
  
  const admitdata = SmartTableService.getenquiryData().filter((item) => item.isAdmitted === "true");
  
  this.source.load(admitdata);

  console.log("admitData called");
  }*/
}
