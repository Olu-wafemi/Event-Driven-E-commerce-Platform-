
import express from 'express';
import {ProductController} from "../controllers/Product"
const Router = express.Router()
Router.get("/products", ProductController.getProducts)
Router.post("/products", ProductController.createProduct)

export default Router