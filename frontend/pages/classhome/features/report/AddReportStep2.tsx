import React, { Dispatch, SetStateAction, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { DatePicker } from '@/pages/(common)/components/DatePicker';
import * as Yup from 'yup';
import { dayMap, reportInputType } from '../utils/ReportFormik';
import { ArrowLeft } from 'lucide-react';


export interface AddReportStepProps {
    reportInput: reportInputType;
    setReportInput: Dispatch<SetStateAction<reportInputType>>;
    currentSlideIndex: number;
    setCurrentSlideIndex: Dispatch<SetStateAction<number>>;
}

export const AddReportStep2 = ({ reportInput, setReportInput, currentSlideIndex, setCurrentSlideIndex }: AddReportStepProps) => {

    const startDate = new Date(reportInput?.startDate)
    const endDate = new Date(reportInput?.endDate)    

    const dates: Date[] = []
    const [selectedDays, setSelectedDays] = useState<string[]>(reportInput?.selectedDate);

    while (startDate < endDate) {        
        startDate.setDate(startDate.getDate() + 1)
        const newDate = new Date(startDate)
        dates.push(newDate)        
    }

    function formattedDate(day: Date) {
        const dayNames = ['Ням', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба'];
        const dayIndex = day.getDay();
        return `${day.getMonth()} сарын ${day.getDate()} , ${dayNames[dayIndex]}`;
    }

    const handleCheckboxChange = (day: Date) => {
        const dayISO = day.toISOString();
        setSelectedDays((prevSelectedDays) => {
            if (prevSelectedDays.includes(dayISO)) {
                return prevSelectedDays.filter((d) => d !== dayISO);
            } else {
                return [...prevSelectedDays, dayISO];
            }
        });        
    };

    const submitFunction = () => {
        setReportInput((prevInput) => ({ ...prevInput, selectedDate: selectedDays }));
        setCurrentSlideIndex(2);
    }

    const previusSlide=()=>{
        setCurrentSlideIndex(0)
    }

    return (
        <div className='flex flex-col gap-1 px-5'>
            {
                dates.map((day) =>
                    <label>
                        <input type='checkbox' checked={selectedDays.includes(day.toISOString())} onChange={() => handleCheckboxChange(day)} /> {formattedDate(day)}
                    </label>
                )
            }
            <footer className='flex justify-between items-end mt-10'>
                <button className='bg-black text-white p-2 rounded-lg' onClick={previusSlide} >
                    <ArrowLeft/>
                </button>
                <button className='bg-black text-white p-2 rounded-lg' onClick={submitFunction} disabled={selectedDays.length == 0}>
                    Үргэлжлүүлэх
                </button>
            </footer>
        </div>
    )
}
