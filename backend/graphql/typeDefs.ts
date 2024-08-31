import { gql } from 'graphql-tag'

export const typeDefs = gql`
    scalar Date

    #Class

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

    #Student

    type Student {
        studentId: ID 
        firstName: String
        lastName: String
        studentCode: String
        profileImageUrl: String
        classId: ID
        active: Boolean
    }

    input CreateStudentInput {
        firstName: String!
        lastName: String!
        studentCode: String!
        profileImageUrl: String!
        classId: ID
    }

    #Topic

    type Topic {
        topicId: ID 
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
        getClass: [Class]
        getClassById(classId: ID!): Class
        getStudentsByClassId (classId: ID!): [Student]
        getStudentById (studentId: ID!): Student
        getTopic: [Topic]
        getTopicById (topicId: ID!): Topic
        getAttendanceByDate(filter: AttendanceByDateInput): [Attendance] 


    }

    type Mutation {
        createClass(input: CreateClassInput!) : Class
        editClass (classId: ID!, classInput: CreateClassInput): Boolean
        deleteClass(classId: ID!): Boolean
        createStudent(input: CreateStudentInput!): Student
        editStudent(studentId: ID!, studentInput: CreateStudentInput): Boolean
        deleteStudent(studentId: ID!): Boolean
        createTopic(input: CreateTopicInput!): Topic
        editTopic(topicId: ID!, topicInput: CreateTopicInput): Boolean
        deleteTopic(topicId: ID!): Boolean
        createAttendance(input: CreateAttendanceInput): Attendance
        editAttendance(attendanceId: ID!, attendanceInput: CreateAttendanceInput): Attendance
    }
`