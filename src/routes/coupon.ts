import express from 'express';
import { CouponController } from '../controllers/Coupon';

const Router = express.Router()

Router.post("/createRouter", CouponController.createCoupon)
Router.get("/getRouter", CouponController.getCoupons)

export default Router