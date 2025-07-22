# Cafe POS Backend

Backend API cho hệ thống POS (Point of Sale) quản lý quán cafe.

---

## 📑 Mục lục
- [Tính năng](#tính-năng)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Cấu trúc các Route Backend](#cấu-trúc-các-route-backend)
- [Kế hoạch phát triển](#kế-hoạch-phát-triển)

---

## 🚀 Tính năng
- **Authentication**: Đăng ký, đăng nhập với JWT
- **User Management**: Quản lý người dùng với roles (admin, manager, employee)
- **Employee Management**: Quản lý nhân viên và thông tin cá nhân
- **Shift Management**: Quản lý ca làm việc (bắt đầu, kết thúc, lịch sử, chi tiết ca)
- **Menu Management**: Quản lý menu, sản phẩm, upload ảnh món qua Cloudinary
- **Order Management**: Tạo, quản lý, thanh toán, hủy đơn hàng
- **Reporting**: Báo cáo doanh thu, kiểm tra dữ liệu
- **Salary Management**: Tính lương, quản lý lương, cập nhật, đánh dấu đã thanh toán

---

## 🛠️ Công nghệ sử dụng
- **Node.js** & **Express.js**
- **TypeScript**
- **MongoDB** & **Mongoose**
- **JWT** Authentication
- **bcryptjs** Password hashing
- **express-validator** Input validation
- **Cloudinary** (upload ảnh)

---

## 📚 Cấu trúc các Route Backend

### 1. **Authentication** (`authRoutes.ts`)
- `POST /register` — Đăng ký
- `POST /login` — Đăng nhập

### 2. **Menu** (`menuRoutes.ts`)
- `GET /` — Lấy danh sách menu (mọi vai trò)
- `POST /` — Thêm món (admin)
- `PUT /:id` — Sửa món (admin)
- `DELETE /:id` — Xóa món (admin)
- *Tích hợp upload ảnh món qua Cloudinary*

### 3. **Employee** (`employeeRoutes.ts` — chỉ cho admin)
- `GET /` — Lấy danh sách nhân viên
- `POST /` — Thêm nhân viên
- `PUT /:id` — Sửa nhân viên
- `DELETE /:id` — Xóa nhân viên

### 4. **Shift** (`shiftRoutes.ts`)
- `POST /start` — Bắt đầu ca làm
- `POST /close` — Kết thúc ca
- `GET /history` — Lịch sử ca
- `GET /active` — Ca hiện tại
- `GET /detail/:shiftId` — Chi tiết ca

### 5. **Order** (`orderRoutes.ts`)
- `POST /` — Tạo đơn hàng
- `GET /` — Lấy danh sách đơn
- `POST /:id/pay` — Thanh toán đơn
- `POST /:id/cancel` — Hủy đơn

### 6. **Report** (`reportRoutes.ts` — yêu cầu đăng nhập)
- `GET /` — Lấy báo cáo doanh thu
- `GET /check` — Kiểm tra dữ liệu

### 7. **Salary** (`salaryRoutes.ts`)
- `POST /calculate` — Tính lương (admin)
- `GET /` — Lấy danh sách lương (admin xem tất cả, employee xem của mình)
- `GET /:id` — Chi tiết lương
- `PUT /:id` — Sửa lương (admin)
- `DELETE /:id` — Xóa lương (admin)
- `POST /:id/pay` — Đánh dấu đã thanh toán lương (admin)
- `PUT /employee/:id` — Cập nhật lương nhân viên (admin)
- `GET /employees/without-salary` — Nhân viên chưa có lương (admin)

---

## 🎯 Kế hoạch phát triển

### Ngày 1 ✅
- [x] Setup project structure
- [x] User authentication system
- [x] Employee & Shift models
- [x] Basic API endpoints

### Ngày 2
- [ ] Menu management
- [ ] Product categories
- [ ] CRUD operations

### Ngày 3
- [ ] Order management
- [ ] Order calculation
- [ ] Order status tracking

### Ngày 4
- [ ] Shift completion
- [ ] Daily reports
- [ ] Sales analytics

### Ngày 5-7
- [ ] Frontend development
- [ ] Testing & bug fixes
- [ ] Documentation

---

> **Mô tả tổng quan:**
>
> Đây là hệ thống backend cho phần mềm quản lý quán cafe, cung cấp đầy đủ API cho các nghiệp vụ: quản lý người dùng, nhân viên, ca làm, menu, đơn hàng, báo cáo, lương. Hệ thống sử dụng Node.js, Express, MongoDB, JWT, Cloudinary và các công nghệ hiện đại, dễ mở rộng và bảo trì.