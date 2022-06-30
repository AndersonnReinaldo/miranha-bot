"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const venom_bot_1 = require("venom-bot");
const actions_1 = __importDefault(require("../handlers/actions"));
(0, venom_bot_1.create)({ session: 'miranha-bot', multidevice: true })
    .then((client) => (0, actions_1.default)(client))
    .catch((erro) => {
    console.log(erro);
});
