import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./share/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,  // Mark the component as standalone
  imports: [RouterModule, HeaderComponent],  // Import any necessary Angular modules directly
  template: `
    <router-outlet></router-outlet>
    <!-- <app-header></app-header> -->

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
