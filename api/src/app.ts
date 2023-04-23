import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { readdirSync } from 'fs';
import { connectDB } from './util/db'
import { join } from 'path';

dotenv.config();

const app = express();

//middleWare
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '20mb'})) //application/json
app.use(cors())

// Route with ReadDIR
const routesPath = join(__dirname, 'routes');
readdirSync(routesPath).forEach(async (file) => {
  const filePath = join(routesPath, file);
  const { default: route } = await import(filePath);
  app.use(`/api/${file.replace('.ts', '')}`, route);
});

// ConnectDB
connectDB()

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})