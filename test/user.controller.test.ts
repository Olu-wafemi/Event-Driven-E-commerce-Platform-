import request from 'supertest'

import app from '../index'
//import sequelize from '../database/database';


import databseConfig from '../config/config.json'
import { Sequelize } from 'sequelize-typescript';


const sequelize = new Sequelize ({
    "dialect": "postgres", // Replace with your database dialect (e.g., 'mysql', 'sqlite', 'mariadb', etc.)
    "host": databseConfig.test.host,   // Replace with your database host
    "username": databseConfig.test.username, // Replace with your database username
    "password": databseConfig.test.password, // Replace with your database password
    "database": databseConfig.test.database, // Replace with your database name
   
})

import  User from '../src/models/User'







beforeAll(async()=>{
 await sequelize.sync({force: true})


})


describe('User Controller', ()=>{

  describe('User Registration',()=>{
    it('should create a new user', async ()=>{
      const response = await request(app)
      .post('/api/users/register')
      .send({
        username: 'testusers455',
        email: 'test32@example.com',
        password: 'Whataway@2023',
        role: "user"
      })
    expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id')
    })

    it('should handle duplicate mail', async()=>{
      const response = await request (app)
      .post('/api/users/register')
      .send({
        username: 'duplicateuser',
        email: 'test32@example.com',
        password: 'Whataway@2023',
      })
    expect(response.status).toBe(500)

    })
  })
})


