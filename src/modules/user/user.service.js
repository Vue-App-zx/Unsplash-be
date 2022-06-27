import { PrismaClient } from '@prisma/client'
import bcrypt from "../../helpers/bcrypt.js";
import jwt from "../../helpers/jwt.js";

const prisma = new PrismaClient()

export const getAllUser = async (req, res, next) => {
    try{
        let users = await prisma.User.findMany()
        res.json(users);
    }catch(error){
        next(error)
    }
}

export const getAllImage = async (req, res, next) => {
    try{
        let Image = await prisma.Image.findMany()
        res.json(Image);
    }catch(error){
        next(error)
    }
}

export const deleteAllImage = async (req, res, next) => {
    try{
        let Image = await prisma.Image.deleteMany({})
        res.json(Image);
    }catch(error){
        next(error)
    }
}

export const register = async(req, res, next) => {
    try {
        let {
            username,
            password,
        } = req.body;
    

        //hash password
        password = bcrypt.hashPassword(password)

        let user = await prisma.User.create({
            data: {
                username: username,
                password: password,
            },
        })
        if(user){
            res.status(201).json({
                status: "success",
                message: "User berhasil register",
            })
        }else{
            res.status(500).json({
                status: "error",
                message: "User gagal register",
            })
        }
    } catch (error) {
        next(error)
    }
}

export const login = async(req, res, next) => {
    try{
        console.log("Login!!!!!!!")

        let {
            username,
            password,
        } = req.body

        // find login acc
        let user = await prisma.User.findUnique({
            where: {
                username: username
            }
        })
        if(!user){
            next({
                statusCode: 404,
                message: "User tidak ditemukan", 
            })
        }else{
            let isValid = bcrypt.comparePassword(password, user.password);
            if(!isValid){
                next({
                    statusCode: 401,    
                    message: "Password salah",
                })
            }else{
                res.status(200).json({
                    status: "success",
                    message: "User berhasil login",
                    data: {
                        id: user.id,
                        token: jwt.tokenGenerate({
                            id: user.id
                        }),
                    }
                })
            }
        }
    
    }catch(error) {
        next(error)
    }
}
export const userImg = async(req, res, next) => {
    try{
        let imgUser = await prisma.Image.findMany({
            where: {
                userId: req.user.id
            }
        })
        res.json(imgUser);
    }catch(error){
        next(error)
    }
}

export const postImage = async(req, res, next) => {
    try{
        console.log("upload!!!!!!!")
        let {
            imgUrl,
            category
        } = req.body
        let img = await prisma.Image.create({
            data: {
                userId : req.user.id,
                imgUrl : imgUrl,
                category: category,
                posted : new Date()
            }
        })
        if(img){
            res.status(201).json({
                status: "success",
                message: "foto berhasil di upload",
            })
        }else{
            res.status(500).json({
                status: "error",
                message: "foto gagal di upload",
            })
        }

    }catch(error) {
        next(error)
    }
}

export const deleteImage = async(req, res, next) => {
    try{
        console.log("Delete image !!!!!")
        //verify token
        let {
            imgId
        } = req.body
        
        const deleteImage = await prisma.Image.delete({
            where: {
                id: imgId,
            }
        })
        if(deleteImage){
            res.status(201).json({
                status: "success",
                    message: "foto berhasil di hapus",
                })
            }else{
                res.status(500).json({
                    status: "error",
                    message: "foto gagal di hapus",
                })
            }
    }catch(error) {
        next(error)
    }
}