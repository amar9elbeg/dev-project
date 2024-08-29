import { ClassModel } from "@/mongodb/class"

export const editClass = async (_: any, { classInput, classId }: any) =>{
    try {
        const classData = await ClassModel.findByIdAndUpdate(classId,classInput)
        return true
    } catch (error) {
        return error
    }

}