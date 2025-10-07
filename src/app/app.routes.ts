import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DepositComponent } from "./components/deposit/deposit.component";
import { WithdrawComponent } from "./components/withdraw/withdraw.component";
import { TransactionsComponent } from "./components/transactions/transactions.component";
import { AuthGuard } from "./guards/auth.guard";

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch:'full'},
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'deposit',
        component: DepositComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'withdraw',
        component: WithdrawComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'transactions',
        component: TransactionsComponent,
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '/login'}
];