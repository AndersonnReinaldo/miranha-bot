"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Actions(message) {
    switch (message.body) {
        case '!ping':
            message.reply('pong');
            break;
        default:
            message.reply('Nao entendi o comando');
            break;
    }
}
exports.default = Actions;
