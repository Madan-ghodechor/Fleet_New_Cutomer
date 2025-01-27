import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Retrieve the authentication token from storage or another source
  getAuthToken(): string | null {
    return localStorage.getItem('auth_token'); // You can store your token in localStorage
  }

  // Other auth methods like login, logout, etc.
  login(token: string): void {
    localStorage.setItem('auth_token', token); // Store token after successful login
  }

  logout(): void {
    localStorage.removeItem('auth_token'); // Clear the token on logout
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return this.getAuthToken() !== null; // Return true if token exists
  }
}
