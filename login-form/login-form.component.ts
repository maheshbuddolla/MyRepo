import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms'; 
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router,private ser:LoginServiceService) { }
 form;
  ngOnInit() {
    this.form=new FormGroup({
    username: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required),
    });

    console.log(this.ser.success);
    console.log("22222");
    this.ser.fetchData();
  }
  
  onSubmit=function(user){
    console.log(user);
  }
 
}
