const express = require("express");
const router = express.Router();
const { orderModel } = require("../models/order.js");
const { userModel } = require("../models/user.js");

router.post("/add-order",async (req,res)=>{
    const {user_id, sub_total,phone_number} = req.body; 
    let order = new orderModel({phoneNumber : phone_number,subTotal : sub_total});
    await order.save();

    await userModel.updateOne({_id: user_id},{$push: {orders: order._id}});

    return res.json({order});
});

router.post("/get-order",async (req,res)=>{
    const {user_id} = req.body;

    let usersDetails = await userModel.findById(user_id).populate("orders");

    return res.json({usersDetails});
});



// router.get("/", (req, res) => {
//   bookModel
//     .find()
//     .then((books) => res.json(books))
//     .catch((e) => {
//       console.log(e);
//       res.json(e);
//     });
// });

// // router.route("/").get().post()

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   bookModel
//     .findById(id)
//     .then((books) => res.json(books))
//     .catch((e) => {
//       console.log(e);
//       res.json(e);
//     });
// });

// router.post("/", (req, res) => {
//   const book = new bookModel(req.body);

//   book
//     .save()
//     .then((r) => res.json(r))
//     .catch((e) => {
//       console.log(e);
//       res.json(e);
//     });
// });

// router.patch("/:id", (req, res) => {
//   const { id } = req.params;
//   bookModel
//     .updateOne({_id:id}, { $set: req.body }, { upsert: true })
//     .then((books) => res.json(books))
//     .catch((e) => {
//       console.log(e);
//       res.json(e);
//     });
// });

// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   bookModel
//     .deleteOne({ _id: id })
//     .then((books) => res.json(books))
//     .catch((e) => {
//       console.log(e);
//       res.json(e);
//     });
// });

module.exports = { router };
