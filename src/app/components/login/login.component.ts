import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cardNumber: string = '';
  pin: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Make sure this method name matches exactly what's in the template
  async onSubmit(): Promise<void> {
    this.error = '';

    if (!this.cardNumber || !this.pin) {
      this.error = 'Card number and PIN are required';
      return;
    }

    const success = await this.authService.login(this.cardNumber, this.pin);

    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid card number or PIN';
    }
  }
}