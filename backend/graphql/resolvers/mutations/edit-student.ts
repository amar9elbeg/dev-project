import { StudentModel } from "@/mongodb/student"

export const editStudent = async (_: any, { studentInput, studentId }: any) =>{
    try {
        console.log("student id", studentId, "input", studentInput);
        
        const studentData = await StudentModel.findByIdAndUpdate(studentId,studentInput)
        return true
    } catch (error) {
        return error
    }

}