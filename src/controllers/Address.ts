import { Request, Response } from 'express';
import Address from '../models/Address';


export const AddressController = {
    async createAdress(req: Request, res: Response){
        try{
            const {userId, street, city, state, postalCode,country}  = req.body

            const newAddress= await Address.create({
                userId, street,
                city,
                state,
                postalCode,
                country

            })

            res.status(201).json(newAddress);

        }
        catch(error){
            res.status(500).json({error: 'Error creating address'})
        }
    },

    async getUserAddresses(req: Request, res: Response){
        try{
            const {userId} = req.params;

            const addresses =await Address.findAll({
                where:{userId},
                
            })

            res.json(addresses)
        }catch(error){
            res.status(500).json({error: 'Error feching addresses'})
        }
    },

    async updateAddress(req: Request,res: Response){
        try{
            const {addressid} = req.params;
            const {street, city, state, postalCode, country} = req.body;

            const address = await  Address.findByPk(addressid)
            if(!address){
                return res.status(404).json({error: 'Address not found'})
        }

        address.street= street;

        address.city = city
        address.state = state
        address.postalCode= postalCode
        address.country = country

        await address.save()
        res.status(201).json({status: true, message: 'Updare succcesful', data: address})

            
    }
    catch(error){
        res.status(500).json({error: 'Error updating addess'})
    }
},

    async deleteAddress(req: Request, res:Response){

        try{
            const {addressId}= req.params;
            const deletedAddress = await Address.destroy({where: {id: addressId}})

            if(!deletedAddress){
                return res.status(404).json({error:"address not found"})
            }

            res.status(201).json({status: "true", message: "deleted successfully"})


        }
        catch(error){
            res.status(500).json({error: 'Error deleting address'})
        }

    }
 }