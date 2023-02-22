const express = require('express');
const app = express();
const routes = require('./MealRoutes');
const cors = require("cors");

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set("strictQuery", false);

const PORT = 4000 || process.env.port;

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('Connected to Mongo'))
.catch((err) => console.log(err))

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})