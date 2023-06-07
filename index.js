// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose")
// const app = express();
// const {router} = require("./routes/bookRouter");
// const {router : userRouter} = require("./routes/userRouter");

// mongoose
//   .connect(
//     process.env.MONGO_URI,
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("mongoose connected"))
//   .catch((e) => console.log(e));

// app.use(express.urlencoded({extended:false}));
// app.use(express.json());

// app.use("/book",router);
// app.use("/user",userRouter);

// app.listen(process.env.PORT,()=> {
//     console.log("server started");
// })