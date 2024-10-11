import { ReportModel } from './../../../mongodb/report';

export const getReportByClassIdQuery = async (_: any, { classId }: any) => {
        
        const reports = await ReportModel.find({ classId });

        return reports;

};
