import request from 'supertest'

import app from '../index'


describe('Product Controller', ()=>{
    

    it('should create a new product',  async() =>{
        const productData = {

            name: 'New Product',
            description: "Product used to cure infection",
            stock: 20,
            price: 19.99,
            categoryId: "04819814-82f6-4804-8f81-a34c768ff591"
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