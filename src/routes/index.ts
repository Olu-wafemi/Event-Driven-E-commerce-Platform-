import Router from "./user";
import {productRouter} from "./products";
import { Request } from 'express';
import paymentRouter from "./payment"
import cartRouter from "./cart"

const index = (app: any) => {
    app.use('/api/users', Router);
    app.use('/api', paymentRouter)
    app.use('/api', cartRouter)
   
    //app.use('/api',huntRouter)
  };

export default index