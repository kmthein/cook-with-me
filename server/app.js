const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const recipeRoutes = require("./routes/recipe");

const app = express();

app.use(cors());

app.use(recipeRoutes);

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(8000);
        console.log("Connected to database.");
}).catch((error) => {
    console.log(error);
}) 

