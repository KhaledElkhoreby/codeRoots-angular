import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IndexInterceptor } from './http.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: IndexInterceptor, multi: true },
];
