import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  login(cardNumber: string, pin: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { cardNumber, pin });
  }


  getBalance(): Observable<{ balance: number }> {
    return this.http.get<{ balance: number }>(`${this.baseUrl}/balance`);
  }

  
  withdraw(amount: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/withdraw`, { amount });
  }

  deposit(amount: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/deposit`, { amount });
  }

  getTransactions(limit?: number): Observable<Transaction[]> {
    const params = limit ? `?limit=${limit}` : '';
    return this.http.get<Transaction[]>(`${this.baseUrl}/transactions${params}`);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }
}