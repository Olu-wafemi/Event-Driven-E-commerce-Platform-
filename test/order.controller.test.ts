// order.controller.test.ts
import request from 'supertest';
import app from '../index'; // Import your Express app

describe('Order Controller', () => {
  it('should create a new order', async () => {
    const newOrder = { 

      "userId": "c1922258-958b-4094-8dce-0743c274a275",
      "productId": "c8fe3414-a1b9-46c6-8f9c-b818a7e058bd",
      "quantity": 2900


      }
    const response = await request(app)
      .post('/api/orders')
      .send(newOrder);

    expect(response.status).toBe(201);
    expect(response.body);
  });
  /*
  it('should retrieve a list of orders', async () => {
    const response = await request(app).get('/api/orders');

    expect(response.status).toBe(200);
    expect(response.body);
    
  })
  */;
  

  //
});
