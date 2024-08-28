import { getClass, getClassById } from './queries'
import { createClass } from './mutations'


export const resolvers = {
    Query: { getClass , getClassById },
    Mutation: { createClass }
} as any