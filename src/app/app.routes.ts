import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/auth/auth.component';
import { HomeComponent } from './features/home/components/home.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './share/header/header.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [],
})
export class AppRoutingModule {}