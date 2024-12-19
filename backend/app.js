const dotenv=require('dotenv')
dotenv.config()
const express=require('express')
const cors=require('cors')
const app=express();
const connectToDb=require('./db/db.js')
const userRoutes=require('./routes/user.route.js');
const captainRoutes=require('./routes/captain.route.js');
const cookieParser = require('cookie-parser');
app.use(cors())
connectToDb()

//middlerware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use("/users",userRoutes)
app.use("/captains",captainRoutes)

module.exports=app;