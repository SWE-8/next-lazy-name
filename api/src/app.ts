import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
require('dotenv').config();
import { readdirSync } from 'fs';
import { connectDB } from './util/db'

const app = express();

//middleWare
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '20mb'})) //application/json
app.use(cors())

// Route with ReadDIsR
readdirSync('./route').map((read) => app.use('/api', require('./routes/' + read)))

// ConnectDB
connectDB()

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})