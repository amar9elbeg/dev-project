
import { CreateAttendanceInput } from "@/generated/graphql";
import { AttendanceModel } from "@/mongodb/attendance";

export const createAttendanceMutation = async (_: any, { input }: { input: CreateAttendanceInput }) => {
  const currentTimestamp = new Date();

  const attendanceData = await AttendanceModel.create({
    ...input,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp,
  });



  return attendanceData;
};
