import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/auth/auth.component';
import { HomeComponent } from './features/home/components/home.component';
import { AuthService } from './core/auth/auth.service';
import { AuthGuard } from './core/auth/auth.guard';

@Injectable({
  providedIn: 'root',
})
export class RedirectIfLoggedInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false; // Prevent access to login if already logged in
    }
    return true; // Allow access to login if not logged in
  }
}

export const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent, canActivate: [RedirectIfLoggedInGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];

export const AppRoutes = RouterModule.forRoot(routes);