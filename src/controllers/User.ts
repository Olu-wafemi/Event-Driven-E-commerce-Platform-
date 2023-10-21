import { Request, Response } from 'express'
import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator  from 'validator'
import { validateLoginData, validateRegistrationData} from '../validations/user-validation'
import User from '../models/User';
import  dotenv from 'dotenv'
//import  from '../models/User';
export const UserController = {
    async register(req: Request, res: Response){
        try{
            const {username, email, password} = req.body

            const registrationError = validateRegistrationData(username, email, password)
            if(registrationError){
                return res.status(400).json({error: registrationError})

            }
            const hashedPassword = await bcrypt.hash(password, 10)

            const newUser = await User.create({
                username,
                email,
                password

            })


            res.status(201).json(newUser)
        }catch(error){
            console.error("Error registering user:", error)
            res.status(500).json({error: 'Error registering user'})

        }   

    },

    async login(req: Request, res: Response){
        try{
            const {username, password} = req.body

            const loginError = validateLoginData(username, password)
            if (loginError){
                return res.status(401).json({error: loginError})
            }

            const user = await User.findOne({
                where: {username}
            })

            const passwordMatch = await bcrypt.compare(password,user.password)

            if(!passwordMatch){
                return res.status(401).json({error: 'Incorrect password'})

            }
            var Secret = process.env.SECRET

            const token = jsonwebtoken.sign({
                username,
                password
                
            }, Secret)
            res.json({message: "Login Successful", })
        

        }catch(error){
            res.status(500).json({error: "Error Logging in"})
        }
    }

}