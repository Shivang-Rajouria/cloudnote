const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017/"
const connectToMongo = async ()=>{
   try {
    await mongoose.connect(mongoURI)
    console.log("connected to mongodb")

   } catch (err){
       console.log(err);
   }
}
module.exports=connectToMongo;