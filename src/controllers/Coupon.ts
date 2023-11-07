import { Request, Response } from 'express';
import Coupon from '../models/Coupon';
import sequelize from '../../database/database'

//sequelize.addModels([Coupon])

export const CouponController = {
    async createCoupon(req: Request, res: Response){

        try{
            const {code, discountPercentage, validUntil} = req.body;

            const newCoupon = await Coupon.create({
                code, discountPercentage,
                validUntil
            })

            res.status(201).json(newCoupon)
        }
        catch(error){


        }
        res.status(500).json({error : "error creating coupon"})

},

 async getCoupons(req:Request, res: Response){

    try{
        const coupons =await Coupon.findAll()
        res.status(201).json({status: true, data:coupons})
    }
    catch{
        res.status(500).json({error: 'Error fecthing coupons'})

        
    }
 }
}