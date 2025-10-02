export interface Transaction {
  id: number;
  account_id: number;
  type: 'DEPOSIT' | 'WITHDRAW';
  amount: number;
  balance_after: number;
  created_at: Date;
}