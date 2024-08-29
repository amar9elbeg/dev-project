import mongoose, { Schema } from "mongoose";

const TopicSchema = new Schema({ 
    name: {
        type: String,
        required: [true, "please insert topic name"],
    }, 
    week: {
        type: String,
        required: [true, "please insert week number"],
    }, 
    description: {
        type: String,
        required: [true, "please insert topic description"],
    }, 
    defaultFeedbacks: {
        type: [String],
    }, 
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
})

export const TopicModel = mongoose.models.topic || mongoose.model('topic', TopicSchema);
