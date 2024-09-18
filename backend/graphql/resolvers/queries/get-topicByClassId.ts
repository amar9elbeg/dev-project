import { TopicModel } from "@/mongodb/topic";
import mongoose from 'mongoose';



export const getTopicByClassIdQuery = async (_: any, { classId }: any) => {
    console.log('classid topic', classId);
    const objectId = new mongoose.Types.ObjectId(classId);
    const topics = await TopicModel.find({ classId: objectId });
    return topics
}