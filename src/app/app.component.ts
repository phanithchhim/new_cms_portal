import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./share/header/header.component";
import { RedirectIfLoggedInGuard } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,  // Mark the component as standalone
  imports: [RouterModule, HeaderComponent],  // Import any necessary Angular modules directly
  // templateUrl: './app.component.html',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  providers: [RedirectIfLoggedInGuard],
})
export class AppComponent { }