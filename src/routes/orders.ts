import { Router } from "express";
import errorHandler from "../error_handler";
import authMiddleware from "../middlewares/auth";
import { changeStatusOrders, createOrder, getOrderById, getOrders } from "../controllers/orders";
import adminMiddleware from "../middlewares/admin";

const ordersRoutes: Router = Router();

ordersRoutes.post("/", [authMiddleware], errorHandler(createOrder));
ordersRoutes.get("/", [authMiddleware], errorHandler(getOrders));
ordersRoutes.put("/:id/status", [authMiddleware, adminMiddleware], errorHandler(changeStatusOrders));
ordersRoutes.get("/:id", [authMiddleware], errorHandler(getOrderById));

export default ordersRoutes;
