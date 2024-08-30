
import { AttendanceModel } from "@/mongodb/attendance";

export const getAttendanceByDate = async (_: any, { filter }: any) => {
    
try {
    const {startDate, endDate, studentId} = filter
    
    const attendanceData = await AttendanceModel.find({
        studentId: studentId,
        date: {
            $gte: startDate, 
            $lte: endDate,   
        }
    }).exec()
    
    return attendanceData
    
} catch (error) {
    console.log(error);
    
}

}

