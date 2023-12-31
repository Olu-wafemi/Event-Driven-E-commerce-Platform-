import request from 'supertest'

import app from '../index'


describe('Product Controller', ()=>{
    

    it('should create a new product',  async() =>{
        const productData = {

            name: 'New Product',
            description: "Product used to cure infection",
            stock: 20,
            price: 19.99,
            categoryId: "f2fdcdb1-3007-470a-b1f8-13dc5e1aaf7d"
        }

        const response = await request(app).post('/api/products')
        .send(productData)

        expect(response.status).toBe(201);
        //expect(response.body.name).toBe('New Product')

    })
    

    it('should retrieve a list of products', async()=>{

        const response = await request(app).get('/api/products')

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
        
    })

    



})