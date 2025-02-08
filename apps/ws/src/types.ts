
export type outgoingMessages={
    type : "bet",
    clientId : string,
    amount : number,
    balance : number,
    locked : number
} | {
    type : "bet-undo",
    clientId : string,
    amount : number,
    balance : number,
    locked : number
}

export enum COINS {
    One, 
    Five,
    Ten,
    TwentyFive,
    Fifty,
    OneHundred,
    TwoHundredFifty,
    FiveHundred,
} 

export enum Number{
    Zero,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
    Thirteen,
    Fourteen,
    Fifteen,
    Sixteen,
    Seventeen,
    Eighteen,
    Nineteen,
    Twenty,
    TwentyOne,
    TwentyTwo,
    TwentyThree,
    TwentyFour,
    TwentyFive,
    TwentySix,
    TwentySeven,
    TwentyEight,
    TwentyNine,
    Thirty,
    ThirtyOne,
    ThirtyTwo,
    ThirtyThree,
    ThirtyFour,
    Thirtyfive
}


export enum GameState {
        CanBet,
        CantBet,
        GameOver
}

export type Bet={
    id:number,
    amount : number,
    number : Number,
    
}