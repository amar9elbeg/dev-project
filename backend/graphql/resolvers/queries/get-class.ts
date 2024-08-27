import { ClassModel } from "@/mongodb/class"

export const getClass = async (req: Request, res: Response) => {
    const classData = await ClassModel.find({})

    return classData
}