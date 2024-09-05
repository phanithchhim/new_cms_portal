// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../../core/auth/auth.service';
// import { Router } from '@angular/router';
// import { ApiService } from '../../../core/services/api.service';
// import { catchError, Observable } from 'rxjs';


// @Component({
//   selector: 'app-header',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'],
//   standalone: true,
// })
// export class HomeComponent implements OnInit {

//   constructor(private authService: AuthService, private router: Router, private apiService: ApiService) { }
//   users: any[] = [];

//   ngOnInit(): void {
//     this.loadData();
//   }

//   loadData() {
//     this.apiService.getUsers().subscribe({
//       next: (data) => this.users = data,
//       error: (error) => console.error('There was an error!', error)
//     });
//     console.log("User: ", this.users)
//   }



//   logout() {
//     this.authService.logout();
//     this.router.navigate(['/auth']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { AuthService } from '../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule]  // Include CommonModule here
})
export class HomeComponent implements OnInit {
  users: any[] = [];

  constructor(private authService: AuthService, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadData(247);
    
  }

  // loadData() {
  //   this.apiService.getUsers().subscribe((data: any) => {
  //     this.users = data;
  //     console.log('User:', this.users);
  //   });
    
  // }

  // loadData() {
  //   this.apiService.getUsers().subscribe({
  //     next: (response) => {
  //       if (response.status === 200) {
  //         this.users = response.data; // Ensure 'response.data' matches your actual API response structure
  //       } else {
  //         console.error('Unexpected response status:', response.status);
  //       }
  //     },
  //     error: (error) => {
  //       console.error('There was an error!', error);
  //     }
  //   });

  loadData(id: number) {
    this.apiService.getUserById(id).subscribe({
      next: (response) => {
        // Wrap the single user object in an array
        this.users = [response];
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
