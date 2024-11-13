import React, {  useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Student, Topic, ReportPopulate } from '@/generated';
import { Input } from "@/components/ui/input"
import { SelectorCustom } from '@/pages/(common)/components/SelectorCustom';
import { Checkbox } from "@/components/ui/checkbox"


type ReportTableProps = {
    studentData: Student[];
    reportsDataByClassId: ReportPopulate[];
    refreshReportsData: () => void;
    topicsDataByClassId: Topic[],
    reportsLoading: boolean;
    reportsError: any;
};

export const ReportTable = ({ studentData, reportsDataByClassId, refreshReportsData, reportsLoading, reportsError, topicsDataByClassId }: ReportTableProps) => {
    let number = 1

    const [reportTopics, setReportTopics] = useState<Topic[]>([]);
    const [reportDate, setReportDate] = useState<string[]>([]);

    const topicList = reportsDataByClassId.flatMap((report) => report.topics)
    const topicDate = reportsDataByClassId.flatMap((report) => report.days)

    const dateFormatReportTable = (date: string) => {
        const [year, month, day] = date.split("T")[0].split("-");
        return `${month}/${day}`;
    }

    const feedbackcollector = (value: string) => { console.log(value) }

    return (
        <div className='rounded-lg border-gray-300 border'>
            <Table className='bg-white rounded-lg'>
                <TableHeader>
                    <TableRow>
                        <TableHead className=' max-w-16'>№</TableHead>
                        <TableHead className=' max-w-16'>Овог нэр</TableHead>
                        <TableHead className=' max-w-20'>Сэдэв</TableHead>
                        <TableHead className=' max-w-20'>Тэмдэглэл</TableHead>
                        <TableHead className=' max-w-20'>Үнэлгээ</TableHead>
                        <TableHead className=' max-w-20'>Ирц</TableHead>
                        <TableHead className=' max-w-20'>Төлөв</TableHead>
                        <TableHead className=' w-10'>Илгээсэн</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {studentData?.length > 0 ? (
                        studentData?.map((each) => (
                            <TableRow key={each._id}>
                                <TableCell>{number++}</TableCell>
                                <TableCell> <p className='uppercase'>{each.lastName[0]}</p>.<p className='capitalize'>{each.firstName}</p></TableCell>
                                <TableCell>
                                    {topicList.map((topic) => <p key={topic._id}>{topic.name}</p>)}
                                </TableCell>
                                <TableCell>
                                    {topicList.map((topic) =>
                                        <SelectorCustom
                                            key={topic._id}
                                            content={[topic.defaultFeedbackGood, topic.defaultFeedbackMedium, topic.defaultFeedbackNotEnough]}
                                            feedbackOnValueChange={feedbackcollector}
                                        />
                                    )}
                                </TableCell>
                                <TableCell>
                                    {topicList.map((topic) =>
                                        <div key={topic._id} className='flex' >
                                            <Input type='number' />
                                            <p>%</p>
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {topicDate.map((date, index) =>
                                        <div key={index} className='flex'>
                                            <p>{dateFormatReportTable(date)}</p>
                                            <SelectorCustom
                                                content={["ирсэн", "ирээгүй"]}
                                                feedbackOnValueChange={feedbackcollector}
                                            />
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell><Checkbox defaultChecked /></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={8} className='italic' >No results found</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};
