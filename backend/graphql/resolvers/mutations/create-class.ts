import { ClassModel } from "@/mongodb/class"

export const createClass = async (req: Request, res: Response) => {
    const {input}
    
    const user = await ClassModel.create(input)

    return user
}