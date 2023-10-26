import { Request, Response } from 'express';
import Review from '../models/Review';
export const ReviewController = {
    async createReview(req: Request, res: Response){

        try{
            const {productId, userId, rating, comment} = req.body
            const newReview = await Review.create({
                productId, userId,rating, comment
            }) 

            res.status(201).json(newReview);

        }
        catch{
            res.status(500).json({error: 'Error creating reviews'})
        }
    },

    async getproductReviews(req: Request, res: Response){
        try{
            const {productId} = req.params

            const reviews= await Review.findAll({
                where:{productId}
            })

            return res.status(201).json({status:'true', data: reviews})

        }
        catch{

            res.status(500).json({error: 'Error fetching products'})
        }
    },

    async getUserReviews(req: Request, res: Response){
        try{
            const {userId} = req.params

            const reviews = await Review.findAll({
                where:{userId},

            })

            res.json(reviews)
        }
        catch{
            res.status(500).json({error: 'error fecthing user reviews'})
        }
    }
}