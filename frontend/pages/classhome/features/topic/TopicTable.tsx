import React, { Dispatch, SetStateAction } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {  Topic } from '@/generated';
import { TopicDropDownMenu } from './TopicDropDownMenu';

type TopicTableProps = {
  data: Topic[]; 
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setAdjustTopicData: Dispatch<SetStateAction<Topic | undefined>>;
  refreshTopicsData: () => void;
};

export const TopicTable = ({ data, value, setValue, setAdjustTopicData, refreshTopicsData }: TopicTableProps) => {
  console.log('topic data', data);

  return (
    <div className='rounded-lg border-gray-300 border'>
      <Table className='bg-white rounded-lg'>
        <TableHeader>
          <TableRow>
            <TableHead className=' max-w-16'>Гарчиг</TableHead>
            <TableHead className=' max-w-24'>Тайлбар</TableHead>
            <TableHead className=' max-w-24'>Сэтгэгдэл</TableHead>
            <TableHead className=' max-w-10'>Төлөв</TableHead>
            <TableHead className=' w-10'>Засах</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.length > 0 ? (
            data?.map((each) => (
              <TableRow key={each._id}>
                <TableCell>{each.name}</TableCell>
                <TableCell>{each.description}</TableCell>
                <TableCell>{each.defaultFeedbackGood} <br/> {each.defaultFeedbackMedium} <br/> {each.defaultFeedbackNotEnough}</TableCell>

                <TableCell>
                  <div className={`rounded-lg p-1 w-fit ${each.active ? "bg-green-400" : "bg-red-400 text-white"}`}>
                    {each.active ? 'Идэвхитэй' : 'Идэвхигүй'}
                  </div>
                </TableCell>
                <TableCell>
                  <TopicDropDownMenu
                    data={each}
                    value={value}
                    setValue={setValue}
                    refreshTopicsData={refreshTopicsData}
                    setAdjustTopicData={setAdjustTopicData}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className='italic text-gray-500'>No results found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
