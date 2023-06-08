require('dotenv').config();
const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const passport = require("passport");
const authRoute = require("./routes/auth")
const app = express();
const passportSetup = require("./passport")
const {userRouter} = require('./routes/userRouter');
const {router} = require('./routes/orderRouter');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));

app.use(
    cookieSession({name:"session", keys:["openreplay"], maxAge: 24 * 60 * 60 * 100,})
);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Routes
app.use(userRouter);
app.use(router);
app.use("/auth", authRoute);

app.listen("8000", ()=>{
    console.log("server is running!")
})