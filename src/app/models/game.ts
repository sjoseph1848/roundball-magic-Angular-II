export interface Score {
    points: string;
}

export interface VTeam {
    teamId: string;
    shortName: string;
    fullName: string;
    nickName: string;
    logo: string;
    score: Score;
}

export interface Score2 {
    points: string;
}

export interface HTeam {
    teamId: string;
    shortName: string;
    fullName: string;
    nickName: string;
    logo: string;
    score: Score2;
}

export interface Game {
    seasonYear: string;
    league: string;
    gameId: string;
    startTimeUTC: Date;
    endTimeUTC: string;
    arena: string;
    city: string;
    country: string;
    clock: string;
    gameDuration: string;
    currentPeriod: string;
    halftime: string;
    EndOfPeriod: string;
    seasonStage: string;
    statusShortGame: string;
    statusGame: string;
    vTeam: VTeam;
    hTeam: HTeam;
}
