import { getClass, getClassById } from './queries'
import { createClass } from './mutations'
import { editClass } from './mutations/edit-class'
import { deleteClass } from './mutations/delete-class'


export const resolvers = {
    Query: { getClass , getClassById },
    Mutation: { createClass , editClass, deleteClass}
} as any