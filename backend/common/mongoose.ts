import mongoose from "mongoose"

export const connectMongoose = async () => {
    await mongoose.connect(process.env.MONGODB_URL as string);

    console.log('connection successful')
}