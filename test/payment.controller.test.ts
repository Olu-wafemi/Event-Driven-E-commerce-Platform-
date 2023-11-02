import { as } from "pg-promise"
import request from "supertest"
import app from "../index"


describe('Payment Controller',()=>{
    it("should create a new payment", async ()=>{
        const paymentData = {
            orderId:"1",paymentMethod:"Card",
                amount:"2000"
        }
        const response = await request(app)
        .post('/api/createpayment').
        send(paymentData)

        expect(response.status).toBe(201)
    })

    it('should retrive list of payment', async ()=>{

        const response = await request(app).get("/api/getOrderpayents")

        expect(response.status).toBe(201)
        expect(response.body).toBe(Object)

    })

})