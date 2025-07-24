import { Schema, model } from 'mongoose';
let userEnquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    phone:{
        type: String,
        required: true  
    }
});
export default model('UserEnquiry', userEnquirySchema);
