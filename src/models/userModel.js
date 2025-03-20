import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgetPasswordToken: {
        type: String,
        default: null,
    },
    forgetPasswordExpire: {
        type: Date,
        default: null,
    },
    verificationToken: {
        type: String,
        default: null,
    },
    verificationExpire: {
        type: Date,
        default: null,
    },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
