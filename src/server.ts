import express from 'express';
import { userRoutes } from './routes/user.routes';
import { videosRoutes } from './routes/videos.routes';
import { config } from 'dotenv';

config();
const app = express();

// middleware

app.use(express.json());
app.use('/user', userRoutes);
app.use('/videos', videosRoutes);

const PORT_DATABASE = process.env.PORT_DATABASE || 1337;

//criar o servidor
app.listen(PORT_DATABASE, function(){
    console.log("listen on localhost:" 
    + PORT_DATABASE +
    "ctrl+c quit to quit...")
});