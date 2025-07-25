import express from 'express';
import {getMenus, createMenu, updateMenu, deleteMenu, upload} from '../controllers/menuController';
import { authenticateJWT, authorizeRoles } from '../middleware/authMiddleware';

const router = express.Router();

// Lấy danh sách menu (employee, admin đều xem được)
router.get('/', authenticateJWT, authorizeRoles('admin', 'employee', 'customer'), getMenus);

// Thêm món mới (chỉ admin)
router.post('/', authenticateJWT, authorizeRoles('admin'), upload.single('image'), createMenu);

// Sửa món (chỉ admin)
router.put('/:id', authenticateJWT, authorizeRoles('admin'), upload.single('image'), updateMenu);

// Xóa món (chỉ admin)
router.delete('/:id', authenticateJWT, authorizeRoles('admin'), deleteMenu);

export default router; 