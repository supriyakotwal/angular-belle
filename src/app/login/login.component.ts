import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";


import {loginService} from '../login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public loginService : loginService 
  ) {
    this.formGroup = this.formBuilder.group({
      password: '',
      emailId: ''
    });
  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  onSubmit(formData: any) {
    var emailId = formData['emailId'];
    var password = formData['password'];
    if(emailId === "skotwal@gmail.com" && password === "skotwal123") {
      this.loginService.isLoggedIn = true;
      this.router.navigate(['/product']);
    }
  }
}
