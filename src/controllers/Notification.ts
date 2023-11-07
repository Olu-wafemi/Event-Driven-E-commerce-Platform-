import { Request, Response } from "express";
import Notification from '../models/Notification';
//import { User } from "../models/User";


import sequelize from '../../database/database'

//sequelize.addModels([Notification])
export const NotificationController = {
    async createNotification(req: Request, res: Response){
        try{
            const { userId, type, message} = req.body

            const newNotifiaction = await Notification.create({
                userId,
                type,
                message
            })

            if(type === 'order_success'){

            }
            else if(type === 'order_update'){

            }
            else if(type === 'new_product'){

            }

            else if(type === 'marketing'){

            }

            res.status(201).json(newNotifiaction)



        }
        catch(error){
            res.status(500).json({error: "Error creating notificatiion"})

        }
    },
    async getUserNotifications(req:Request, res: Response){
        try{
            const{userId} = req.params

            const notifications = await Notification.findAll({
                where: {userId}
            })
            res.status(201).json({status:true, data: notifications})
        }
        catch{
            return res.status(500).json({status:false, message: "Error fetching user notification"})
        }
    }

}