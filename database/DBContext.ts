import mongoose from "mongoose";
export default class DBContext {
    public static connect = async (): Promise<void> => {
        const connectString = "mongodb://localhost:27017";
        const options = {
            connecTimeoutMS: 10000,
            socketTimeoutMS: 10000,
            serverSelectionTimeoutMS: 10000
        }
        try {
            console.log("Connecting to db")
            await mongoose.connect(connectString, options);
        }
        catch (err) {
            console.log(err);
        }
    }
}