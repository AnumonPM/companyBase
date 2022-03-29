import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder} from '@angular/forms';
import { Time } from '@angular/common';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

timeForm= this.fb.group({

})


sunRes:any;
sunTime : string[] = [];

monRes:any;
monTime:string[]=[];

tueRes:any;
tueTime:string[]=[];

wedRes:any;
wedTime:string[]=[];

thurRes:any;
thurTime:string[]=[];

friRes:any;
friTime:string[]=[];

satRes:any;
satTime:string[]=[];

  constructor(private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  bookedSun(){

    if(this.sunRes){
      let index = 0;
   
      if(this.sunTime.length>0){
        for(let i=0;i<this.sunTime.length;i++){
          if(this.sunRes == this.sunTime[i]){
            index++;
            break;
          }
        }
        if(index>0){
          alert("already booked")
        
        }else{
          this.sunTime.push(this.sunRes)
          localStorage.setItem("sunTime",JSON.stringify(this.sunTime))
        }
      }else{
        this.sunTime.push(this.sunRes)
        localStorage.setItem("sunTime",JSON.stringify(this.sunTime))
      }
   
    }
  }


  bookedMon(){
     if(this.monRes){
      let index = 0;
   
      if(this.monTime.length>0){
        for(let i=0;i<this.monTime.length;i++){
          if(this.monRes == this.monTime[i]){
            index++;
            break;
          }
        }
        if(index>0){
          alert("already booked")
        
        }else{
          this.monTime.push(this.monRes)
          localStorage.setItem("monTime",JSON.stringify(this.monTime))
        }
      }else{
        this.monTime.push(this.monRes)
        localStorage.setItem("monTime",JSON.stringify(this.monTime))
      }

    }
  }


    bookedTue(){
     if(this.tueRes){
      let index = 0;
   
      if(this.tueTime.length>0){
        for(let i=0;i<this.tueTime.length;i++){
          if(this.tueRes == this.tueTime[i]){
            index++;
            break;
          }
        }
        if(index>0){
          alert("already booked")
        
        }else{
          this.tueTime.push(this.tueRes)
          localStorage.setItem("tueTime",JSON.stringify(this.tueTime))
        }
      }else{
        this.tueTime.push(this.tueRes)
        localStorage.setItem("tueTime",JSON.stringify(this.tueTime))
      }


    }
  }


    bookedWed(){
     if(this.wedRes){
      let index = 0;
   
      if(this.wedTime.length>0){
        for(let i=0;i<this.wedTime.length;i++){
          if(this.wedRes == this.wedTime[i]){
            index++;
            break;
          }
        }
        if(index>0){
          alert("already booked")
        
        }else{
          this.wedTime.push(this.wedRes)
          localStorage.setItem("wedTime",JSON.stringify(this.wedTime))
        }
      }else{
        this.wedTime.push(this.wedRes)
        localStorage.setItem("wedTime",JSON.stringify(this.wedTime))
      }

    }
  }


    bookedThu(){
     if(this.thurRes){
      let index = 0;
   
      if(this.thurTime.length>0){
        for(let i=0;i<this.thurTime.length;i++){
          if(this.thurRes == this.thurTime[i]){
            index++;
            break;
          }
        }
        if(index>0){
          alert("already booked")
        
        }else{
          this.thurTime.push(this.thurRes)
          localStorage.setItem("thurTime",JSON.stringify(this.thurTime))
        }
      }else{
        this.thurTime.push(this.thurRes)
        localStorage.setItem("thurTime",JSON.stringify(this.thurTime))
      }

    }
  }


    bookedFri(){
     if(this.friRes){
      let index = 0;
   
      if(this.friTime.length>0){
        for(let i=0;i<this.friTime.length;i++){
          if(this.friRes == this.friTime[i]){
            index++;
            break;
          }
        }
        if(index>0){
          alert("already booked")
        
        }else{
          this.friTime.push(this.friRes)
          localStorage.setItem("friTime",JSON.stringify(this.friTime))
        }
      }else{
        this.friTime.push(this.friRes)
        localStorage.setItem("friTime",JSON.stringify(this.friTime))
      }

    }
  }


    bookedSat(){
     if(this.satRes){
      let index = 0;
   
      if(this.satTime.length>0){
        for(let i=0;i<this.satTime.length;i++){
          if(this.satRes == this.satTime[i]){
            index++;
            break;
          }
        }
        if(index>0){
          alert("already booked")
        
        }else{
          this.satTime.push(this.satRes)
          localStorage.setItem("satTime",JSON.stringify(this.satTime))
        }
      }else{
        this.satTime.push(this.satRes)
        localStorage.setItem("satTime",JSON.stringify(this.satTime))
      }

    }
    //var time = this.timeForm.value.time
    //var result = time
  }



}
