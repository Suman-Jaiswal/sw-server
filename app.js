const express = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
userRoutes = require("./routes/user");
const cors = require("cors");


dotenv.config();
app = express();

//connect to db
try {
    mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("connected to db");
} catch (error) {
    handleError(error);
}
process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
});

require("dotenv")
    .config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.send("API is live");
})

//using user route
app.use(userRoutes);

//setup server to listen on port 5000
app.listen(process.env.PORT || 5000, () => {
    console.log("Server is live on port 5000");
})