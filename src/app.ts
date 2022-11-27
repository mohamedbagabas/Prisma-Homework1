import express from 'express';
import MovieRouter from './routes/movie_routes';
import bodyParser from "body-parser";
import { connectDB } from "./config/db";

import UserRouter from "./routes/user-routes";



const app = express();

app.use(express.json());

connectDB();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/movie", MovieRouter);
app.use("/users", MovieRouter);

const start = (): void => {
  try {
    app.listen(3333, () => {
      console.log("Server started on port 3333");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();