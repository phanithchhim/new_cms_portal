import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header', 
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'] 

  })
  export class HomeComponent {  
    constructor(private router: Router) { } 

    onLogin() {
      console.log('onLogin method called');
      // Your login logic here
      this.router.navigate(['/auth']);
    }
  }