/* eslint-disable @typescript-eslint/no-explicit-any */


/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface CreateAccountInput {
  consumerId: number;
  userName: string;
  password: string;
  currencyCode: string;
  firstName: string;
  lastName: string;
}

export interface FetchGamesListInput {
  consumerId: number;
}

export interface Game {
  Id: number;
  GameName: string;
  GameNameDisplay: string;
  ImageUrl: string | any;
  ImageName: string;
  GameType: string;
  SubGameType: string;
  IsHot: boolean;
  IsNew: boolean;
}

export interface GameLoginInput {
  consumerId: number;
  userName: string;
  password: string;
  culture: string;
  gameid: string;
}

export interface LoginSlotsInput extends GameLoginInput {}

export interface LoginBingoInput extends GameLoginInput {
  isMobile: boolean;
}

export interface LoginMinesInput extends GameLoginInput {
  isMobile: boolean;
}

export interface LoginCrashInput extends GameLoginInput {
  isMobile: boolean;
}

export interface CreateSportBookAccount {
  userName: string;
  secret: string;
  agent: string;
}


export interface SportBookLoginInput {
  userName: string;
  secret: string;
  agent: string;
  language : string;
}