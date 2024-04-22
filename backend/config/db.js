import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('// UR DATABASE WITH ATLAS MONGODB').then(()=>console.log("DataBase Connected"));
}