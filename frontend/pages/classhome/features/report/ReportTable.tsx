import React, { Dispatch, SetStateAction } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Student } from '@/generated';

type ReportTableProps = {
    studentData: Student[];
    reportsDataByClassId: Report[],
    refreshReportsData: () => void;
    reportsLoading: boolean;
    reportsError: any

    //   value: boolean;
    //   setValue: Dispatch<SetStateAction<boolean>>;
    //   setAdjustStudentData: Dispatch<SetStateAction<Student | undefined>>;
    //   refreshStudentsData: () => void;
};

export const ReportTable = ({ studentData }: ReportTableProps) => {
    console.log('student data', studentData);
    let number = 0

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
                                <TableCell>topic</TableCell>
                                <TableCell>note</TableCell>
                                <TableCell>valuation</TableCell>
                                <TableCell>active</TableCell>
                                <TableCell>status</TableCell>
                                <TableCell>sent</TableCell>

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
