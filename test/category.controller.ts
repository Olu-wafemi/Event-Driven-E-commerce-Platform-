import request from 'supertest'


import app from '../index'


describe('Category Controller' ,()=>{

    it('should create a new category', async ()=>{
        const newCategory = {name: 'New Category', description: "A flex category"}

        const response = await request(app)
            .post('api/categories')
            .send(newCategory)

        expect(response.status).toBe(201)
        expect(response.body)

    })
    it('should retrieve a liat of categories', async ()=>{

        const response = await request(app).get('/api/categories')


        expect(response.status).toBe(200)
        expect(response.body)
    })


})