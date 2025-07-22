import mongoose from "mongoose";

const salarySchema = new mongoose.Schema({
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  month: { type: Number, required: true }, // Tháng (1-12)
  year: { type: Number, required: true }, // Năm
  baseSalary: { type: Number, required: true }, // Lương cơ bản
  hourlyRate: { type: Number, required: true }, // Lương theo giờ
  totalHours: { type: Number, default: 0 }, // Tổng số giờ làm việc
  totalShifts: { type: Number, default: 0 }, // Tổng số ca làm việc
  totalOrders: { type: Number, default: 0 }, // Tổng số đơn hàng
  totalRevenue: { type: Number, default: 0 }, // Tổng doanh thu tạo ra
  commission: { type: Number, default: 0 }, // Hoa hồng (theo % doanh thu)
  bonus: { type: Number, default: 0 }, // Thưởng
  deductions: { type: Number, default: 0 }, // Khấu trừ
  netSalary: { type: Number, required: true }, // Lương thực nhận
  status: { 
    type: String, 
    enum: ['pending', 'calculated', 'paid'], 
    default: 'pending' 
  },
  paidAt: { type: Date }, // Ngày thanh toán
  notes: { type: String }, // Ghi chú
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Index để tìm kiếm nhanh
salarySchema.index({ staffId: 1, month: 1, year: 1 }, { unique: true });

export default mongoose.model("Salary", salarySchema); 