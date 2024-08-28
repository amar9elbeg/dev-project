import { ClassModel } from "@/mongodb/class"

export const editClass = async (_: any, { input, classId }: any) =>{
    try {
        const classData = await ClassModel.findByIdAndUpdate(classId,input)
        return true
    } catch (error) {
        return error
    }

}