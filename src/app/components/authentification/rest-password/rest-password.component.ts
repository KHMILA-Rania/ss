import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.scss'],
})
export class RestPasswordComponent implements OnInit {
  addForm: FormGroup;
  token: any;
  currentUserID;
  currentUser: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private acttivatedRoot: ActivatedRoute,
    private userService: UserService
  ) {
    this.acttivatedRoot.params.subscribe((param: any) => {
      this.token = param.resetToken;
    });
    this.currentUserID = this.authService.getUserIdByToken(this.token);
    this.userService.getOne(this.currentUserID).subscribe((res: any) => {
      this.currentUser = res.data;
    });
    this.addForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {
    console.log(this.token)
    console.log(this.currentUserID);  
    console.log(this.currentUser);
  }

  resetPassword() {
    // let data = this.addForm.getRawValue();
    // this.sAuth.resetPassword(this.idUser, data).subscribe((res: any) => {
    //   if (res.status == 200) {
    //     this.router.navigate(['/login']);
    //   }
    // });
  }
}
