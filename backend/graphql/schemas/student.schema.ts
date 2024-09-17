import { Student } from './../../generated/graphql';
import { gql } from 'graphql-tag'

export const studentTypeDefs = gql`
    scalar Date
    scalar Upload

    #Student

    type Student {
        _id: ID 
        firstName: String
        lastName: String
        studentCode: String
        profileImageUrl: String
        classId: ID
        active: Boolean
        phoneNumber: String
        email: String
    }

    input CreateStudentInput {
        firstName: String!
        lastName: String!
        studentCode: String!
        profileImageUrl: String
        classId: ID
        phoneNumber: String
        email: String
        active: Boolean
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