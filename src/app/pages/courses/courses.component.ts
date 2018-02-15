import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import { NgModule } from '@angular/core';
//import { ThemeModule } from '../../@theme/theme.module';
import { LocalDataSource } from 'ng2-smart-table';

import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { CoursesService } from '../../@core/data/courses.service';





@Component({
selector: 'ngx-courses',
  styleUrls: ['./courses.component.scss'],
  templateUrl: './courses.component.html',
})


export class CoursesComponent {
settings = {
hideSubHeader: false,
mode: 'inline',

    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
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
  coursedata :any;
  constructor(private service: CoursesService, private router: Router) {
  
        this.coursedata = CoursesService.getcoursedataData();
        
    this.source.load(this.coursedata);
    //this.enquiryData();
  }
   /* onEditCourse(event)
{
    console.log(event.data);
    //event.preventDefault();
            this.router.navigate(['pages/details'],{ queryParams: event.data });

    
}
addCourse(){
this.router.navigate(['pages/details'],{ queryParams: null });


}*/
onDeleteConfirm(event): void {
console.log(event.data);
    if (window.confirm('Are you sure you want to delete?')) {
      event.data['name'] += ' + deleted in code';
      event.confirm.resolve(event.data);
      console.log(this.coursedata);
            //CoursesService.deleteCourse(event.data);

    } else {
      event.confirm.reject();
    }
  }
  onSaveConfirm(event): void {
console.log(event.data);
if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
      console.log(this.coursedata);
      //CoursesService.editCourse(event.newData);
      console.log(event.newData);
    } else {
      event.confirm.reject();
    }
   
  }
  onCreateConfirm(event): void {
console.log(event.newData);
if (window.confirm('Are you sure you want to create?')) {
      //event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
      console.log(this.coursedata);
     // CoursesService.addNewCourse(event.newData);
     //console.log(CoursesService.getcoursedataData());

    } else {
      event.confirm.reject();
    }
 
   
  }
    
}
