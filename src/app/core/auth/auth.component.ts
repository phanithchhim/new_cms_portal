import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service'; // Ensure AuthService is imported

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class AuthComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  onLogin() {
    console.log('Attempting login with:', this.username, this.password);
    const success = this.authService.login(this.username, this.password);
    if (success) {
      console.log('Login successful');
      this.router.navigate(['/home']);
    } else {
      console.log('Login failed');
      alert('Invalid credentials');
    }
  }
}
