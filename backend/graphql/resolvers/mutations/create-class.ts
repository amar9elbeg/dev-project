import { ClassModel } from "@/mongodb/class";

export const createClass = async (_: any, { input }: any) => {
  try {
    const currentTimestamp = new Date();

    const classData = await ClassModel.create({
      ...input,
      createdAt: currentTimestamp,
      updatedAt: currentTimestamp,
    });
    console.log(classData);


    return classData;
  } catch (error) {
    console.error("Error creating class:", error);
  }
};
