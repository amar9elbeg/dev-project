import mongoose, { Schema } from "mongoose";

const TopicSchema = new Schema({ 
    name: {
        type: String,
        required: [true, "please insert topic name"],
    }, 
    description: {
        type: String,
        required: [true, "please insert topic description"],
    }, 
    defaultFeedbackGood: {
        type: String,
    }, 
    defaultFeedbackMedium: {
        type: String,
    }, 
    defaultFeedbackNotEnough: {
        type: String,
    }, 
    classId: {
        type: Schema.Types.ObjectId,
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
})

export const TopicModel = mongoose.models.topic || mongoose.model('topic', TopicSchema);
