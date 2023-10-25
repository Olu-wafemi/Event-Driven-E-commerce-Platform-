import { Request, Response } from 'express';
import Payment from '../models/Payment';

export const PaymentController = {
    async processPayment(req: Request, res: Response){
        try{
            const {orderId, paymentMethod, amount} = req.body

            const newPayment = await Payment.create({
                orderId,paymentMethod,
                amount
            })

            res.status(201).json(newPayment)

        }catch(error){
            return res.status(500).json({error: 'Error Processing payment'})

        }
       
        
    },
    async getOrderPayments(req: Request, res: Response){
        try{
            const {orderId} = req.params

            const payments = await Payment.findAll({
                where:{orderId},
            })

            return res.status(201).json({status: true, message:"Fecthed succesfully", data: payments})

        }
        catch(error){
            res.status(500).json({error:' Error feching orders'})
        }
    }
}