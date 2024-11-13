import { CreateReportInput } from "@/generated/graphql";
import { ReportModel } from "@/mongodb/report";

export const createReportMutation = async (_: any, { input }: any) => {
  // console.log('create class input', input)
  const currentTimestamp = new Date();

  const reportData = await ReportModel.create({
    ...input,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp,
  });



  return reportData;
};
