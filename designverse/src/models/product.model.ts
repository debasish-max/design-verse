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
            "Fruits & Vegetables",
            "Dairy & Eggs",
            "Rice, Atta & Grains",
            "Snacks & Biscuits",
            "Spices & Masalas",
            "Beverages & Drinks",
            "Personal Care",
            "Household Essentials",
            "Instant & Packaged Food",
            "Baby & Pet Care"
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
            "kg", "g", "liter", "ml", "piece", "pack"
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