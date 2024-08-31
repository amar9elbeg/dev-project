import { Student } from './../../generated/graphql';
import { gql } from 'graphql-tag'

export const studentTypeDefs = gql`
    scalar Date

    #Student

    type Student {
        studentId: ID 
        firstName: String
        lastName: String
        studentCode: String
        profileImageUrl: String
        classId: ID
        active: Boolean
    }

    input CreateStudentInput {
        firstName: String!
        lastName: String!
        studentCode: String!
        profileImageUrl: String!
        classId: ID
    }


    type Query {
        getStudentsByClassIdQuery (classId: ID!): [Student]
        getStudentByIdQuery (studentId: ID!): Student
    }

    type Mutation {
        createStudentMutation(input: CreateStudentInput!): Student
        editStudentMutation(studentId: ID!, studentInput: CreateStudentInput): Boolean
        deleteStudentMutation(studentId: ID!): Boolean
    }
`