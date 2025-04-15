import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kulalchethana67:12345678910@cluster0.gw9fy.mongodb.net/fruit-cart').then(()=>console.log("Mongodb Connected!"));
}