import Router from "./user";


const index = (app: any) => {
    app.use('/api/users', Router);
   
    //app.use('/api',huntRouter)
  };

export default index