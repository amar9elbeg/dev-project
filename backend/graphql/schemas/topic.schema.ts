import { gql } from 'graphql-tag'

export const topicTypeDefs = gql`
    scalar Date


    #Topic

    scalar Date

    type Topic {
        _id: ID
        name: String!
        description: String!
        defaultFeedbackGood: String
        defaultFeedbackMedium: String
        defaultFeedbackNotEnough: String
        classId: ID
        active: Boolean
    }

    input CreateTopicInput {
        name: String!
        description: String
        defaultFeedbackGood: String
        defaultFeedbackMedium: String
        defaultFeedbackNotEnough: String
        classId: ID
        active: Boolean
    }

    type Query {
        getTopicsQuery: [Topic]
        getTopicByIdQuery(topicId: ID!): Topic
        getTopicByClassIdQuery(classId: ID!): [Topic]
    }

    type Mutation {
        createTopicMutation(input: CreateTopicInput!): Topic
        editTopicMutation(topicId: ID!, topicInput: CreateTopicInput): Topic
        deleteTopicMutation(topicId: ID!): Boolean
    }

`