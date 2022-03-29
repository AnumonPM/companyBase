import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/services/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    
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
    //this.registerForm.value.uname=JSON.parse(localStorage.getItem("currentUname")||"")

   // this.transactions=this.ds.getTransaction(this.acno)
  //  console.log(this.transactions)
  }

  ngOnInit(): void {
  }

  register(){

    
      var uname=this.registerForm.value.uname
      var address=this.registerForm.value.address
      var city=this.registerForm.value.city
      var state=this.registerForm.value.state
      var zip=this.registerForm.value.zip
      var phone=this.registerForm.value.phone
      var website=this.registerForm.value.website
      var email=this.registerForm.value.email
     
    
      if(this.registerForm.valid){
        const result= this.ds.register(uname,address,city, state,zip, phone,website, email )
       
          alert("Succesfully registered!!!")
          this.router.navigateByUrl("")
        
      }


}
  
}
