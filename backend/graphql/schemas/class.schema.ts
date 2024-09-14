import { gql } from 'graphql-tag'

export const classTypeDefs = gql`
    scalar Date

    #Class

    enum ClassType {
        CODING
        DESIGN
    }
    
    type Class {
        _id: ID
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
        getClassesQuery: [Class]
        getClassByIdQuery(classId: ID!): Class
    }

    type Mutation {
        createClassMutation(input: CreateClassInput!) : Class
        editClassMutation (classId: ID!, classInput: CreateClassInput): Class
        deleteClassMutation(classId: ID!): Boolean
    }
`