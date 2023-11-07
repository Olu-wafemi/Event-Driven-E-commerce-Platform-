import express from "express"
import { CategoryController } from '../controllers/Category';
const Router = express.Router()

Router.post("/category", CategoryController.createCategory)
Router.get("/category", CategoryController.getCategories)

export default Router