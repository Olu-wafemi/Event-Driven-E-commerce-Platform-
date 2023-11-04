import { Request, Response } from 'express';
import Cart from '../models/Cart';
import CartItem from '../models/CartItem';
import sequelize from '../../database/database'

sequelize.addModels([Cart, CartItem])


export const CartController = {

    async addToCart(req: Request, res: Response){
        try{
            const {userId, productId, quantity} = req.body

            const userCart = await Cart.findOrCreate({where: {userId}})

            const [cartItem] = await CartItem.findOrCreate({
                where:{cartId: userCart[0].id, productId},
                defaults:{quantity},
            })

            if(!cartItem.isNewRecord){

                cartItem.quantity += quantity;
                await cartItem.save();
            }

            res.status(201).json(cartItem);
        }
        catch(error){
            res.status(500).json({erorr: "Error adding to cart"})
        }
    },

    async getUserCart(req: Request, res: Response){
        try{
            const {userId}= req.params;

            const userCart = await Cart.findOne({
                where: {userId},
                include: [CartItem]
            })

            res.json(userCart);
        }catch(error){
            res.status(500).json({error:' error fetching user cart'})
        }
    },

    async updateCartItemQuantity(req: Request, res: Response){
        try{
            const {cartItemId}= req.params;
            const {quantity}= req.body;

            const cartItem = await CartItem.findByPk(cartItemId)

            if(!cartItem){
                return res.status(404).json({error: 'Cart item not found' })
            }
            cartItem.quantity = quantity


            await cartItem.save()
            res.json({status: true, message: "Update Successful", data: cartItem})

        }
        catch(error){

            res.status(500).json({ error: 'Error updating cart item quantity'})
        }
    },
    async removeFeomCart(req: Request, res: Response){
        try{
            const {cartItemId} = req.params;

            const deletedCartItem = await CartItem.destroy({where:{id: cartItemId}})

            if(!deletedCartItem){
                return res.status(404).json({error: 'Cart item not Found'})
            }
        }
        catch(error){
            res.status(500).json({error: "error removing cart item"})

        }
    }


}