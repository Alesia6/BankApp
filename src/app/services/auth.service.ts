import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private isAuthenticated = false;
private accountId: number | null = null;

constructor(private apiService: ApiService, private router: Router) {
  this.checkExistingSession();
}
async login(cardNumber: string, pin: string) : Promise<boolean> {
  try {
    //stroing the login state in localstorage for the moment
    const response: any = await this.apiService.login(cardNumber, pin).toPromise();
  }
}
  
}
