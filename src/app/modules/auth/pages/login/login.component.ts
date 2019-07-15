import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/modules/home/home.routing';
import { AuthService } from 'src/app/core/services/auth.service';
import { error } from 'util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;
  myFormValidation: FormGroup;
  submitted = false;
  errorLogin = true;


  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.formValidate();
  }

  formValidate() {
    this.myFormValidation = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.myFormValidation.controls; }


  onLogin() {

    this.submitted = true;
    if (this.myFormValidation.invalid) {
      return;
    }

    this.authService.login(this.login, this.password).subscribe(
      val => {
        console.log(val);
        this.navigateToHomePage();
      },
      error => {
        console.log(error);
        this.errorLogin = false;
      }
    );

  }

  navigateToHomePage() {
    this.router.navigate(['/dashboard/home']);
  }

}
