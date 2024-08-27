import { gql } from 'graphql-tag'

export const typeDefs = gql`
    scalar Date

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
        name: String!
        teachers: [String]
        endDate: Date!
        startDate: Date!
        type: ClassType!
    }


    input CreateClassInput {
        name: String!
        teachers: [String]
        endDate: Date!
        startDate: Date!
        type: ClassType!

    }

    type Query {
        getUser: User
        getUsers: [User]
        # getClass(): [Class]
        # getClassById(classId: ID!): Class
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUser(input: UpdateUserInput): User
        createClass(input: CreateClassInput) : Class
        # editClass (classId: ID!, classInput: CreateClassInput): Boolean
        # deleteClass(classId: ID!): Boolean
    }
`