import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Ensure this file exports the correct configuration

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
