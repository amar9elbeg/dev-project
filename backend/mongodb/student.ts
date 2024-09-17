import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema({ 
    firstName: {
        type: String,
        required: [true, "please insert student firstname"],
    }, 
    lastName: {
        type: String,
        required: [true, "please insert student lastname"],
    }, 
    studentCode: {
        type: String,
        required: [true, "please insert student code"],
    }, 
    profileImageUrl: {
        type: String,
        // required: [true, "please insert image "],
    }, 
    classId: {
        type: Schema.ObjectId,
        ref: "class",
    }, 
    active: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
    phoneNumber: {
        type: String,
    },
    email: {
        type: String
    }
})

export const StudentModel = mongoose.models.student || mongoose.model('student', StudentSchema);
