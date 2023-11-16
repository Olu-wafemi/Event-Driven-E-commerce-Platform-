import express from 'express';
import { NotificationController } from '../controllers/Notification';

const Router = express.Router()


Router.post("/createNotification", NotificationController.createNotification)
Router.get("/getNotfifcation/:userId", NotificationController.getUserNotifications)

export default Router