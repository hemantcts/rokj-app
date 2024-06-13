const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://hemantaroracts:mqOWuK8MLmSDbLvM@cluster0.dpxskip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI);
    console.log("connected to mongo successfully");
}

module.exports = connectToMongo;