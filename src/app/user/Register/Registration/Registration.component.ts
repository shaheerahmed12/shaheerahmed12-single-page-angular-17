import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { UserServiceService } from '../../../services/userService.service';
import { User } from '../../../model/user';
import * as alertyfy from 'alertify'
@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user!: User;
  userSubmitted!: boolean;

  constructor(private fb: FormBuilder, private userService: UserServiceService) { }
  registrationForm!: FormGroup;

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirm: [null, Validators.required]
    }, { validators: this.checkingValidators });
  }

  checkingValidators(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirm = control.get('confirm')?.value;

    if (password === confirm) {
      return null; // passwords match
    } else {
      return { notMatched: true }; // passwords do not match
    }
  }

  userData(): User {
    return {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value
    };
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirm() {
    return this.registrationForm.get('confirm') as FormControl;
  }

  onSubmit() {
    console.log(this.registrationForm);
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      this.user = this.userData();
      this.userService.addUser(this.user);
      this.registrationForm.reset();
      this.userSubmitted = false;
      alertyfy.success("congrate, you are successfully registered ")
    }
    else{
      alertyfy.error("kindly provide the required fields");
      
    }
  }
}