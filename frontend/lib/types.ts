export type Player = {
    player: string;
    games: number;
    ppd: number;
    mpr: number;
    hat_trick_01: number;
    low_ton: number;
    high_ton: number;
    white_horse: number;
    cricket_hat_trick: number;
    nine_mark: number;
    eight_mark: number;
    seven_mark: number;
};

export type Team = {
    team: string;
    wins: number;
    losses: number;
    win_percentage: number;
    team_avg_ppd: number;
    team_avg_mpr: number;
    games: number;
    forfeits: number;
    players: Player[];
};