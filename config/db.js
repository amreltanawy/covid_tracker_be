const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Databse Sccessfully Connected !!")
    }
    catch (err) {
        console.log("Error Connecting Databse ",err.message)
    }
}
module.exports=connectDB
