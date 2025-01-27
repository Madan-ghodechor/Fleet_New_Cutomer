import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service'; // Import AuthService

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve the authentication token (from localStorage, sessionStorage, or a service)
    const token = this.authService.getAuthToken();

    if (token) {
      // Clone the request to add the Authorization header
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // Append token to Authorization header
        }
      });
      return next.handle(clonedRequest); // Forward the cloned request
    }

    // If there's no token, proceed with the original request
    return next.handle(req);
  }
}
