import express from 'express';

const Router = express.Router()


import {CartController} from "../controllers/Cart"


Router.post("/carts", CartController.addToCart)

export default Router