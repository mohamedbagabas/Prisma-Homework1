"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.prisma = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    log: ['query', 'warn', 'error'],
    errorFormat: 'pretty',
});
exports.prisma = prisma;
const connectDB = () => {
    try {
        prisma.$connect();
        console.log('Database Connected !');
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
