import { StudentModel } from "@/mongodb/student"

export const deleteStudent = async (_: any, { studentId }: any) =>{
    try {
        const studentData = await StudentModel.findByIdAndDelete(studentId)
        return true
    } catch (error) {
        return error
    }
}