
import { TopicModel } from "@/mongodb/topic";

export const createTopic = async (_: any, { input }: any) => {
  try {
    const currentTimestamp = new Date();

    const topicData = await TopicModel.create({
      ...input,
      createdAt: currentTimestamp,
      updatedAt: currentTimestamp,
    });
    console.log(topicData);


    return topicData;
  } catch (error) {
    console.error("Error creating class:", error);
  }
};
