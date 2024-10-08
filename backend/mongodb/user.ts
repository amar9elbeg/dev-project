import mongoose, { Schema } from "mongoose";


const UserSchema = new Schema({
    firstName: String,
    secondName: String,
    email: String
});

export const UserModel = mongoose.models.user || mongoose.model('user', UserSchema);
