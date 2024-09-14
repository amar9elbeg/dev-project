import mongoose, { Schema } from "mongoose";

const ImageSchema = new Schema({ 
    imageUrl: {
        type: String,
        required: [true, "please insert image url"],
    }})

export const ImageModel = mongoose.models.image || mongoose.model('image', ImageSchema);
