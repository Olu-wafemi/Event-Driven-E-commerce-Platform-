import request from "supertest"
import app from '../index';
import Address from '../src/models/Address';

describe("Address Controller", ()=>{

    it("should create a new address", async()=>{

        const AddressData = {

            userId: 1,
            street: "Test Street",
            city: "Test City",
            state: "Test State",
            postalCode: "123456789"
        }

        const response = await request(app).post('/api/address').send(AddressData)

        expect(response.status).toBe(201)
        expect(response.body).toContain("city")
    })


    it("should retrieve a list of adddresss", async()=>{


        const createdAddress = await Address.create({
            userid: 1,
            street: "124 Main street",
            city: "test city",
            state: "Test state",
            postalCode: "12345"
        })

        const response = await request(app).get(`/api/address/${createdAddress.id}`)

        expect(response.status).toBe(201)

        expect(response.status).toContain("street")
    })

    


})