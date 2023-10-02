import mongoose from "mongoose";

const Connection =() =>{

    mongoose.connect(URI, { useNewUrlParser: true })

   mongoose.connection.on('connected', ()=>{
    console.log("Database connected ");
   })


   mongoose.connection.on('disconnected', ()=>{
    console.log("Database disconnected ");
   })

   
   mongoose.connection.on('error', ()=>{
    console.log("Error ");
   })

}

export default Connection;