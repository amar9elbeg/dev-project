import { StudentModel } from "@/mongodb/student"

export const createStudent = async (_: any, { input }: any) => {
    const currentTimestamp = new Date();

    const student = await StudentModel.create({
        ...input,
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp,
      })

    return student
}