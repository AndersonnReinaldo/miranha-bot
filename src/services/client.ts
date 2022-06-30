import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal'
import Actions from '../handlers/actions';

const client = new Client({});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Cliente Conectado 🚀!');
});

client.on('message',Actions);

client.initialize();