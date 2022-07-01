import { create,Whatsapp } from "venom-bot";

export interface ISenderProps {
    sendText: (to:string,body:string) => void
}

class Sender {
    private client: Whatsapp

    public get sessionClient() : Whatsapp {
        return this.client
    }
    
    constructor() {
        this.initialize()
    }

    async sendText(to:string,body:string): Promise<void>{

        await this.client.sendText(to,body)
    }
    
    private initialize(){

        const qr = ( base64Qrimg:string ) => {}

        const status = ( statusSession:string ) => {}

        const start = (client:Whatsapp) => {
            this.client = client
        }

        create('miranha-bot',qr)
          .then((client) => start(client))
          .catch((erro) => {
            console.log(erro);
          })
    }

}

export default Sender