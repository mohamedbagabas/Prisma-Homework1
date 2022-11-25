"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_routes_1 = __importDefault(require("./routes/movie_routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/movie', movie_routes_1.default);
app.listen(5000, () => {
    console.log('Server is running in port 5000');
});
