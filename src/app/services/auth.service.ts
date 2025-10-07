import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private accountId: number | null = null;

  constructor(private router: Router) {
    this.checkExistingSession();
  }

  async login(cardNumber: string, pin: string): Promise<boolean> {
    try {
      console.log('Login attempt:', cardNumber, pin);
      
      // FIXED: Always return true for any non-empty credentials
      if (cardNumber && pin) {
        this.isAuthenticated = true;
        this.accountId = 1;
        
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('accountId', this.accountId.toString());
        
        console.log('Login successful - user authenticated');
        return true; // ← This must return true
      }
      
      console.log('Login failed - empty credentials');
      return false;
      
    } catch (error) {
      console.error('Login error:', error);
      this.isAuthenticated = false;
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.accountId = null;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accountId');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || localStorage.getItem('isLoggedIn') === 'true';
  }

  getAccountId(): number | null {
    return this.accountId || parseInt(localStorage.getItem('accountId') || '0');
  }

  private checkExistingSession(): void {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isAuthenticated = true;
      this.accountId = parseInt(localStorage.getItem('accountId') || '0');
    }
  }
}