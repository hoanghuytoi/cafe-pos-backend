import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { 
        type: String, 
        enum: ['admin', 'employee', 'customer'], 
        default: 'customer' 
    },
    // Thông tin lương
    baseSalary: { type: Number, default: 0 }, // Lương cơ bản
    hourlyRate: { type: Number, default: 0 }, // Lương theo giờ
    commissionRate: { type: Number, default: 0 }, // Tỷ lệ hoa hồng (%)
    isActive: { type: Boolean, default: true }, // true: đang hoạt động, false: đã khóa
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
