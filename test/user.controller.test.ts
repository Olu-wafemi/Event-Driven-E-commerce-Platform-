import request from 'supertest'

import app from '../index'
import sequelize from '../database/database';


import databseConfig from '../config/config.json'
import { Sequelize } from 'sequelize-typescript';

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
        username: 'testusers45225',
        email: 'test323@example.com',
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
        email: 'test323@example.com',
        password: 'Whataway@2023',
      })
    expect(response.status).toBe(500)

    })
  })
})


