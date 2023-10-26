import { Response, Request } from 'express';
import ShippingMethod from '../models/Shipping';
export const ShippingController = {
    async createShippingMethod(req: Request, res: Response){

        try{
            const {name, description, price, estimatedDelivery} = req.body

            const newShippingMethod = await ShippingMethod.create({
                name,
                description,
                price,
                estimatedDelivery
            })

            res.status(201).json({status: true, data:newShippingMethod})
        }
        catch{
            return res.status(500).json({error: "error creating shipping method"});

            }
        },
        async getShippingMethods(req: Request, res: Response){

            try{
                const shippingMethods = await ShippingMethod.findAll();
                res.status(201).json({message: "true", data: shippingMethods})
            }
            catch{
                return res.status(500).json({error: "error fetching shipping methods"})
            }
        }
    
}