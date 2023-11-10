import express from 'express';
import { Sequelize } from 'sequelize-typescript';

 // Import your Sequelize instance here
//import { createTables } from './models'; // Import a function to create database tables
import index from './src/routes/index'
import databseConfig from './config/config.json'
import sequelize from './database/database';
import Address from './src/models/Address';
import Cart from './src/models/Cart';
import CartItem from './src/models/CartItem';
import Category from './src/models/Category';
import Coupon from './src/models/Coupon';
import Invoice from './src/models/Invoice';
import Notification from './src/models/Notification';
import Order from './src/models/Order';
import Payment from './src/models/Payment';
import Product from './src/models/Product';
import Review from './src/models/Review';
import ShippingMethod from './src/models/Shipping';
import Subscription from './src/models/Subscription';
import Transaction from './src/models/Transaction';
import User from './src/models/User';
import Vendor from './src/models/Vendor';





process.env.NODE_ENV = 'test'



const app = express();

app.use(express.json());


sequelize
  .sync({ force: false}) // force: true to drop and recreate tables (in development only)
  .then(() => {
   // console.log('Database and tables are synchronized.');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

index(app)

sequelize.options.logging = false
//sequelize.addModels([Address,  Cart,CartItem,Category,Coupon,Invoice, Notification, Order,Payment,Product,Review,ShippingMethod,Subscription,Transaction,User,Vendor])




const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data in requests



//app.use('/api', routes); // You can define routes in your routes module

// Initialize Sequelize and create database tables


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default app