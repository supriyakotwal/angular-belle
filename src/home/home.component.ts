import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      mobileNumber: '',
      emailId: '',
      comment: ''
    });
  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobileNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  onSubmit(formData: any) {
    var emailId = formData['emailId'];
    console.log(emailId)
  }
}
