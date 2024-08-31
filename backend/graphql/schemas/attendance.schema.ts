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
        attendanceId: ID
        classId: ID
        studentId: ID
        date: Date
        createdAt: Date
        status: AttendanceStatus
    }

    input CreateAttendanceInput {
        classId: ID!
        studentId: ID!
        date: Date!
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