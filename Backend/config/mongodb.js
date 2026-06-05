import mongoose, { mongo } from "mongoose";
import 'dotenv/config';

const connectDB= async()=>{

    mongoose.connection.on('connected',()=>{
        console.log("DB CONNECTED");
        
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/dealocity`)
}


export default connectDB;