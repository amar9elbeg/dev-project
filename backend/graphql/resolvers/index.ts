import {  getClassesQuery } from './queries/get-class'
import {  getClassByIdQuery } from './queries/get-classById'
import {  createClassMutation } from './mutations/create-class'
import {  editClassMutation } from './mutations/edit-class'
import {  deleteClassMutation } from './mutations/delete-class'
import { createStudentMutation } from './mutations/create-student'
import {  deleteStudentMutation } from './mutations/delete-student'
import {  getStudentsByClassIdQuery } from './queries/get-studentsByClass'
import {  getStudentByIdQuery } from './queries/get-studentById'
import {  editStudentMutation } from './mutations/edit-student'
import {  getTopicsQuery } from './queries/get-topic'
import {  createTopicMutation } from './mutations/create-topic'
import {  editTopicMutation } from './mutations/edit-topic'
import {  deleteTopicMutation } from './mutations/delete-topic'
import {  getAttendanceByDateQuery } from './queries/get-attendanceByDate'
import {  editAttendanceMutation } from './mutations/edit-attendance'
import {  createAttendanceMutation } from './mutations/create-attendance'
import { getTopicByIdQuery } from './queries/get-topicById'
import { getTopicByClassIdQuery } from './queries/get-topicByClassId'
import { getReportByClassIdQuery } from './queries/get-reportByClass'
import { createReportMutation } from './mutations/create-report'
// import {createImageUrl} from './mutations/creaye-imageUrl'


export const resolvers = {
    Query: { 
        getClassesQuery , 
        getClassByIdQuery, 
        getStudentByIdQuery, 
        getStudentsByClassIdQuery, 
        getTopicsQuery, 
        getTopicByIdQuery, 
        getAttendanceByDateQuery,
        getTopicByClassIdQuery,
        getReportByClassIdQuery
     },
    Mutation: { 
        createClassMutation , 
        editClassMutation, 
        deleteClassMutation, 
        createStudentMutation,
        editStudentMutation ,
        deleteStudentMutation, 
        createTopicMutation, 
        editTopicMutation, 
        deleteTopicMutation, 
        editAttendanceMutation, 
        createAttendanceMutation,
        createReportMutation
    }
} as any