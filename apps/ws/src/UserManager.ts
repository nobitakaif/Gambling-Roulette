import { WebSocket } from "ws"
import { outgoingMessages } from "./types"
import { User } from "./User"

// we are creating in-memory database eventually we'll create actuall database
let ID = 1


export class UserManager{
    private _user:User[]=[]
    private static _instance : UserManager
    
    private constructor (){
        
    }

    public static getInstance(){
        if(!this._instance){
            this._instance = new UserManager()
        }
        return this._instance
    }

    addUser(ws:WebSocket,name:string){
        let id = ID
        this._user.push(new User(
            ws,
            id,
            name
        ))

        ws.on("close", ()=>{
            this.removeUser(id)
        })
        ID++
    }

    removeUser(id:number){
        this._user.filter(x => x.id !== id)
    }


    // Broadcast msg to everyone who has joined the room
    // if userId is an input don't send them the msg (if user send the msg then don't come back to him )
    broadcast(message:outgoingMessages,userId?:number){
        this._user.forEach( ({id,ws})=>{
            if(userId !== id){
                ws.send(JSON.stringify(message))
            }
        })

    }

}