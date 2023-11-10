
import databseConfig from '../config/config.json'
import { Sequelize } from 'sequelize-typescript';
import path from 'path';


const sequelize = new Sequelize ({
    "dialect": "postgres", // Replace with your database dialect (e.g., 'mysql', 'sqlite', 'mariadb', etc.)
    "host": databseConfig.test.host,   // Replace with your database host
    "username": databseConfig.test.username, // Replace with your database username
    "password": databseConfig.test.password, // Replace with your database password
    "database": databseConfig.test.database,
    "models":   [path.resolve("/Users/effemm/ Event-Driven-E-commerce-Platform/src", "moddls")] ,
    logging: false // Replace with your database name
   
})


export default sequelize