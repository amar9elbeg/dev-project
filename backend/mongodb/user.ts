import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({ firstName: String, secondName: String, email: String });

export const UserModel = mongoose.model('user', UserSchema);