//import { User } from '../models/User';
import {Request, Response} from 'express'
import Product from '../models/Product';
import Order from '../models/Order';
import User from '../models/User';

import sequelize from '../../database/database'

//sequelize.addModels([Order])
export const OrderController = {
    async createOrder(req: Request, res: Response){
        try{
            const { userId, productId, quantity } = req.body;

            const user = await User.findByPk(userId)
            const product = await Product.findByPk(productId)

            if(!user || !product){
                return res.status(400).json({ status: false, error: 'Invalid user or product'})

            }

                const totalAmount = product!.price  * quantity

                const newOrder = await Order.create({
                    userId,
                    productId,
                    quantity,
                    totalAmount

                })

                return res.status(201).json({status: true, message: "succesful"})

            }


            
        
        catch(error){
            console.log(error)
            res.status(500).json({error: 'Error creating order'})

        }
    }
}