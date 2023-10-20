import { Request, Response } from "express";
import Notification from '../models/Notification';
import { User } from "../models/User";

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
    }

}