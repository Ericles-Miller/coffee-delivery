import express from 'express';

import 'reflect-metadata';
import '@shared/Container';
import { router } from './routes';

import createConnection from '@shared/infra/typeorm';

const app = express();

createConnection();

app.use(express.json());
app.use(router);

export { app };
