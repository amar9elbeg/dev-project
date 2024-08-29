import { ClassModel } from "@/mongodb/class"

export const getClass = async () => {
    const classData = await ClassModel.find({})

    return classData
}

