import express from 'express';

import 'reflect-metadata';
import '@shared/Container';
import { router } from './routes';
import '@shared/infra/typeorm';

const app = express();

app.use(express.json());
app.use(router);

export { app };
