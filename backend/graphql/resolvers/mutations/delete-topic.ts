import { TopicModel } from "@/mongodb/topic"

export const deleteTopicMutation = async (_: any, { topicId }: any) =>{

        const studentData = await TopicModel.findByIdAndDelete(topicId)
        return true

}