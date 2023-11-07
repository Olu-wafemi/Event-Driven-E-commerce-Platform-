import request from 'supertest'


import app from '../index'


describe('Category Controller' ,()=>{

    it('should create a new category', async ()=>{
        const newCategory = {name: 'New ategory', description: "A lex category", categoryId: "865001a2-0e2a-4dd1-8c01-f8d0fd6e7296"}

        const response = await request(app)
            .post('/api/category')
            .send(newCategory)

        expect(response.status).toBe(201)
        expect(response.body)

    })
    it('should retrieve a liat of categories', async ()=>{

        const response = await request(app).get('/api/category')


        expect(response.status).toBe(200)
        expect(response.body)
    })


})