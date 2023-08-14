const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://mymongoapp:mymongoappjs@cluster0.bpnais5.mongodb.net/iNotebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully")
    })
}

module.exports = connectToMongo;