import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.scss'],
})
export class RestPasswordComponent implements OnInit {
  addForm: FormGroup;
  constructor(private sAuth: AuthService, private router: Router) {
    this.addForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('',Validators.required),
    });
  }
  ngOnInit(): void {}
  async resetPassword(){

  }
}
