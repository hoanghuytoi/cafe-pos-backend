import mongoose, { Document, Schema } from "mongoose";

export interface ITable extends Document {
  name: string;
  seats: number;
  // available: có thể sử dụng, reserved: đã đặt, occupied: đang sử dụng
  status: "available" | "reserved" | "occupied";
}

const TableSchema = new Schema<ITable>({
  name: { type: String, required: true, unique: true },
  seats: { type: Number, required: true },
  status: { type: String, enum: ["available", "reserved", "occupied"], default: "available" },
});

export default mongoose.model<ITable>("Table", TableSchema); 