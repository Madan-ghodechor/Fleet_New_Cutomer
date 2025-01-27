import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Import your AuthService
import { Router } from '@angular/router'; // Import Router for redirecting
import { CanActivateFn } from '@angular/router'; // Import CanActivateFn

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService); // Get instance of AuthService
  const router = inject(Router); // Get instance of Router

  // Check if the user is authenticated
  if (authService.isAuthenticated()) {
    return true; // Allow access if authenticated
  } else {
    // Redirect to login page if not authenticated
    router.navigate(['/login']);
    return false; // Prevent access
  }
};
