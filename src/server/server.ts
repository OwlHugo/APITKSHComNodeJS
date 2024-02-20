import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes);

export const server = app;
