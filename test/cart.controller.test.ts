import request from "supertest"
import app from "../index"
import Cart from '../src/models/Cart';

describe("cart controller", ()=>{
    it("Should create a new cart", async()=>{

        const cartdata = {

            userId: "4f0a81cc-90cf-4983-80e0-95b5a3f824fe",
            productId: "1e501f49-1502-49f5-bd90-ef30a187bb1c",
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
            userId: "4f0a81cc-90cf-4983-80e0-95b5a3f824fe",
            productId: "1e501f49-1502-49f5-bd90-ef30a187bb1c",
            quantity: 2900
            
             

        })

        const response = await request(app).get(`/api/carts/${createdCart.userId}`)

        expect(response.status).toBe(200)
    })
})