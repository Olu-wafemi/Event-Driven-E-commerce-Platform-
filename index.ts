import express from 'express';
import { Sequelize } from 'sequelize-typescript';
 // Import your Sequelize instance here
//import { createTables } from './models'; // Import a function to create database tables
import index from './src/routes/index'
import databseConfig from './config/config.json'
import sequelize from './database/database';





process.env.NODE_ENV = 'test'



const app = express();

index(app)

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data in requests
app.use(express.json());

// Set up your application routes
//app.use('/api', routes); // You can define routes in your routes module

// Initialize Sequelize and create database tables
sequelize
  .sync({ force: false }) // Use force: true to drop and recreate tables (in development only)
  .then(() => {
    console.log('Database and tables are synchronized.');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default app