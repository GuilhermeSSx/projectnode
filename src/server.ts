import express from 'express';
import { userRoutes } from './routes/user.routes';
import { videosRoutes } from './routes/videos.routes';
import { config } from 'dotenv';

config();
const app = express();

console.log(process.env.SECRET);

// middleware

app.use(express.json());
app.use('/user', userRoutes);
app.use('/videos', videosRoutes);

//criar o servidor
app.listen(process.env.PORT_DATABASE);