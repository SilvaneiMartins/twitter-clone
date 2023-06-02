import express from 'express';

import { AuthController } from '../controller';

const api = express.Router();

api.post('/auth/login', AuthController.login);
api.post('/auth/authenticate', AuthController.authenticate);

export const authRoutes = api;
