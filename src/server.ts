import express from 'express';
import { userRoutes } from './routes/user.routes';
import { videosRoutes } from './routes/videos.routes';
import { config } from 'dotenv';

config();
const app = express();

console.log(process.env.SECRET);


const cors = require('cors');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
});

app.use(cors());

// middleware

app.use(express.json());
app.use('/user', userRoutes);
app.use('/videos', videosRoutes);

//criar o servidor
app.listen(4000, function(){
    "[ server start : port 4000 ]" 
});