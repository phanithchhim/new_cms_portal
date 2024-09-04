import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenKey = 'authToken';
  constructor(private cookieService: CookieService) { }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '123456789') {
      const token = this.generateToken();
      this.cookieService.set(this.tokenKey, token); // Set cookie with path '/'
      return true;
    }
    return false;
  }

  logout() {
    this.cookieService.delete(this.tokenKey); // Delete cookie
  }

  isLoggedIn(): boolean {
    return !!this.cookieService.get(this.tokenKey); // Check for token in cookie
  }

  private generateToken(length = 32) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      token += charset[randomIndex];
    }
    return token;
  }
}