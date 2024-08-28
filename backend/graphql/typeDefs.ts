import { gql } from 'graphql-tag'

export const typeDefs = gql`
    scalar Date

    enum ClassType {
        CODING
        DESIGN
    }
    
    type Class {
        classId: ID
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
        getClass: [Class]
        getClassById(classId: ID!): Class
    }

    type Mutation {
        createClass(input: CreateClassInput) : Class
        editClass (classId: ID!, classInput: CreateClassInput): Boolean
        deleteClass(classId: ID!): Boolean
    }
`