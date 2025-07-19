let mongoose = require('mongoose');
let userEnquirySchema = new mongoose.Schema({
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
module.exports = mongoose.model('UserEnquiry', userEnquirySchema);
