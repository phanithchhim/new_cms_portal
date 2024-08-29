import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  loginForm: FormGroup;  // FormGroup for login form
  errorMessage: string = '';  // To display error messages if any

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form with form controls and validators
    this.loginForm = this.fb.group({
      environment: ['UAT-Preproduction', Validators.required],  // Environment selection field
      userAD: ['', Validators.required],  // User AD input field
      password: ['', Validators.required]  // Password input field
    });
  }

onLogin() {
  console.log('onLogin method called');
  // Your login logic here
  this.router.navigate(['/home']);
}
}
