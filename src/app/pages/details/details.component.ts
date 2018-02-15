import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmartTableService } from '../../@core/data/smart-table.service';

//import { NgModule } from '@angular/core';
//import { ThemeModule } from '../../@theme/theme.module';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';





@Component({
selector: 'ngx-form-inputs',
  styleUrls: ['./details.component.scss'],
  templateUrl: './details.component.html',
})


export class DetailsComponent {
data : any;
isAddPage : boolean = true;
firstName: string = " ";
lastName: string =" ";
id: string =" ";
email: string;
mob: string;
college: string;
add: string;
ssc: string;
sscyop: string;
hsc: string;
hscyop: string;
degree: string;
stream: string;
degreeyop: string;
isAdmitted: boolean;




 constructor(private route: ActivatedRoute, private service: SmartTableService, private router: Router) {
 
 
 /*this.firstName = "";
this.lastName = "";
this.id = "";
this.email = "";
this.mob = "";
this.college = "";
this.add = "";
this.ssc = "";
this.sscyop = "";
this.hsc = "";
this.hscyop = "";
this.degree = "";
this.stream = "";
this.degreeyop = "";
this.isAdmitted = false;


*/



 //console.log(this.route.queryParams);
        this.route.queryParams.subscribe(params => {
        this.data = params;
            console.log(params);
            this.isAddPage = (params === undefined || params === null || Object.keys(params).length === 0);
            /*if(params === null)
                this.isAddPage = !(params === undefined || params === null || Object.keys(params).length === 0)
                this.isAddPage = true;
                else
                this.isAddPage = false;*/
        });
        console.log(this.data);
        console.log(this.isAddPage);
    }
    
    addNewStudent(f)
    {
    var obj = {"firstName":" ","lastName":" ","id":" " ,"email":" ","mob":" ","college":" ","add":" ","ssc":" ","sscyop":" " ,"hsc":" ","hscyop":" ","degree":" ","stream":" ","degreeyop":" "};
    
console.log(f.value);
var obj1 = f.value;
    if(obj1.firstName != null)
        obj.firstName = obj1.firstName;
    else
        obj.firstName = "";
        
    if(obj1.lastName != null)
        obj.lastName = obj1.lastName;
    else
        obj.lastName = "";
        
         if(obj1.id != null)
        obj.id = obj1.id;
    else
        obj.id = "";
        
         if(obj1.email != null)
        obj.email = obj1.email;
    else
        obj.email = "";
        
         if(obj1.mob != null)
        obj.mob = obj1.mob;
    else
        obj.mob = "";
        
         if(obj1.college != null)
        obj.college = obj1.college;
    else
        obj.college = "";
        
         if(obj1.add != null)
        obj.add = obj1.add;
    else
        obj.add = "";
        
         if(obj1.ssc != null)
        obj.ssc = obj1.ssc;
    else
        obj.ssc = "";
        
         if(obj1.sscyop != null)
        obj.sscyop = obj1.sscyop;
    else
        obj.sscyop = "";
        
        
         if(obj1.hsc != null)
        obj.hsc = obj1.hsc;
    else
        obj.hsc = "";
        
        
         if(obj1.hscyop != null)
        obj.hscyop = obj1.hscyop;
    else
        obj.hscyop = "";
        
        
         if(obj1.degree != null)
        obj.degree = obj1.degree;
    else
        obj.degree = "";
        
        
         if(obj1.stream != null)
        obj.stream = obj1.stream;
    else
        obj.stream = "";
        
        
         if(obj1.degreeyop != null)
        obj.degreeyop = obj1.degreeyop;
    else
        obj.degreeyop = "";
        
        
    
    console.log(obj);
    
           this.service.addNewEnquiry(obj);

    //console.log(f.value);
    /*if(this.isAddPage)
       {
       this.service.addNewEnquiry(obj);
       console.log("addenquiry");
       }
       else{
       console.log(f.value);
        this.service.editEnquiry(f.value);
       console.log("editenquiry");
       }*/
        this.router.navigate(['pages/dashboard1']);

    }
}
