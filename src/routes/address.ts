import express from "express"

const Router = express.Router()

import {AddressController} from "../controllers/Address"

Router.post('/addresses', AddressController.createAdress)

Router.get('/addresses/:id', AddressController.getUserAddresses)

export default Router
