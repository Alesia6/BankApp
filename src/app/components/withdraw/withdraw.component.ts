import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {

  amount: number = 0;

  constructor (private apiService: ApiService, private router:Router){}

  onSubmit():void {
    if (this.amount <= 0) {
      alert('Amount must be positive');
      return;
    }

    this.apiService.withdraw(this.amount).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        alert('Transaction failed:' + error.error?.error);
      }
        });
  }
}
