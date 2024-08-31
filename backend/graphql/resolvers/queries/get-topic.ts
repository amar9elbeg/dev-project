import { TopicModel } from "@/mongodb/topic"

export const getTopicsQuery = async () => {
    const topics = await TopicModel.find({})

    return topics
}

