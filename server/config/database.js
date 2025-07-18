import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connect Success");
    } catch (error) {
        console.log("Connect Error!")
    }
}

export default connectDB;