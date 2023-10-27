import request from 'supertest'

import app from '../index'
import sequelize from '../database/database';



beforeAll(async()=>{
  await sequelize.sync({force: true})
})

describe('User Controller', ()=>{

  describe('User Registration',()=>{
    it('should create a new user', async ()=>{
      const response = await request(app)
      .post('/api/users/register')
      .send({

        username: 'testuser',
        email: 'test@example.com',
        password: 'testpassword',


      })
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id')
    })

    it('should handle duplicate mail', async()=>{
      const response = await request (app)
      .proppatch('/api/users/register')
      .send({
        username: 'duplicateuser',
        email: 'test@example.com',
        password: 'testpassword',
      })
    expect(response.status).toBe(400)

    })
  })
})


