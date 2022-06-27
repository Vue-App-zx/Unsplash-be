import express from 'express';
import { getAllUser, register, login, postImage, getAllImage, deleteAllImage, deleteImage, userImg } from './user.service.js';
import {authenticate} from '../../middlewares/authenticate.js'
import {authorization} from '../../middlewares/authorization.js'

const userRouter = express.Router();
userRouter.delete('/dlt-all-img', deleteAllImage);
userRouter.get('/all-user', getAllUser);
userRouter.get('/all-img', getAllImage);
userRouter.post('/register', register);
userRouter.post('/login', login);

userRouter.use(authenticate)
userRouter.post('/post-img', postImage);
userRouter.get('/user-img', userImg);

userRouter.use(authorization)
userRouter.delete('/dlt-img', deleteImage);

export default userRouter;