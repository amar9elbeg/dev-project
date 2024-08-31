import { StudentModel } from "@/mongodb/student"

export const getStudentByIdQuery = async (_: any, { studentId }: any) => {    
    const studentData = await StudentModel.findById(studentId)

    return studentData
}

