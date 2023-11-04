import { Request, Response } from 'express';
import Subscription from '../models/Subscription';


import sequelize from '../../database/database'

sequelize.addModels([Subscription])
export const SubscriptionController ={

    async createSubscription(req: Request, res: Response){

        try{
            const { userId, planId, startDate, endDate} = req.body

            const newSubscription = await Subscription.create({
                userId,
                planId,
                startDate,
                endDate
            })

            res.status(201).json(newSubscription)

        }
        catch{

            res.status(500).json({error: "Error creating Subscription"})

        }
      

    },
    async getUserSubscriptiond(req: Request, res: Response){

        try{
            const {userId} = req.params;

            const subscriptions = await Subscription.findAll({
                where:{userId}
            })

            res.status(201).json({status:"true", data: subscriptions})
        }
        catch{
            res.status(500).json({error: "Error fectching subscriptions"})
        }
    }
}