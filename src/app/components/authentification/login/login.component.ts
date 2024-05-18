import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  addForm:FormGroup
  constructor(private sAuth:AuthService){
    this.addForm=new FormGroup({
      email :new FormControl('',[Validators.required]),
      password :new FormControl('', [Validators.required]),
      })
  }
  ngOnInit(): void {
  };

  login(){
    let data=this.addForm.getRawValue()
    // if(data.email!==data.email)
    //   {
    //     alert("utilisateur n'est pas enregistré");
    //     return;
    //   }else{
      console.log(data)
      this.sAuth.login(data)
      // };
  };

 

}
