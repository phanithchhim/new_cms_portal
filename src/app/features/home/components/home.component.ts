import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private apiService: ApiService) { }
  users: any[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.apiService.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (error) => console.error('There was an error!', error)
    });
    console.log("User: ", this.users)
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}