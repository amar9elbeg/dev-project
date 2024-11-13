import { ReportModel } from './../../../mongodb/report';

export const getReportPopulateByClassIdQuery = async (_: any, { classId }: any) => {
        
        const reports = await ReportModel.find({ classId }).populate("topics").exec();


        return reports;

};
