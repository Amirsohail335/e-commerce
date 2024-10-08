const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");

mongoose
  .connect(
    
    // "mongodb+srv://Striker335:Striker@335@ecom-cluster.6fsi7.mongodb.net/"
    'mongodb+srv://e-commerce-user:User335@e-commerce-cluster.s0su0.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce-cluster'
  )
  .then(() => console.log("Mongo DB connect"))
  .catch((error) => console.log(error));


const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
