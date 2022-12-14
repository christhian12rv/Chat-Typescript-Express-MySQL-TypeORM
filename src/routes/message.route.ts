import { Router } from 'express';
import messageController from '../controllers/message.controller';
import authMiddleware from '../middlewares/auth.middleware';

const messageRoute = Router();

messageRoute.post('/:id', authMiddleware.authorizeUserByParams, authMiddleware.authorizeUserByToken, messageController.send);

messageRoute.get('/:id', authMiddleware.authorizeUserByParams, authMiddleware.authorizeUserByToken, messageController.list);

export default messageRoute;