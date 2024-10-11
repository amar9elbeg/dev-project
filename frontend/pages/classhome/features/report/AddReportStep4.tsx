import React, { Dispatch, SetStateAction, useState } from 'react'
import { dayMap, reportInputType } from '../utils/ReportFormik';
import { ArrowLeft } from 'lucide-react';
import { Topic, useCreateAttendanceMutationMutation, useCreateReportMutationMutation, useGetReportByDateQuery,} from '@/generated';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export interface AddReportStepProps {
    reportInput: reportInputType;
    setReportInput: Dispatch<SetStateAction<reportInputType>>;
    currentSlideIndex: number;
    setCurrentSlideIndex: Dispatch<SetStateAction<number>>;
    topicsDataByClassId: Topic[],
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
}

export const AddReportStep4 = ({ reportInput, setReportInput, currentSlideIndex, setCurrentSlideIndex, topicsDataByClassId, value, setValue }: AddReportStepProps) => {
    const router = useRouter();
    const { classId } = router.query;

    const [createReportMutationMutation, { data: createReportData, loading: createReportLoading, error: createReportError }]= useCreateReportMutationMutation()
    const {data: getReportData, loading: getReportLoading, error: getReportError, refetch: refreshReportData}=useGetReportByDateQuery({variables: {filter:{ classId}}})

    const submitFunction = async() => {
        const promise = createReportMutationMutation({
            variables: {
                input: {
                    classId,
                    topics: reportInput.selectedTopics,
                    days: reportInput.selectedDate
                }
            }
        });
        toast.promise(promise, {
            pending: 'Adding reports' ,
            success: 'Report added successfully!',
            error: 'Error adding report',
        }, {
            autoClose: 2000,
            position: 'bottom-right'
        });

            await promise;
            await refreshReportData()

        setValue(!value)
    }

    const previusSlide = () => {
        setCurrentSlideIndex(2)
    }

    function formattedDate(day: Date) {
        const dayNames = ['Ням', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба'];
        const dayIndex = day.getDay();
        return `${day.getMonth()} сарын ${day.getDate()} , ${dayNames[dayIndex]}`;
    }

    const selectedTopicsName = (id: string) => {
        const topic = topicsDataByClassId.find((topic) => topic._id === id);
        return topic ? topic.name : 'Unknown Topic';
    }

    return (
        <div className='flex flex-col px-5'>
            <div className='flex flex-col pb-5'>
                <p className='font-medium'>Хичээлийн өдөр:</p>
                <ul className='list-disc pl-5'>
                    {reportInput.selectedDate.map((day) => (<li>{formattedDate(new Date(day))}</li>))}
                </ul>
            </div>
            <div className='flex flex-col'>
                <p className='font-medium'>Сэдэв:</p>
                <ul className='list-disc pl-5'>
                    {reportInput.selectedTopics.map((topicId) => (<li>{selectedTopicsName(topicId)}</li>))}
                </ul>
            </div>
            <footer className='flex justify-between items-end mt-10'>
                <button className='bg-black text-white p-2 rounded-lg' onClick={previusSlide} >
                    <ArrowLeft />
                </button>
                <button className='bg-black text-white p-2 rounded-lg' onClick={submitFunction}>
                    Репорт үүсгэх
                </button>
            </footer>
        </div>
    )
}
