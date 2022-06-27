import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const authorization = async (req, res, next) => {
    try{
        console.log("author")
        let user = await prisma.User.findUnique({
            where:{
                id: req.user.id
            }
        })
        if (user){
            if(user.id === id){
                next()
            } else {
                next({
                    status: 401,
                    messages: 'you are not authorized'
                })
            }
        } else {
            next({
                status: 404,
                messages: 'gambar tidak ada'
            })
        }
    } catch(error) {
        next(error)
    }
}
