import  express from "express"
import { UserController } from '../controllers/User';
const Router = express.Router()



Router.post("/register",  UserController.register)

export default Router