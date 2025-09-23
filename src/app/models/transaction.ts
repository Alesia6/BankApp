export interface Transaction {
    id: number;
    account_id: number;
    type: 'DEPOSIT' | 'WITHDRAW';
    account: number;
    balance_after: number;
    created_at: Date;
}
