
import { AttendanceModel } from "@/mongodb/attendance";

export const getAttendanceByDateQuery = async (_: any, { filter }: any) => {
    

    const {startDate, endDate, studentId} = filter
    
    const attendanceData = await AttendanceModel.find({
        studentId: studentId,
        date: {
            $gte: startDate, 
            $lte: endDate,   
        }
    })
    
    return attendanceData
    

}

