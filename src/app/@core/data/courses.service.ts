import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  private static coursedata  = [{
    'id': 31,
    'firstName': 'Haynes',
    'lastName': 'Vinson',
    'username': '@Mckenzie',
    'email': 'haynesmckenzie@comtours.com',
    'age': 15,
  }, {
    'id': 32,
    'firstName': 'Miller',
    'lastName': 'Acosta',
    'username': '@Young',
    'email': 'milleryoung@comtours.com',
    'age': 55,
  }];

  static getcoursedataData() {
  console.log(this.coursedata);
    return this.coursedata;
  }
  
 
  
/* static getIDs(){
  return this.enquirydata.map(d => d.id);
}

  static getMaxID(){
  return Math.max(...this.getIDs());
}

static getNextID(){
return this.getMaxID() + 1;
}
*/
static addNewCourse(data)
{
    console.log(data);
    //data.id = this.getNextID();
    //this.coursedata.push(data);
    console.log(this.coursedata);
    console.log("add");
}
static deleteCourse(data)
{
    console.log(data);
    //data.id = this.getNextID();
    //this.coursedata.push(data);
    console.log(this.coursedata);
   // console.log("add");
}

static editCourse(data)
{

    console.log(data.id);
    //let itemIndex = this.coursedata.findIndex(item => item.id === data.id);
    //this.coursedata[itemIndex] = data;
    //console.log(itemIndex);
    console.log(this.coursedata);
    console.log("edit");
    
}
}
