import { TopicModel } from "@/mongodb/topic";


export const getTopicById =  async (_: any, { topicId }: any) =>{
    
    const classById = await TopicModel.findById(topicId)
    return classById
}