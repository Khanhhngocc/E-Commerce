import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    images: [
        {
            type: String
        }
    ],
    parentCatName: {
        type: String
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null
    }
}, {
    timestamps: true
})

const Category = mongoose.model("Category", categorySchema, "categories");

export default Category;