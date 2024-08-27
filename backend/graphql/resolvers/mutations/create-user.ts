import { UserModel } from "@/mongodb/user"

export const createUser = async (_: any, { input }: any) => {
    const user = await UserModel.create(input)

    return user
}