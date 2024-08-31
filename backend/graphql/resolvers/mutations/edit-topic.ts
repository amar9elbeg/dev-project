import { TopicModel } from "@/mongodb/topic"

export const editTopicMutation = async (_: any, { topicInput, topicId }: any) =>{
        
        const topicData = await TopicModel.findByIdAndUpdate(topicId,{...topicInput,  updatedAt: new Date()})
        return topicData

}