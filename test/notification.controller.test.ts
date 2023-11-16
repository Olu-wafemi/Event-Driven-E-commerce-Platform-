import request from 'supertest';
import app from '../index';


describe("Notification test", ()=>{

    it("should create a notification", async()=>{

        const body = {
            userId: "cd533804-22cd-4efb-a5c0-6a775c49ef71",
                type: "order_success",
                message:"Test notification"

        }

        const response = await request(app).post("/api/createNotification").send(body)

        expect(response.statusCode).toBe(201)

        expect(response.body).toContain("type")
    })

    it("Should retrieve a list of notifications", async()=>{

        const
    })
})

