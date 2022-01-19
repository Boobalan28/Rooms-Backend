const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://Boobalan:boobalan1234@cluster0.ixzoi.mongodb.net/Rooms-App'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose