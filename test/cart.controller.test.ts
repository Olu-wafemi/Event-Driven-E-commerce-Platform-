import request from "supertest"
import app from "../index"
import Cart from '../src/models/Cart';

describe("cart controller", ()=>{
    it("Should create a new cart", async()=>{

        const cartdata = {

            userId: "c1922258-958b-4094-8dce-0743c274a275",
            productId: "c8fe3414-a1b9-46c6-8f9c-b818a7e058bd",
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
            userId: "c1922258-958b-4094-8dce-0743c274a275",
            productId: "c8fe3414-a1b9-46c6-8f9c-b818a7e058bd",
            quantity: 2900
            
             

        })

        const response = await request(app).get(`/api/carts/${createdCart.userId}`)

        expect(response.status).toBe(200)
    })
})