import { Bet, GameState } from "./types";

export class GameManager{

    state: GameState = GameState.GameOver
    bets:Bet[] = []
    private static _instance : GameManager
    
    public constructor(){ }

    public static getInstance(){
        if(!this._instance){
            this._instance = new GameManager()
        }
        return this._instance
    }

    public bet(amount:number, betNumber:Number,id:number):Boolean{
        if(this.state === GameState.CanBet){
            const number = betNumber
            // @ts-ignore
            this.bets.push({id,amount,number})
            return true
        }
        return false
    }
}