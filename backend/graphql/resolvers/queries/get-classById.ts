import { ClassModel } from "@/mongodb/class"


export const getClassByIdQuery = async (_: any, { classId }: any) => {


    const classById = await ClassModel.findById(classId)
    return classById
}