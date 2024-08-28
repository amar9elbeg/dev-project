import { ClassModel } from "@/mongodb/class"

export const createClass = async (_: any, { input }: any) =>{
    try {
        const classData = await ClassModel.create(input)   
        return classData
    }      
     catch (error) {
        return error
}}