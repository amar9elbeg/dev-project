import { StudentModel } from "@/mongodb/student"

export const createStudent = async (_: any, { input }: any) => {
    const student = await StudentModel.create({...input,createdAt: new Date(), updatedAt: new Date()})

    return student
}