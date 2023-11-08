import express from 'express';
import { OrderController } from '../controllers/Order';


const Router = express.Router()


Router.post("/orders", OrderController.createOrder)

export default Router