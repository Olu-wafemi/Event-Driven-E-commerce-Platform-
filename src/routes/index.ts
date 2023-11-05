import Router from "./user";
import {productRouter} from "./products";
import { Request } from 'express';
import paymentRouter from "./payment"
import cartRouter from "./cart"

import addressRouter from "./Address"

const index = (app: any) => {
    app.use('/api/users', Router);
    app.use('/api', paymentRouter)
    app.use('/api', cartRouter)
    app.use('/api', addressRouter)
   
    //app.use('/api',huntRouter)
  };

export default index