import express from 'express';
import userRouter from './modules/user/user.route.js';

const routes = express.Router();


routes.use("/user", userRouter);


export default routes;