import { TopicModel } from "@/mongodb/topic";


export const getTopicByIdQuery = async (_: any, { topicId }: any) => {
    const topicById = await TopicModel.findById(topicId)
    return topicById
}