import { ClassModel } from "@/mongodb/class"

export const deleteClass = async (_: any, { classId }: any) =>{
    try {
        const classData = await ClassModel.findByIdAndDelete(classId)
        return true
    } catch (error) {
        return error
    }
}