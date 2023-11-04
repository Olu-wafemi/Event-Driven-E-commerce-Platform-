import request from "supertest"
import app from "../index"
import Cart from '../src/models/Cart';

describe("cart controller", ()=>{
    it("Should create a new cart", async()=>{

        const cartdata = {

            userId: 1,
            products:[
                {
                    productId: 1, quantity: 2
                },
                {
                    productId: 2, quantity: 1
                }
            ]


        };


        const response = await request(app)
        .post('/api/carts')
        .send(cartdata)


        expect(response.status).toBe(201)
        expect(response.body).toContain("id")
        expect(response.body).toContain("products")
    })

    it("Shold retrieve user's cart", async()=>{

        const createdCart = await Cart.create({
            userId: 1,
            products: [
                {
                    productId: 1, quantity: 2
                },
                {
                    productId: 2, quantity: 30
                }
            ]

        })

        const response = await request(app).get(`/api/carts/${createdCart.id}`)

        expect(response.status).toBe(200)
    })
})