import mongoose from 'mongoose';

const loginDetailSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,  // Same here for description
    }
}, { timestamps: true });

const LoginDetail = mongoose.models.LoginDetail || mongoose.model('LoginDetail', loginDetailSchema);

export default LoginDetail;
