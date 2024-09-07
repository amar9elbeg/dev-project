
import { CreateAttendanceInput } from "@/generated/graphql";
import { AttendanceModel } from "@/mongodb/attendance";

export const createAttendanceMutation = async (_: any, { input }: { input: CreateAttendanceInput }) => {
  console.log('create class input', input)
  const currentTimestamp = new Date();

  const attendanceData = await AttendanceModel.create({
    ...input,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp,
  });



  return attendanceData;
};
