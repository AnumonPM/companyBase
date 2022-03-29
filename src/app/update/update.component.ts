import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  updateInfo:any;
  user:any;
newUp:any
  updateForm = this.fb.group({
    
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]] ,
    address:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]] ,
    city:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]] ,
    state:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]] ,
    zip:['',[Validators.required,Validators.pattern('[0-9]*')]], 
    phone:['',[Validators.required,Validators.pattern('[0-9]*')]], 

    website:['',[Validators.required,Validators.pattern('[a-zA-Z0-9//:@]*')]],
    email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@.]*')]]

  })


  constructor(private ds:DataService, private router:Router, private fb:FormBuilder) { 
    
  // this.updateForm.value.uname=JSON.parse(localStorage.getItem("currentUname")||"")


    this.updateInfo=this.ds.getDetails()

   // this.transactions=this.ds.getTransaction(this.acno)
  //  console.log(this.transactions)
  }

  ngOnInit(): void {
     
    this.newUp=this.ds.getDisplay(this.ds.currentUname)
    for (var i = 0;i<this.newUp.length;i++){
      if(this.newUp[i].uname == this.ds.currentUname){
        
        var uname =  this.ds.currentUname
        var address=this.newUp[i].address
        var city=this.newUp[i].city
        var state=this.newUp[i].state
        var zip=this.newUp[i].zip
        var phone=this.newUp[i].phone
        var website=this.newUp[i].website
        var email=this.newUp[i].email
      
     
      // if(this.updateForm.valid){
         const result= this.ds.update(uname,address,city, state,zip, phone,website, email )
     // }}
    }
  }
}

   update(){

    
 //this.updateForm.value.uname = uname
//        var address=this.updateForm.value.address
//        var city=this.updateForm.value.city
//        var state=this.updateForm.value.state
//        var zip=this.updateForm.value.zip
//        var phone=this.updateForm.value.phone
//        var website=this.updateForm.value.website
//        var email=this.updateForm.value.email
     
    
//       if(this.updateForm.valid){
//         const result= this.ds.update(uname,address,city, state,zip, phone,website, email )
       
//           alert("Succesfully Updated!!!")
//           this.router.navigateByUrl("")
        
//       }


 }

}