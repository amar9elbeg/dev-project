import { ClassModel } from "@/mongodb/class"

export const getClass = async () => {
    const classData = await ClassModel.find({})

    return classData
}

export const getClassById =  async (_: any, { classId }: any) =>{
    console.log('get class by id', classId);
    
    const classById = await ClassModel.findById(classId)
    return classById
}