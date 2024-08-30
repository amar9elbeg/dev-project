
import { AttendanceModel } from "@/mongodb/attendance";

export const createAttendance = async (_: any, { input }: any) => {
  try {
    const currentTimestamp = new Date();

    const attendanceData = await AttendanceModel.create({
      ...input,
      createdAt: currentTimestamp,
      updatedAt: currentTimestamp,
    });
    console.log(attendanceData);


    return attendanceData;
  } catch (error) {
    console.error("Error creating class:", error);
  }
};
