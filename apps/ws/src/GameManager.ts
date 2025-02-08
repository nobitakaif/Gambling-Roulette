import { Bet, GameState, Number } from "./types";

export class GameManager{

    state: GameState = GameState.GameOver
    bets:Bet[] = []
    private static _instance : GameManager
    private _lastWinner :Number = Number.Zero 
    
    public constructor(){ }

    public static getInstance(){
        if(!this._instance){
            this._instance = new GameManager()
        }
        return this._instance
    }

    // end user will call this
    public bet(amount:number, betNumber:Number,id:number):Boolean{
        if(this.state === GameState.CanBet){
            const number = betNumber
            // @ts-ignore
            this.bets.push({id,amount,number})
            return true
        }
        return false
    }

    
    public start(){
        this.state = GameState.CanBet
    }

    public end(output: Number){
        this._lastWinner = output
        this.bets.forEach(bet=>{
            bet.clientId.send({
                type : "bet-win",
                amount : bet.amount,
                number : bet.number,
                output : output
            })
        })
    }
}