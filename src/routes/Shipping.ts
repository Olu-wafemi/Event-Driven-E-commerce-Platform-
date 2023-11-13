import express from 'express';
import { ShippingController } from '../controllers/Shipping';


const Router = express.Router()

Router.post("/createShipping", ShippingController.createShippingMethod)
Router.get("/getShipping", ShippingController.getShippingMethods)

export default Router