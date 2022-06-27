import { PrismaClient } from '@prisma/client'
import jwt from"../helpers/jwt.js";

const prisma = new PrismaClient()

export const authenticate = async (req, res, next) => {
    console.log('authen')
    try {
        let {
            token
        } = req.headers
        const decoded = jwt.tokenVerify(token);
        let user = await prisma.User.findUnique({
            where:{
                id: decoded.id
            }
        })

        if (!user){
            next({
                status: 404,
                messages: 'id not found'
            })
        } else {
            req.user = decoded
            next()
        }
    } catch (error) {
        next(error);
    }
}
