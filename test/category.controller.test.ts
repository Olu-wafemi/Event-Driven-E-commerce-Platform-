import request from 'supertest'


import app from '../index'


describe('Category Controller' ,()=>{

    it('should create a new category', async ()=>{
        const newCategory = {name: 'New ategory', description: "A lex category"}

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