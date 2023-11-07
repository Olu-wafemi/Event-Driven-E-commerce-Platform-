import request from "supertest"
import app from "../index"
import Cart from '../src/models/Cart';

describe("cart controller", ()=>{
    it("Should create a new cart", async()=>{

        const cartdata = {

            userId: "06602696-b534-4fd6-b8c8-bd8f04ad09ce",
            productId: "12750632-4d1f-42d4-b781-ba061153a033",
            quantity: 200


        };


        const response = await request(app)
        .post('/api/carts')
        .send(cartdata)


        expect(response.status).toBe(201)
        //expect(response.body).toContain("id")
        //expect(response.body).toContain("products")
    })

    it("Shold retrieve user's cart", async()=>{

        const createdCart = await Cart.create({
            userId: "06602696-b534-4fd6-b8c8-bd8f04ad09ce",
            productId: "333a6f04-ddcd-44ce-8adf-105bdee68ae6",
            quantity: 2900
            
             

        })

        const response = await request(app).get(`/api/carts/${createdCart.userId}`)

        expect(response.status).toBe(200)
    })
})