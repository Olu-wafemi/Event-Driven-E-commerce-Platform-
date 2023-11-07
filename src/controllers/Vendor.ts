import { Request, Response } from 'express';
import Vendor from '../models/Vendor';

import sequelize from '../../database/database'



export const VendorContoller = {
    async createVendor(req: Request, res:Response){

        try{
            const {name, description, email,phone} = req.body

            const newVendor = await Vendor.create({
                name, description,
                email,phone
            })

            res.status(201).json({status: "true", data: newVendor})

    }
    catch{
        res.status(500).json({error: "error creating vendor"})

    }
},
async getVendors(req: Request, res: Response){
    try{
        const vendors = await Vendor.findAll()
        res.status(201).json({status:"true", data:  vendors})


    }
    catch{
        res.status(500).json({error: 'Error fecthing vendors'})
    }
}


}