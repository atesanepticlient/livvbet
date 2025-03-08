export interface Deposit {
  wallet: string;
  minimumDeposit: number;
  depositRange?: Array<number>;
  maximumDeposit: number;
}

export interface Withdraw {
  minimumWithdraw: number;
  maximumWithdraw: number;
}

export interface PaymentWallet {
  walletName: string;
  image: string;
  deposit?: Deposit;
  withdraw?: Withdraw;
  isActive: boolean;
}

export interface PaymentMethod {
  methodName: string;
  wallets: PaymentWallet[];
}
