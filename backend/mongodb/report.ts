import mongoose, { Schema } from "mongoose";

const ReportSchema = new Schema({ 
    classId: {
        type: Schema.ObjectId,
        ref: "class",
        required: [true, "please insert class id"],
    }, 
    topics: {
        type: [Schema.ObjectId],
        ref: "topic",
        required: [true, "please insert topic ids"],
    },   
    days: {
        type: [Date],
        required: [true, "please insert Report date"],
    },
    createdAt: {
        type: Date,
        required: [true, "please insert Report created date"],
        default: Date.now
    },
    updatedAt: {
        type: Date
    }})

export const ReportModel = mongoose.models.report || mongoose.model('report', ReportSchema);
