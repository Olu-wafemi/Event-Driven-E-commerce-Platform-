import Router from "./user";
import prouctrouter from "./products";
import { Request } from 'express';
import paymentRouter from "./payment"
import cartRouter from "./cart"
import categoryRouter from "./category"
import orderRouter from "./order"
import addressRouter from "./Address"

const index = (app: any) => {
    app.use('/api/users', Router);
    app.use('/api', paymentRouter)
    app.use('/api', cartRouter)
    app.use('/api', addressRouter)
    app.use('/api', prouctrouter )
    app.use('/api' , categoryRouter)
    app.use('/api', orderRouter)
   
    //app.use('/api',huntRouter)
  };

export default index