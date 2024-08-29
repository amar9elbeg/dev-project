import { StudentModel } from "@/mongodb/student"

export const getStudentById = async (_: any, { studentId }: any) => {
    console.log("student id", studentId);
    
    const studentData = await StudentModel.findById(studentId)

    return studentData
}

