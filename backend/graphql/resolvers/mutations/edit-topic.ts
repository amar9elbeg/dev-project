import { TopicModel } from "@/mongodb/topic"

export const editTopic = async (_: any, { topicInput, topicId }: any) =>{
    try {
        
        const topicData = await TopicModel.findByIdAndUpdate(topicId,topicInput)
        return true
    } catch (error) {
        return error
    }

}