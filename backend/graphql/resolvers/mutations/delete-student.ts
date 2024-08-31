import { StudentModel } from "@/mongodb/student"

export const deleteStudentMutation = async (_: any, { studentId }: any) =>{
        const studentData = await StudentModel.findByIdAndDelete(studentId)
        return true

}