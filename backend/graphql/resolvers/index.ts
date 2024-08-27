import { getUser } from './queries'
import { createUser } from './mutations'

export const resolvers = {
    Query: { getUser },
    Mutation: { createUser }
} as any