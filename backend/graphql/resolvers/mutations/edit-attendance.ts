import { AttendanceModel } from "@/mongodb/attendance"

export const editAttendanceMutation = async (_: any, { attendanceInput, attendanceId }: any) => {
    const updatedData = await AttendanceModel.findByIdAndUpdate(attendanceId, { ...attendanceInput, updatedAt: new Date() })
    return updatedData
}