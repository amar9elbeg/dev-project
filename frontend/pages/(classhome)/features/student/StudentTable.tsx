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
import { StudentDropDownMenu } from '../../components/StudentDropDownMenu';

type StudentTableProps = {
  data: Student[]; 
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setAdjustStudentData: Dispatch<SetStateAction<Student | undefined>>;
  refreshStudentsData: () => void;
};

export const StudentTable = ({ data, value, setValue, setAdjustStudentData, refreshStudentsData }: StudentTableProps) => {
  console.log('student data', data);

  return (
    <div className='rounded-lg border-gray-300 border'>
      <Table className='bg-white rounded-lg'>
        <TableHeader>
          <TableRow>
            <TableHead className=' max-w-16'>ID</TableHead>
            <TableHead className=' max-w-16'>Зураг</TableHead>
            <TableHead className=' max-w-20'>Нэр</TableHead>
            <TableHead className=' max-w-20'>Овог</TableHead>
            <TableHead className=' max-w-20'>Цахим хаяг</TableHead>
            <TableHead className=' max-w-20'>Утасны дугаар</TableHead>
            <TableHead className=' max-w-20'>Төлөв</TableHead>
            <TableHead className=' w-10'>Засах</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.length > 0 ? (
            data?.map((each) => (
              <TableRow key={each._id}>
                <TableCell>{each.studentCode}</TableCell>
                <TableCell>
                  <img className='h-12 w-12' src={each.profileImageUrl || ""} />
                </TableCell>
                <TableCell>{each.firstName}</TableCell>
                <TableCell>{each.lastName}</TableCell>
                <TableCell>{each.email}</TableCell>
                <TableCell>{each.phoneNumber}</TableCell>
                <TableCell>
                  <div className={`rounded-lg p-1 w-fit ${each.active ? "bg-green-400" : "bg-red-400 text-white"}`}>
                    {each.active ? 'Идэвхитэй' : 'Идэвхигүй'}
                  </div>
                </TableCell>
                <TableCell>
                  <StudentDropDownMenu
                    data={each}
                    value={value}
                    setValue={setValue}
                    refreshStudentsData={refreshStudentsData}
                    setAdjustStudentData={setAdjustStudentData}
                  />
                </TableCell>
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
