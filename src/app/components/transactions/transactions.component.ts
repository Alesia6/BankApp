import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Transaction } from '../../models/transaction';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[] =[];
  limit: number=50;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadTransactions();
    }
 loadTransactions(limit?: number): void {
  if (limit) this.limit = limit;

  this.apiService.getTransactions(this.limit).subscribe({
    next: (transactions) => {
      this.transactions = transactions;
    },
    error: (error) => {
     console.log("Failed to load transactions:", error);
    },
    
  });
 }
 getTransactionClass(type: string): string {
  return type.toLowerCase();
 }

  } 