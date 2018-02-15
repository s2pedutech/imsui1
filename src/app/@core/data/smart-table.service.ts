import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Injectable()
export class SmartTableService {
 
 items:Array<any> = [];
 //items: Observable<any>;
 //itemList: AngularFireList<any>;
 constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
   
   
    }
//public static af: AngularFireDatabase;
  public static enquirydata = [{
    id: 1,
    firstName: 'Faisal',
    lastName: 'Amdani',
    mob:'8605601208',
    college:'BNCOE',
    add:'Ram Nagar Nagpur',
    ssc:'89%',
    sscyop:'2010',
    hsc:'89%',
    hscyop:'2012',
    degree:'M.E',
    stream:'C.S.E',
    degreeyop:"2018",
    email: 'mdo@gmail.com',
    isAdmitted: "true",
    
  }, {
    id: 2,
     firstName: 'Gandhar',
    lastName: 'Patwardhan',
    mob:'8605601208',
    college:'BNCOE',
    add:'Ram Nagar Nagpur',
    ssc:'89%',
    sscyop:'2010',
    hsc:'89%',
    hscyop:'2012',
    degree:'M.E',
    stream:'C.S.E',
    degreeyop:"2018",
    email: 'mdo@gmail.com',
    isAdmitted: "false",
  }];

admitdata = [{
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

  getenquiryData() : Observable<any[]> {
  //console.log(this.enquirydata);
        //console.log(SmartTableService.af.list('/enquirydata'));

    return this.af.list('/enquirydata').valueChanges();
    
  }
  
 getEData() : Observable<any[]> 
 {
 console.log("here");
    return this.af.list('/enquirydata').valueChanges();
     //this.items = this.af.list('/enquirydata').valueChanges();
     //console.log(this.items);
    //return this.items;
    //console.log(this.items);
 }
  
 static getIDs(){
  return this.enquirydata.map(d => d.id);
}

  static getMaxID(){
  return Math.max(...this.getIDs());
}

static getNextID(){
return this.getMaxID() + 1;
}

 addNewEnquiry(data) 
{
    console.log(data);
    //console.log(this.af);
    //data.id = this.getNextID();
   this.af.list('/enquirydata/').push(data);
    //this.enquirydata.push(data);
    //console.log(this.enquirydata.push(data));
    //console.log(this.enquirydata);
   //  this.items.update(data);
    console.log("add");
}

 editEnquiry(data)
{

    console.log(data.id);
    /*
    let itemIndex = this.items.findIndex(item => item.id == data.id);
    this.items[itemIndex] = data;
    console.log(itemIndex);
    console.log(this.items);
    console.log("edit");
    */
}
}
