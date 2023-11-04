
import express from 'express';
import {ProductController} from "../controllers/Product"
const Router = express.Router()

export const productRouter = Router.get("/products", ProductController.getProducts)

export default productRouter