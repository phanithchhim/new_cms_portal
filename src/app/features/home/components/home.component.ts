import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-header', 
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'] ,
    standalone: true,
  })
  export class HomeComponent {  
    constructor(private authService: AuthService, private router: Router) { }

    logout() {
      this.authService.logout();
      this.router.navigate(['/auth']);
    }
  }
