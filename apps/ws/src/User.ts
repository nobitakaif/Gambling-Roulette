import { WebSocket } from "ws"
import { COINS, outgoingMessages } from "./types"
import { GameManager } from "./GameManager"

export class User{

    id : number
    name : string
    balance : number
    locked : number
    ws:WebSocket

    constructor(ws:WebSocket,id:number, name: string){
        this.ws = ws
        this.balance= 2500
        this.name = name
        this.id = id
        this.locked = 0
    }

    bet(clientId:string,amount : COINS,betNumber:Number){
        this.balance -= amount
        this.locked += amount
        const responce = GameManager.getInstance().bet(amount,betNumber,this.id)
        if(responce){
            this.send({
                clientId,
                type : "bet",
                amount : amount,
                balance : this.balance,
                locked : this.locked
            })
        }
        else{
            this.send({
                clientId,
                type : "bet-undo",
                amount : amount,
                balance : this.balance,
                locked : this.locked
            })
        }
        
    }

    send(payload: outgoingMessages){

    }
}