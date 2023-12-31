import request from 'supertest'

import app from "../index"

describe("Review Controller", ()=>{

    it("Should create a review", async()=>{

        const body = {
            productId: "c8fe3414-a1b9-46c6-8f9c-b818a7e058bd", 
            userId: "cd533804-22cd-4efb-a5c0-6a775c49ef71",
            rating:"3", 
            comment:"The Product is a nice product"
        }

        const response = await request(app).post('/api//createReview')

        expect(response.statusCode).toBe(201)


    })

    it("Should retrieve a list of Product reviews", async()=>{

        const productId = "c8fe3414-a1b9-46c6-8f9c-b818a7e058bd"

        const response = await request(app).get("/api/getProductReviews")

        expect(response.statusCode).toBe(201)



    })



})