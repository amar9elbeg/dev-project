
import { AttendanceModel } from "@/mongodb/attendance";

export const createAttendanceMutation = async (_: any, { input }: any) => {
    const currentTimestamp = new Date();

    const attendanceData = await AttendanceModel.create({
      ...input,
      createdAt: currentTimestamp,
      updatedAt: currentTimestamp,
    });



    return attendanceData;
};
