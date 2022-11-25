"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("../controller/movie_controller");
const validate_1 = __importDefault(require("../middleware/validate"));
const movie_schema_1 = require("../zod_schema/movie_schema");
const router = express_1.default.Router();
//  let movie: MovieSchemaType[] = [];
// router.get('/', (req, res, next) => {
//   return res.json(movie);
// });
// router.post('/', validate(addmovie_schema), (req, res, next) => {
//   const newmovie= req.body as MovieSchemaType;
//   movie.push(newmovie);
//   return res.status(201).json({ message: 'Movie Added !' });
// });
// router.put(`/:id`, validate(addmovie_schema),(req, res) => {
//     const updatemovie = req.body as MovieSchemaType;
//     const { id } = req.params;
//     const updatemoviesList = movie.filter((umovie:any) => {
//       return umovie.id !== id;
//     });
//     updatemoviesList.push(updatemovie);
//     movie = updatemoviesList;
//     res.json({
//       message: "Movie Update",
//     });
//   });
//   router.delete(`/:id`, (req, res) => {
//     const { id } = req.params;
//     const deletemovieList = movie.filter((dmovie) => {
//       return dmovie.id !== id;
//     });
//     movie = deletemovieList;
//     res.json({
//       message: "Movie Delete",
//     });
//   });
//   router.get(`/search/:id`, (req, res) => {
//     const { id } = req.params;
//     const searchmov = movie.filter((dmovie) => {
//      if(dmovie.name===id || dmovie.gener===id || dmovie.id===id){
//       return dmovie;
//      }
//     });
//     res.json(searchmov);
//   });
router.get('/', movie_controller_1.getmovieHandler);
router.get('/one', (0, validate_1.default)(movie_schema_1.onemovie_schema), (movie_controller_1.getOnemovieHandler));
router.post('/', (0, validate_1.default)(movie_schema_1.addmovie_schema), (movie_controller_1.addmovieHandler));
router.put('/:id', (0, validate_1.default)(movie_schema_1.updatemovie_schema), (movie_controller_1.updatemovieHandler));
router.delete('/:id', (0, validate_1.default)(movie_schema_1.deletemovie_schema), (movie_controller_1.deletemovieHandler));
exports.default = router;
