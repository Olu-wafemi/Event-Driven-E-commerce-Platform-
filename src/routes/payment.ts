import  express from "express"
import {PaymentController} from "../controllers/Payment"

const Router = express.Router()


Router.post("/createpayment", PaymentController.processPayment)

Router.get("/getOrderpayents/:orderId",PaymentController.getOrderPayments)



export default Router 

