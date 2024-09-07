import { ClassModel } from "@/mongodb/class";

export const createClassMutation = async (_: any, { input }: any) => {
  
    const currentTimestamp = new Date();

    const classData = await ClassModel.create({
      ...input,
      createdAt: currentTimestamp,
      updatedAt: currentTimestamp,
    });

    return classData;
};
