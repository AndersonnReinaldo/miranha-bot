"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Actions(client) {
    client.onMessage((message) => {
        switch (message.body) {
            case '!ping':
                client.sendText(message.from, 'pong');
                break;
            default:
                client.sendText(message.from, 'Opa, nao entendi!');
                break;
        }
    });
}
exports.default = Actions;
