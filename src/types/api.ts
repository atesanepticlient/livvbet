import { Game } from "@/provider/type";
import { Prisma } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export interface GetBalanceInput {
  userName: string;
  cur: string;
}

export interface GetBalanceOutput {
  userName: string;
  cur: string;
  amt: Decimal;
  Err: string;
}

enum GamesTypes {
  Ba = "Ba",
  BC = "BC",
  Bi = "Bi",
  Bl = "Bl",
  Dc = "Dc",
  Dt = "Dt",
  Ft = "Ft",
  Ro = "Ro",
  Sd = "Sd",
  AH = "AH",
  BG = "BG",
  BP = "BP",
  BU = "BU",
  CL = "CL",
  MW = "MW",
  PD = "PD",
  RN = "RN",
  SL = "SL",
}
export interface FundTransferInput {
  userName: string;
  cur: string;
  amt: Decimal;
  requestId: number;
  cwTransId: number;
  transType: string;
  gameType: GamesTypes;
  commBaseAmt?: number;
  reverseRequestId?: number;
  accountDateTime: string;
  jackpotBetAmt: number;
}

export interface DepostisMethods {
  methodName: string;
  wallets:
    | Prisma.DepositEWalletGetPayload<object>[]
    | Prisma.DepositEWalletGetPayload<object>[];
}
export interface WithdrawMethods {
  methodName: string;
  wallets:
    | Prisma.DepositEWalletGetPayload<object>[]
    | Prisma.DepositEWalletGetPayload<object>[];
}

export interface PaymentDataOutput {
  payload: {
    withdraw: WithdrawMethods[];
    deposit: DepostisMethods[];
  };
}

export interface MakeDepositInput {
  payFrom: string;
  amount: number;
  transactionId: string;
  walletId: string;
}

export interface MakeWithdrawInput {
  payTo: string;
  amount: number;
  walletId: string;
}

export interface TransactionsOutput {
  payload: {
    withdraws: Prisma.WithdrawGetPayload<{
      include: { withdrawEWallet: true };
    }>[];
    deposits: Prisma.DepositGetPayload<{
      include: { ewallet: true };
    }>[];
  };
}

export interface MessageOutput {
  payload: Prisma.MessageGetPayload<object>[];
}

export interface CasinoGamesOutput {
  payload: {
    errorCode: string;
    games: Game[];
  };
}
