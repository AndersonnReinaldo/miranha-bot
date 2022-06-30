import { GroupNotification } from 'whatsapp-web.js';

export default function Actions(message:any){

    switch (message.body) {
        case '!ping':
            message.reply('pong');
            break;
        default:
            message.reply('Nao entendi o comando');
            break;
    }
}