import express from "express"
import { ReviewController } from '../controllers/Review';
import Review from '../models/Review';

const Router = express.Router()

Router.post("/createReview", ReviewController.createReview)
Router.get("/getProductReviews", ReviewController.getproductReviews)


export default Router