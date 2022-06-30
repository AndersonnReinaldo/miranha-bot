"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
require("./services/client");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3884;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(routes_1.default);
app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🚀`));
