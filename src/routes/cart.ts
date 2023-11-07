import express from 'express';

const Router = express.Router()


import {CartController} from "../controllers/Cart"


Router.post("/carts", CartController.addToCart)

Router.get("/carts/:userId", CartController.getUserCart)

export default Router