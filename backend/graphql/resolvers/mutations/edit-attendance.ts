import { AttendanceModel } from "@/mongodb/attendance"

export const editAttendance = async (_: any, { attendanceInput, attendanceId }: any) =>{
    try {
        const attendanceData = await AttendanceModel.findByIdAndUpdate(attendanceId,{...attendanceInput, updatedAt: new Date() })
        return true
    } catch (error) {
        return error
    }

}