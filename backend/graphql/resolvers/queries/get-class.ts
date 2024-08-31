import { ClassModel } from "@/mongodb/class"

export const getClassesQuery = async () => {
    const classData = await ClassModel.find({})

    return classData
}

