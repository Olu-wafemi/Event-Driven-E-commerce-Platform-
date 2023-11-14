import request from 'supertest';
import app from '../index';


describe("coupon Router", ()=>{
    it("should create a coupon", async()=>{

        const body ={
            code :"#1234", discountPercentage:"10%",
                validUntil: "2203"
        }

        const response = await request(app).post("/createRouter")

        expect(response.statusCode).toBe(201)
    })

    it("should retrieve a list of coupons", async()=>{

        const response = await request(app).get("/getRouter")

        expect(response.statusCode).toBe(201)

    })
})