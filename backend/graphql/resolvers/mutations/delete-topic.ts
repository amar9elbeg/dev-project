import { TopicModel } from "@/mongodb/topic"

export const deleteTopic = async (_: any, { topicId }: any) =>{
    try {
        const studentData = await TopicModel.findByIdAndDelete(topicId)
        return true
    } catch (error) {
        return error
    }
}