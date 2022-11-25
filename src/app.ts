import express from 'express';
import MovieRouter from './routes/movie_routes';

const app = express();

app.use(express.json());

app.use('/movie', MovieRouter);



app.listen(5000, () => {
  console.log('Server is running in port 5000');
});
