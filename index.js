const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors")
const cartRoute = require("./routes/cart_route.js")
const app = express();


app.use(cors());    
app.use(morgan('dev'))
app.use("/api", cartRoute);

const PORT = process.env.PORT || 9000;

const db = "mongodb+srv://athulkrishnapanamakkal:passw0rd90000@cluster0.oll34kg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(db).then(() => {
    console.log("DB Connected...");
})
.catch((err) => {
    console.log(err)
})

app.get("/", (req, res) => {
    res.send("Hello...")
})

// Write Post, Get....

app.listen(PORT, () => console.log(`Listening On Port:${PORT}`))
