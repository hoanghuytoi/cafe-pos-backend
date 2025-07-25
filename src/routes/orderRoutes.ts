import express from "express";
import { createOrder, getOrders, payOrder, cancelOrder, createZalopayPayment } from "../controllers/orderController";
import { authenticateJWT, authorizeRoles } from "../middleware/authMiddleware";
import * as orderController from '../controllers/orderController';

const router = express.Router();

// Tạo đơn hàng
router.post("/", authenticateJWT, createOrder);

// Lấy danh sách đơn hàng
router.get("/", authenticateJWT, getOrders);

// Thanh toán đơn hàng
router.post("/:id/pay", authenticateJWT, payOrder);

// Hủy đơn hàng
router.post("/:id/cancel", authenticateJWT, cancelOrder);

// Lấy danh sách đơn hàng đang chờ thanh toán
router.get('/pending-by-customer', orderController.getPendingOrdersByCustomer);

// Thanh toán đa đơn hàng
router.post('/pay-multiple', orderController.payMultipleOrders);


export default router; 