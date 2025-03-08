export enum AuthMethods {
  ONECLIECK = "one click",
  BYPHONE = "by phone",
  BYEMAIL = "by email",
}

export interface CricketOddsCardProps {
  data: {
    eventName: string;
    format: string;
    teams: {
      team1: {
        name: string;
        flag: string;
      };
      team2: {
        name: string;
        flag: string;
      };
    };
    score: {
      team1: string;
      team2: string;
    };
    odds: {
      team1: number;
      team2: number;
      draw: number;
    };
    redirectPath: string;
  };
}

export interface FootballOddsCardProps {
  data: {
    eventName: string;
    time: string;
    teams: {
      team1: {
        name: string;
        flag: string;
      };
      team2: {
        name: string;
        flag: string;
      };
    };
    score: {
      team1: string;
      team2: string;
    };
    odds: {
      team1: number;
      team2: number;
      draw: number;
    };

    redirectPath: string;
  };
}
