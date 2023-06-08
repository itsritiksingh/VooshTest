const express = require("express");
const router = express.Router();
const { userModel } = require("../models/user.js");
const bcrypt = require("bcrypt");

router.post("/add-user", (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password,10);
  let user = new userModel(req.body);
  user.save().then(()=> {
    res.json(user);
  }).catch(e => {console.log(e); res.status(403).json(e);});
  
});

module.exports = {userRouter : router};
