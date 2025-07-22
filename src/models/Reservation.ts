import mongoose, { Document, Schema } from "mongoose";

export interface IReservation extends Document {
  table: mongoose.Types.ObjectId; // ID của bàn
  customerName: string; // Tên khách hàng
  customerPhone: string; // Số điện thoại khách hàng
  peopleCount: number; // Số lượng người
  time: Date; // Thời gian đặt bàn
  note?: string; // Ghi chú
  status: "pending" | "reserved" | "cancelled" | "completed" | "expired" | "in-use"; // Trạng thái đặt bàn
  user?: mongoose.Types.ObjectId; // ID của user đặt bàn
}

const ReservationSchema = new Schema<IReservation>({
  table: { type: Schema.Types.ObjectId, ref: "Table", required: true },
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  peopleCount: { type: Number, required: true },
  time: { type: Date, required: true },
  note: { type: String },
  status: { type: String, enum: ["pending", "reserved", "cancelled", "completed", "expired", "in-use"], default: "pending" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model<IReservation>("Reservation", ReservationSchema); 