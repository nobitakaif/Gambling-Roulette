import { WebSocket } from "ws"
import { outgoingMessages } from "./types"

// we are creating in-memory database eventually we'll create actuall database
let ID = 1
interface User{
   id:number
    ws:WebSocket,
    name:string
}

export class UserManager{
    private _user:User[]
    
    constructor (){
        
    }

    addUser(ws:WebSocket,name:string){
        let id = ID
        this._user.push({
            ws,
            name,
            id
        })

        ws.on("close", ()=>{
            this.removeUser(id)
        })
        ID++
    }

    removeUser(id:number){
        this._user.filter(x => x.id !== id)
    }


    // Broadcast msg to everyone who has joined the room
    // if userId is an input don't send them the msg
    broadcast(message:outgoingMessages,userId?:number){
        this._user.forEach( ({id,ws})=>{
            if(userId !== id){
                ws.send(JSON.stringify(message))
            }
        })

    }

}