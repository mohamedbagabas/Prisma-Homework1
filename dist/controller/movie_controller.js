"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletemovieHandler = exports.updatemovieHandler = exports.addmovieHandler = exports.getOnemovieHandler = exports.getmovieHandler = void 0;
const db_1 = require("../config/db");
const getmovieHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield db_1.prisma.movie.findMany();
        return res.status(200).json(movies);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error !' });
    }
});
exports.getmovieHandler = getmovieHandler;
const getOnemovieHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const movie = yield db_1.prisma.movie.findUnique({
            where: { id },
        });
        return res.status(200).json(movie);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error !' });
    }
});
exports.getOnemovieHandler = getOnemovieHandler;
const addmovieHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newmovie = req.body;
        yield db_1.prisma.movie.create({
            data: newmovie,
        });
        return res.status(201).json({ message: 'New movie added !' });
    }
    catch (error) {
        const prismaError = error;
        if (prismaError.code == 'P2002') {
            return res.status(400).json({
                message: 'You phone number have been used before',
            });
        }
        return res.status(500).json({
            message: 'Server Error !',
        });
    }
});
exports.addmovieHandler = addmovieHandler;
const updatemovieHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newmovie = req.body;
        const { id } = req.body;
        yield db_1.prisma.movie.update({
            where: { id },
            data: newmovie,
        });
        return res.status(200).json({ message: 'movie updated' });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Server Error !',
        });
    }
});
exports.updatemovieHandler = updatemovieHandler;
const deletemovieHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        yield db_1.prisma.movie.delete({
            where: { id },
        });
        return res.status(200).json({ message: 'movie Deleted !' });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Server Error !',
        });
    }
});
exports.deletemovieHandler = deletemovieHandler;
