const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    }, 
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String, required: true
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "order"
    }]
})


const userModel = mongoose.model("user",userSchema);
module.exports = {userModel};