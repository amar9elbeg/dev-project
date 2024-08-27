import { gql } from 'graphql-tag'

export const typeDefs = gql`
    type User {
        firstName: String
        secondName: String
        email: String
    }

    input CreateUserInput {
        firstName: String
        secondName: String
        email: String!
    }
    input UpdateUserInput {
        firstName: String
        secondName: String
        email: String
    }

    enum ClassType {
        CODING
        DESIGN
    }
    
    type Class {
        classId: ID
        name: String!
        teachers: [String]
        endDate: Date!
        startDate: date!
        type: ClassType!
    }

    input classId {
        classId: String
    }

    input CreateClassInput {
        classId: ID
        name: String!
        teachers: [String]
        endDate: Date!
        startDate: date!
        type: ClassType!

    }

    type Query {
        getUser: User
        getUsers: [User]
        getClass(): [Class]
        getClassById(classId: ID!): Class
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUser(input: UpdateUserInput): User
        editClass (classId: ID!, classInput: CreateClassInput): Boolean
        deleteClass(classId: ID!): Boolean
    }
`