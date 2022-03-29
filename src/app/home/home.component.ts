import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';
import { FormBuilder } from '@angular/forms';
import { InteractivityChecker } from '@angular/cdk/a11y';

interface Actions {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  editForm = this.fb.group({
    
  })
  selectedVal:any;
  statusO="Active";
  uname:any;
  display:any;
  //selectedVal="";
  // address:any;
  // city: any;
  // state: any;
  // zip: any;
  // phone: any;
  // website: any;
  // email: any;

 

  actions = [
    {value: 'Edit' },
    {value: 'Deactivate'},
    {value: 'Delete'},
  ];
 
  constructor(private router:Router, private ds:DataService, private fb:FormBuilder) {

    // this.uname=JSON.parse(localStorage.getItem("currentUname")||"")
    // this.address=JSON.parse(localStorage.getItem("currentAddress")||"")
    // this.city=JSON.parse(localStorage.getItem("currentCity")||"")
    // this.state=JSON.parse(localStorage.getItem("currentState")||"")
    // this.zip=JSON.parse(localStorage.getItem("currentZip")||"")
    // this.phone=JSON.parse(localStorage.getItem("currentPhone")||"")
    // this.website=JSON.parse(localStorage.getItem("currentWebsite")||"")
    // this.email=JSON.parse(localStorage.getItem("currentEmail")||"")

    // this.transactions=this.ds.getTransaction(this.acno)

    this.display=this.ds.getDisplay(this.uname)
   }

  ngOnInit(): void {
  }

 faMenu = faEllipsisVertical;

editOption(user :any){
  console.log("user    "+user);
  this.ds.currentUname = user;
  if(this.selectedVal=="Edit"){
 
  this.router.navigateByUrl("update",user);

  }
  else if(this.selectedVal=='Deactivate'){
    if(user){
    this.statusO ="Inactive";
  localStorage.setItem('currentUname',user);
    this.ds.updateStatus('currentUname',this.statusO);
    }
   
  }
  else if(this.selectedVal=='Delete'){
    localStorage.removeItem(user)
    this.router.navigateByUrl("")
  }
}


}


