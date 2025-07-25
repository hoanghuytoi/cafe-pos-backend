import express from "express";
import {getEmployees, createEmployee, updateEmployee, deleteEmployee} from "../controllers/employeeController";
import { authenticateJWT, authorizeRoles } from "../middleware/authMiddleware";

const router = express.Router();

// Chỉ admin mới được thao tác

// Lấy danh sách nhân viên
router.get("/", authenticateJWT, authorizeRoles("admin"), getEmployees);

// Thêm nhân viên
router.post("/", authenticateJWT, authorizeRoles("admin"), createEmployee);

// Sửa nhân viên
router.put("/:id", authenticateJWT, authorizeRoles("admin"), updateEmployee);

// Xóa nhân viên
router.delete("/:id", authenticateJWT, authorizeRoles("admin"), deleteEmployee);

export default router; 