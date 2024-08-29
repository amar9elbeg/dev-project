import { TopicModel } from "@/mongodb/topic"

export const getTopic = async () => {
    const topics = await TopicModel.find({})

    return topics
}

