import mongoose from "mongoose";

export interface IProduct {
    _id?: mongoose.Types.ObjectId,
    name: string,
    category: string,
    price: string,
    unit: string,
    image: string,
    createdAt?: Date,
    updatedAt?: Date
}

const productSchema = new mongoose.Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: [
            "Banners",
            "Posters",
            "Event Invitations",
        ],
        required: true
    },
    price: {
        type: String,
        required: true

    }
    ,
    unit: {
        type: String,
        required: true,
        enum:[
            "piece"
        ]

    }
    ,
    image: {
        type: String,
        required: true

    }
}, {
    timestamps: true
})


const Product=mongoose.models.Product || mongoose.model("Product",productSchema)
export default Product