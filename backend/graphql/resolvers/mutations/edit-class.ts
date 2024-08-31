import { ClassModel } from "@/mongodb/class"

export const editClassMutation = async (_: any, { classInput, classId }: any) =>{
    
        const classData = await ClassModel.findByIdAndUpdate(classId,{...classInput,  updatedAt: new Date()})
        return classData
 

}