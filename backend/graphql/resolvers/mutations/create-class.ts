import { ClassModel } from "@/mongodb/class"

export const createClass = async (_: any, { input }: any) => {
    console.log('hi');
    
    const classData = await ClassModel.create(input)

    return classData
}