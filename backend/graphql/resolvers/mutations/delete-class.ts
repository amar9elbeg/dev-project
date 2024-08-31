import { ClassModel } from "@/mongodb/class"

export const deleteClassMutation = async (_: any, { classId }: any) =>{
        const classData = await ClassModel.findByIdAndDelete(classId)
        return true
}