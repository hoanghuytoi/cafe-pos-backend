import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", required: true },
      name: String,
      price: Number,
      quantity: Number,
      imageUrl: String
    }
  ],
  subtotal: { type: Number, required: true }, // Tổng tiền trước thuế và giảm giá
  taxRate: { type: Number, default: 0 }, // Tỷ lệ thuế (VD:00.110ax: { type: Number, default: 0 }, // Số tiền thuế
  tax: { type: Number, default: 0 },
  discount: { type: Number, default: 0 }, // Số tiền giảm giá
  total: { type: Number, required: true }, // Tổng tiền cuối cùng
  status: { type: String, enum: ['pending', 'paid', 'cancelled'], default: 'pending' }, // pending: đang chờ, paid: đã thanh toán, cancelled: đã hủy
  amountPaid: { type: Number }, // Số tiền đã thanh toán
  change: { type: Number }, // Số tiền thừa
  paidAt: { type: Date }, // Ngày thanh toán
  cancelledAt: { type: Date }, // Ngày hủy đơn
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema); 