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
    }})

// export const ClassModel = mongoose.model('class', ClassSchema);
export const ClassModel = mongoose.models.class || mongoose.model('class', ClassSchema);
