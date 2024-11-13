import { gql } from 'graphql-tag'

export const reportTypeDefs = gql`
    scalar Date

    # Report


    type Report {
        _id: ID!
        classId: ID!
        topics: [ID!]!
        days: [Date!]!
        createdAt: Date
    }
    type ReportPopulate {
        _id: ID!
        classId: ID!
        topics: [Topic!]!
        days: [Date!]!
        createdAt: Date
    }

    input CreateReportInput {
        classId: ID!
        topics: [ID!]!
        days: [Date!]!
    }

    input ReportByClassId {
        classId: ID!
        startDate: Date
        endDate: Date
    }

    type Query {
        getReportByClassIdQuery(classId: ID!): [Report] 
        getReportPopulateByClassIdQuery(classId: ID!): [ReportPopulate] 
    }

    type Mutation {
        createReportMutation(input: CreateReportInput): Report
    }
`