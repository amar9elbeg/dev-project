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

    type Query {
        getUser: User
        getUsers: [User]
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUser(input: UpdateUserInput): User
    }
`