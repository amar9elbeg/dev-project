import { getClass } from './queries'
import { getClassById } from './queries/get-classById'
import { createClass } from './mutations'
import { editClass } from './mutations/edit-class'
import { deleteClass } from './mutations/delete-class'
import { createStudent } from './mutations/create-student'
import { deleteStudent } from './mutations/delete-student'
import { getStudentsByClassId } from './queries/get-studentsByClass'
import { getStudentById } from './queries/get-studentById'
import { editStudent } from './mutations/edit-student'
import { getTopic } from './queries/get-topic'
import { getTopicById } from './queries/get-topicById'
import { createTopic } from './mutations/create-topic'
import { editTopic } from './mutations/edit-topic'
import { deleteTopic } from './mutations/delete-topic'


export const resolvers = {
    Query: { getClass , getClassById, getStudentById, getStudentsByClassId, getTopic, getTopicById },
    Mutation: { createClass , editClass, deleteClass, createStudent,editStudent ,deleteStudent, createTopic, editTopic, deleteTopic}
} as any