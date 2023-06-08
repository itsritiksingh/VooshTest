const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    subTotal: {
        type: String,
        required: true
    },
    phoneNumber: {
        type:String,
        required:true
    }
    // status: {
    //     enum: ["yettostart","intransit","delivered"],
    //     type:String,
    //     required:true
    // },
})

const orderModel = mongoose.model("order",orderSchema);
module.exports = {orderModel};