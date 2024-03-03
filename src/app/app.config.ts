import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
 

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { withViewTransitions } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withFetch()), provideClientHydration(),withViewTransitions()],

};
