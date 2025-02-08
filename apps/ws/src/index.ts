
import { WebSocketServer } from "ws";
import { UserManager } from "./UserManager";

const ws = new WebSocketServer({port:8080})

ws.on("connection",(ws,request)=>{

    
    const url = request.url
    if(!url){
        ws.close()
        console.log("url is not provide in query parameter")
        return 
    }
    const queryParams = new URLSearchParams(url.split("?")[1])
    const name = queryParams.get("name")
    if(!name){
        ws.close()
        console.log("name is not provide in query params")
        return
    }
    UserManager.getInstance().addUser(ws,name)
    
})