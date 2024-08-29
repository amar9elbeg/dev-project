import mongoose, { Schema } from "mongoose";

const ClassSchema = new Schema({ 
    name: {
        type: String,
        required: [true, "please insert class name"],
    }, 
    teachers: {
        type: [String],
    }, 
    startDate: {
        type: Date,
        required: [true, "please insert start date"],
    },
    endDate: {
        type: Date,
        required: [true, "please insert enddate"],
    },
    type:{
        type: String,
        enum: ['CODING', 'DESIGN'],
        required: [true, "please insert class type"],
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }})

export const ClassModel = mongoose.models.class || mongoose.model('class', ClassSchema);
