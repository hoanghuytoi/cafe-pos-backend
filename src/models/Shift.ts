import mongoose from "mongoose";

const shiftSchema = new mongoose.Schema({
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date },
  status: { type: String, enum: ["active", "closed"], default: "active" }, // active: đang mở, closed: đã đóng
  totalOrders: { type: Number, default: 0 }, // Tổng số đơn hàng
  totalRevenue: { type: Number, default: 0 } // Tổng doanh thu
});

export default mongoose.model("Shift", shiftSchema); 