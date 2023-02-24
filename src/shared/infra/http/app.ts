import express from 'express';

import 'reflect-metadata';
import '@shared/Container/index';
import createConnection from '@shared/infra/typeorm';

import { router } from './routes';

const app = express();

createConnection();

app.use(express.json());
app.use(router);

export { app };
