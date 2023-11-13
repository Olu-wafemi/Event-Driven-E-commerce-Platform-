import request from 'supertest';
import app from '../index';
describe("Shipping test", ()=>{

    it("should create shipping address in  database", async()=>{

        const body = {
            name: "John Doe",
            description: "Order from john doe",
            price: "5000",
            estimatedDelivery: "2nd of August 2025"
        }

        const response = await request(app).post("/api/createShipping").send(body)

        expect(response.statusCode).toBe(201)
    })

    it("should retrieve a list of shipping methods", async()=>{

        const response = await request(app).get("/api/getShipping")

        expect(response.statusCode).toBe(201)


    })
})