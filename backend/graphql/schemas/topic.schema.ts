import { Topic } from './../../generated/graphql';
import { gql } from 'graphql-tag'

export const topicTypeDefs = gql`
    scalar Date


    #Topic

    type Topic {
        _id: ID
        name: String
        week: String
        active: Boolean
        description: String!
        defaultFeedbacks: [String]
    }


    input CreateTopicInput {
        name: String!
        week: String!
        active: Boolean!
        description: String!
    }

  

    type Query {
        getTopicsQuery: [Topic]
        getTopicByIdQuery (topicId: ID!): Topic
    }

    type Mutation {
        createTopicMutation(input: CreateTopicInput!): Topic
        editTopicMutation(topicId: ID!, topicInput: CreateTopicInput): Topic
        deleteTopicMutation(topicId: ID!): Boolean

    }
`