import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  amount: number = 0;

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(): void {
    if(this.amount <= 0)  {
      alert('Amount must be positive');
      return;
    }

    this.apiService.deposit(this.amount).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);

      },
      error: (error) => {
        alert('Transaction failed: ' + error.error?.error);
      }
    });
  }

}
