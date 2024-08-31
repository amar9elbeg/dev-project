import { StudentModel } from "@/mongodb/student"

export const editStudentMutation = async (_: any, { studentInput, studentId }: any) => {
    const studentData = await StudentModel.findByIdAndUpdate(studentId, { ...studentInput, updatedAt: new Date() });

    return studentData;
}