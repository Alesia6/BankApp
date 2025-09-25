import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { FormsModule } from '@angular/forms';   
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
cardNumber: string = '';
pin: string = '';
error: string = '';

constructor(private authService: AuthService, private router: Router) {}
 async onsubmit(): Promise<void> {
  this.error = '';

  if (!this.cardNumber || !this.pin) {
    this.error = 'Card number and Pin are required';
    return;
  }

  const success = await this.authService.login(this.cardNumber, this.pin);

  if(success) {
    this.router.navigate(['/dashboard']);
  }else {
    this.error = 'Invalid card number or PIN'
  }
 }
}

