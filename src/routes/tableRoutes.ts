import express from "express";
import { getTables, createReservation, getReservations, updateReservationStatus, addTable, deleteTable, updateTable, getMyReservations } from "../controllers/tableController";
import { authenticateJWT, authorizeRoles } from "../middleware/authMiddleware";
const router = express.Router();

// Lấy danh sách bàn
router.get("/", getTables);

// Thêm bàn
router.post("/", authenticateJWT, authorizeRoles('admin'), addTable);

// Đặt bàn
router.post("/reserve", authenticateJWT, createReservation);

// Lấy danh sách đơn đặt bàn
router.get("/reservations", getReservations);

// Lấy danh sách đơn đặt bàn của tôi
router.get("/my-reservations", authenticateJWT, getMyReservations);

// Cập nhật trạng thái đơn đặt bàn
router.patch("/reservations/:id", updateReservationStatus);

// Sửa bàn
router.put("/:id", authenticateJWT, authorizeRoles('admin'), updateTable);

// Xóa bàn
router.delete("/:id", authenticateJWT, authorizeRoles('admin'), deleteTable);

export default router; 