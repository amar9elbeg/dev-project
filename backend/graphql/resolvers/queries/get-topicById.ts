import { TopicModel } from "@/mongodb/topic";


export const getTopicByIdQuery = async (_: any, { topicId }: any) => {
    const classById = await TopicModel.findById(topicId)
    return classById
}