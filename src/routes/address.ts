import express from "express"

const Router = express.Router()

import {AddressController} from "../controllers/Address"

Router.post('/address', AddressController.createAdress)

Router.get('/address/:id', AddressController.getUserAddresses)

export default Router
