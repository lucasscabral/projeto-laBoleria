import { Router } from "express";
import { createOrder } from "../controllers/ordersController.js";
import validateSchema from "../middlewares/validateSchema.js";
import { orderValidate } from "../schemas/schemas.js";

const ordersRouters = Router();

ordersRouters.post("/orders?", validateSchema(orderValidate), createOrder);
// ordersRouters.get("/orders");
// ordersRouters.get("/orders/:id");

export default ordersRouters;