import express from 'express';

import { mdAuth } from '../middlewares';
import { UserController } from '../controller/user';

const api = express.Router();

api.post('/user/create', [mdAuth.authenticateToken], UserController.userCreate);
api.get('/user/getAll', [mdAuth.authenticateToken], UserController.userGetAll);
api.get('/user/getById/:id', [mdAuth.authenticateToken], UserController.getUserById);
api.put('/user/update/:id', [mdAuth.authenticateToken], UserController.updateUser);
api.delete('/user/delete/:id', [mdAuth.authenticateToken], UserController.deleteUser);

export const userRoutes = api;
