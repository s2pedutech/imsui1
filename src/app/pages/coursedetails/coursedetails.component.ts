import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../@core/data/courses.service';

//import { NgModule } from '@angular/core';
//import { ThemeModule } from '../../@theme/theme.module';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';





@Component({
selector: 'ngx-form-inputs',
  styleUrls: ['./coursedetails.component.scss'],
  templateUrl: './coursedetails.component.html',
})


export class CoursedetailsComponent {
data : any;
isAddCourse : boolean = true;
 constructor(private route: ActivatedRoute, private service: CoursesService, private router: Router) {
 //console.log(this.route.queryParams);
        this.route.queryParams.subscribe(params => {
        this.data = params;
            console.log(params);
            this.isAddCourse = (params === undefined || params === null || Object.keys(params).length === 0);
            
        });
        console.log(this.data);
        console.log(this.isAddCourse);
    }
    
    addNewStudent(f: NgForm)
    {
    console.log(f.value);
    if(this.isAddCourse)
       {
       CoursesService.addNewCourse(f.value);
       console.log("addenquiry");
       }
       else{
        CoursesService.editCourse(f.value);
       console.log("editenquiry");
       }
        this.router.navigate(['pages/courses']);

    }
}
