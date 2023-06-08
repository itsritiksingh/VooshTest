const express = require("express");
const router = express.Router();
const { orderModel } = require("../models/order.js");
const { userModel } = require("../models/user.js");

router.post("/add-order",async (req,res)=>{
    const {userId, subTotal,phoneNumber} = req.body; 
    let order = new orderModel({phoneNumber,subTotal});
    try {
        await order.save();
    } catch (e) {
        console.log(e); 
        return res.json(e);
    }
   

    await userModel.updateOne({_id: userId},{$push: {orders: order._id}});

    return res.json({order});
});

router.get("/get-order",async (req,res)=>{
    const {userId} = req.query;

    let usersDetails = await userModel.findById(userId,{orders:1}).populate("orders");

    return res.json({usersDetails});
});


module.exports = { router };
