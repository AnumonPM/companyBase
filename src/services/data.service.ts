import { Time } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  database:any={
    AVT:{uname:"ABC",address:"kollam",city:"kakkanad",state:"Ernakulam",zip:123, phone:569564654, website:"dghdfj", email:" jhfhdh" },
    DEF:{uname:"DEF",address:"thrisur",city:"kakkanad",state:"Ernakulam",zip:123, phone:569564654, website:"dghdfj", email:" jhfhdh" },
    GHI:{uname:"GHI",address:"kochi",city:"kakkanad",state:"Ernakulam",zip:123, phone:569564654, website:"dghdfj", email:" jhfhdh" },
  
  }


  
  currentUname:any;
  currentAddress:any;
  currentCity: any;
  currentState: any;
  currentZip: any;
  currentPhone: any;
  currentWebsite: any;
  currentEmail: any;
  currentStatus:any = "Active";
  
  register(uname: any, address: any, city: any, state: any, zip: any, phone: any, website: any, email: any) {
    let db=this.database

    db[uname]={
      uname,
     address,
     city,
     state,
     zip,
     phone,
     website,
     email
    }
    this.saveDetails()
  }

  update(uname: any, address: any, city: any, state: any, zip: any, phone: any, website: any, email: any) {

    this.saveDetails()
  }


  saveDetails() {
    if(this.database){
      localStorage.setItem("database",JSON.stringify(this.database))
        }
        if(this.currentUname){
          localStorage.setItem("currentUname",JSON.stringify(this.currentUname))
        }
      if(this.currentAddress){
        localStorage.setItem("currentAddress",JSON.stringify(this.currentAddress))
      
      }
      if(this.currentCity){
        localStorage.setItem("currentCity",JSON.stringify(this.currentCity))
      
      }
      if(this.currentState){
        localStorage.setItem("currentState",JSON.stringify(this.currentState))
      
      }
      if(this.currentZip){
        localStorage.setItem("currentZip",JSON.stringify(this.currentZip))
      
      }
      if(this.currentPhone){
        localStorage.setItem("currentPhone",JSON.stringify(this.currentPhone))
      
      }
      if(this.currentWebsite){
        localStorage.setItem("currentWebsite",JSON.stringify(this.currentWebsite))
      
      }
      if(this.currentEmail){
        localStorage.setItem("currentEmail",JSON.stringify(this.currentEmail))
      
      }
      localStorage.setItem("currentStatus",JSON.stringify(this.currentStatus))
  }


  
getDetails(){
  if(localStorage.getItem("database")){
this.database=  JSON.parse(localStorage.getItem("database") || "") 
  }
if(localStorage.getItem("currentUname")){
  this.currentUname= JSON.parse(localStorage.getItem("currentUname") || "")
}
 

}
getDisplay(uname:any){
  
  return Object.values(this.database);
  
  }

  constructor() { 
    this.getDetails()

  }

addSunday(time:Time){

  if(localStorage.getItem("database")){

    this.database=  JSON.parse(localStorage.getItem("database") || "") 
    if(localStorage.getItem("currentUname")){
      this.currentUname= JSON.parse(localStorage.getItem("currentUname") || "")
    }
     }



}

updateStatus(user: string,statusO: string){
  if(localStorage.getItem("database")){

    this.database=  JSON.parse(localStorage.getItem("database") || "") 
    this.currentUname = user;
  }
    if(localStorage.getItem(user)){
      this.currentUname= JSON.parse(localStorage.getItem(user) || "")
      localStorage.setItem("currentStatus",JSON.stringify(statusO))
    }


}

}
