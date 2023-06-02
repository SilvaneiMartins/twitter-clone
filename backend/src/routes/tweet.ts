import express from 'express';

import { mdAuth } from '../middlewares';
import { TweetController } from '../controller';

const api = express.Router();

api.post('/tweet/create', [mdAuth.authenticateToken], TweetController.tweetCreate);
api.get('/tweet/getAll', [mdAuth.authenticateToken], TweetController.tweetGetAll);
api.get('/tweet/getById/:id', [mdAuth.authenticateToken], TweetController.getTweetById);
api.put('/tweet/update/:id', [mdAuth.authenticateToken], TweetController.updateTweet);
api.delete('/tweet/delete/:id', [mdAuth.authenticateToken], TweetController.deleteTweet);

export const tweetRoutes = api;
