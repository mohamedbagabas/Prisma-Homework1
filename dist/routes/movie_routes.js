"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../middleware/validate"));
const movie_schema_1 = require("../zod_schema/movie_schema");
const router = express_1.default.Router();
let movie = [];
router.get('/', (req, res, next) => {
    return res.json(movie);
});
router.post('/', (0, validate_1.default)(movie_schema_1.movie_schema), (req, res, next) => {
    const newmovie = req.body;
    movie.push(newmovie);
    return res.status(201).json({ message: 'Movie Added !' });
});
router.put(`/:id`, (0, validate_1.default)(movie_schema_1.movie_schema), (req, res) => {
    const updatemovie = req.body;
    const { id } = req.params;
    const updatemoviesList = movie.filter((umovie) => {
        return umovie.id !== id;
    });
    updatemoviesList.push(updatemovie);
    movie = updatemoviesList;
    res.json({
        message: "Movie Update",
    });
});
router.delete(`/:id`, (req, res) => {
    const { id } = req.params;
    const deletemovieList = movie.filter((dmovie) => {
        return dmovie.id !== id;
    });
    movie = deletemovieList;
    res.json({
        message: "Movie Delete",
    });
});
router.get(`/search/:id`, (req, res) => {
    const { id } = req.params;
    const searchmov = movie.filter((dmovie) => {
        if (dmovie.name === id || dmovie.gener === id || dmovie.id === id) {
            return dmovie;
        }
    });
    res.json(searchmov);
});
exports.default = router;
