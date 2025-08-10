import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type:String,
        required:true
    }
}, { timestamps: true })

const productModal = mongoose.model('product', productSchema)

export default productModal