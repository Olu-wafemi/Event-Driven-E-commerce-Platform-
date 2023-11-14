import express from 'express';
import { SubscriptionController } from '../controllers/Subscription';


const Router = express.Router()

Router.post('/createSubscription', SubscriptionController.createSubscription)
Router.get('/getSubscription', SubscriptionController.getUserSubscriptiond)

export default Router