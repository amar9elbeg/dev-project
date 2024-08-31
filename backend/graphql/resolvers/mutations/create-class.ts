import { ClassModel } from "@/mongodb/class";

export const createClassMuattion = async (_: any, { input }: any) => {
    const currentTimestamp = new Date();

    const classData = await ClassModel.create({
      ...input,
      createdAt: currentTimestamp,
      updatedAt: currentTimestamp,
    });

    return classData;
};
