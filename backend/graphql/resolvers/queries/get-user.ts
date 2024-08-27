import { UserModel } from "@/mongodb/user"

export const getUser = async () => {
    const user = await UserModel.find({})

    return user[0]
}