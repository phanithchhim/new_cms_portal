import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private apiUrl = 'https://localhost:7028/api/'; // Updated API base URL
  private apiUrl = 'https://localhost:7028/api/'

  constructor(private http: HttpClient) { }

  // GET request to retrieve all users
  // getUsers(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/Users`);
  // }
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}Users`).pipe(
      catchError(this.handleError)
    );
  }
  

  // GET request to retrieve a single user by ID
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}Users/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  
  // POST request to create a new user
  createUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Users`, data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // PUT request to update an existing user by ID
  updateUser(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Users/${id}`, data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // DELETE request to remove a user by ID
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Users/${id}`);
  }

private handleError(error: HttpErrorResponse): Observable<never> {
  console.error('An error occurred:', error);
  // Provide a user-friendly error message or a custom error object
  return throwError(() => new Error('Something went wrong; please try again later.'));
}
}
