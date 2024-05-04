const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
const authenticate = require("./middleware/authMiddleware.js")

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL).then(() => {
    console.log("MongoDB connection successfully...!");
    app.listen(PORT, () => {
        console.log(`server is running on port number: ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})


const authRouter = require('./routes/authRoutes.js');
app.use("/auth", authRouter);