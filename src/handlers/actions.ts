import { Whatsapp } from 'venom-bot'
export default function Actions(client:Whatsapp){

    client.onMessage((message) => {
        switch (message.body) {
            case '!ping':
                client.sendText(message.from,'pong');
                break;
            default:
                client.sendText(message.from,'Opa, nao entendi!');
                break;
        }
    })
    
}