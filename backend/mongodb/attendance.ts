import mongoose, { Schema } from "mongoose";

const AttendanceSchema = new Schema({ 
    classId: {
        type: Schema.ObjectId,
        ref: "class",
        required: [true, "please insert class id"],
    }, 
    studentId: {
        type: Schema.ObjectId,
        ref: "student",
        required: [true, "please insert student id"],
    }, 
    topicId: {
        type: Schema.ObjectId,
        ref: "topic",
        required: [true, "please insert topic id"],
    }, 
    status:{
        type: String,
        enum: ['PRESENT', 'ABSENT','LATE', 'EXCUSED','SICK'],
        required: [true, "please insert attendance status"],
    },    
    date: {
        type: Date,
        required: [true, "please insert attendance date"],
    },
    topicFeedback: {
        type: String,
        required: [true, "please insert topic feedback status"],
    },
    topicAssessment: {
        type: Number,
        required: [true, "please insert topic assessment status"],
    },
    createdAt: {
        type: Date,
        required: [true, "please insert attendance created date"],
    },
    updatedAt: {
        type: Date
    }})

export const AttendanceModel = mongoose.models.attendance || mongoose.model('attendance', AttendanceSchema);
