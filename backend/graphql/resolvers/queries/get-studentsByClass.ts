import { StudentModel } from "@/mongodb/student";

export const getStudentsByClassIdQuery = async (_: any, { classId }: any) => {
        // console.log('student id', classId);
        
        const students = await StudentModel.find({ classId });

        return students;

};
