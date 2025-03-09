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
