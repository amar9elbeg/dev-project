import { gql } from 'graphql-tag'

export const attendanceTypeDefs = gql`
    scalar Date

    # Attendance

    enum AttendanceStatus {
        PRESENT 
        ABSENT 
        LATE 
        EXCUSED 
        SICK 
    }

    type Attendance {
        _id: ID!
        classId: ID!
        studentId: ID!
        topicId: ID!
        topicFeedback: String!
        topicAssessment: Int!
        date: Date!
        status: AttendanceStatus!
        createdAt: Date
        updatedAt: Date
    }

    input CreateAttendanceInput {
        classId: ID!
        studentId: ID!
        date: Date!
        topicId: ID!
        topicFeedback: String!
        topicAssessment: Int!
        status: AttendanceStatus!
    }

    input AttendanceByDateInput {
        startDate: Date!
        endDate: Date!
        studentId: ID
    }

    type Query {
        getAttendanceByDate(filter: AttendanceByDateInput): [Attendance] 
    }

    type Mutation {
        createAttendanceMutation(input: CreateAttendanceInput): Attendance
        editAttendanceMutation(attendanceId: ID!, attendanceInput: CreateAttendanceInput): Attendance
    }
`