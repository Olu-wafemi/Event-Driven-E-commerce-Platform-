import { interfaces } from "mocha"
import app from '../index';
import request from 'supertest';

describe("Subscription Router", ()=>{

    it("should create a Subscription", async()=>{

        const body = {
            userId: "c1922258-958b-4094-8dce-0743c274a275" ,
                planId: "f2fdcdb1-3007-470a-b1f8-13dc5e1aaf7d",
                startDate:"20-11-2023",
                endDate:"30-11-2024" 
            }

            const response = await request(app).post("/api/createSubscription").send(body)

            expect(response.statusCode).toBe(201)





        })

        it("should retrieve lists of subscriptions", async()=>{

            const userId = "c1922258-958b-4094-8dce-0743c274a275"

            const response =  await request(app).get(`/api/getSubscription:${userId}`)

            expect(response.statusCode).toBe(201)
        
        })

        

    


    

    })
