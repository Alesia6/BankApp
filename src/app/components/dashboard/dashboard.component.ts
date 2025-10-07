import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
balance: number = 1000; //for the moment
accountId: number = 0;

constructor(
  private apiService: ApiService,
  private authService: AuthService
){}

ngOnInit(): void {
this.accountId = this.authService.getAccountId() || 0;
this.loadBalance();
}

loadBalance(): void {
  this.apiService.getBalance().subscribe({
    next: (response) => {
      this.balance = response.balance;
    },
    error: (error) => {
      console.error("Failed to load balance:", error)
    }
  });
}

logout(): void {
  this.authService.logout();
}
}
