import { StudentModel } from "@/mongodb/student";

export const getStudentsByClassId = async (_: any, { classId }: any) => {
    try {
        console.log("Received classId:", classId);
        const students = await StudentModel.find({ classId });

        console.log("Students found:", students);
        return students;
    } catch (error) {
        console.error("Error fetching students:", error);
    }
};
