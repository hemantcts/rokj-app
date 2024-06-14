const express = require("express");
const connectToMongo = require("./database/db");
const cors = require("cors");

const app = express();

const port = 8000;

connectToMongo();

app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("hello world");
})

app.use("/api/auth", require("./routes/auth"));

app.listen(port, ()=>{
    console.log(`running on the port ${port}`)
})

