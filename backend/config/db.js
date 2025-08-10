import mongoose from "mongoose";

const connectDB =async  ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`database connedted ${conn.connection.host}`);
    } catch (error) {
        console.error(`error is ${error.message}`);
        process.exit(1)
        
    }
}

export default connectDB