import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { StagiaireService } from 'src/app/services/stagiaire.service';
import { SocieteService } from 'src/app/services/societe.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  addForm: FormGroup;
  idUser: any;
  constructor(
    private sAuth: AuthService,
    private stagiaireS: StagiaireService,
    private societeS: SocieteService,
    private router: Router
  ) {
    this.addForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      role: new FormControl(''),
      telephone: new FormControl('', [Validators.pattern('^[0-9]')]),
      password: new FormControl(''),
      rep_password: new FormControl(''),
      user: new FormControl(this.idUser),
    });
  }

  ngOnInit(): void {}

  register() {
    let data = this.addForm.getRawValue();
    if (data.password !== data.rep_password) {
      alert('les mots de passe ne correspondent pas');
      return;
    } else {
      console.log(data);
      this.sAuth.register(data).subscribe(
        (res) => {
          if (res) {
            this.router.navigateByUrl('/auth');
            alert('merci de votre inscription');
          }
        },
        (err) => {
          alert("un erreur  à l'inscription");
        }
      );
    }
  }
}
