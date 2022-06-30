import { start } from "repl";
import { create,Whatsapp,Message,SocketState } from "venom-bot";


class Sender {
    private client: Whatsapp

    constructor() {
        this.initialize()
    }
    
    private initialize(){

        const qr = ( base64Qrimg:string ) => {}

        const status = ( statusSession:string ) => {}

        const start = (client:Whatsapp) => {
            this.client = client
        }

        create('miranha-bot',qr,status)
        .then((client) => start(client))
        .catch((err) => console.error(err))

    }

}

export default Sender