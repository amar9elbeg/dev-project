
import { TopicModel } from "@/mongodb/topic";

export const createTopicMutation = async (_: any, { input }: any) => {
    const currentTimestamp = new Date();

    const topicData = await TopicModel.create({
      ...input,
      createdAt: currentTimestamp,
      updatedAt: currentTimestamp,
    });


    return topicData;

};
