import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
});

// Avoid redefining the model if it already exists
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;












// import mongoose from "mongoose";
// import foodModel from '../models/foodModel.js';



// const foodSchema = new mongoose.Schema({
//     name: {type:String,required:true},
//     description: {type:String,required:true},
//     price: {type:Number,required:true},
//     image: {type:String,required:true},
//     category: {type:String,required:true}
// })

// const foodModel = mongoose.models.food || mongoose.model("food",foodSchema);


// export default foodModel;