import React, { Dispatch, SetStateAction, useState } from 'react'
import { dayMap, reportInputType } from '../utils/ReportFormik';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Topic } from '@/generated';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export interface AddReportStepProps {
    reportInput: reportInputType;
    setReportInput: Dispatch<SetStateAction<reportInputType>>;
    currentSlideIndex: number;
    setCurrentSlideIndex: Dispatch<SetStateAction<number>>;
    topicsDataByClassId: Topic[],
}

export const AddReportStep3 = ({ reportInput, setReportInput, currentSlideIndex, setCurrentSlideIndex, topicsDataByClassId }: AddReportStepProps) => {
    const [selectedTopics, setSelectedTopics]= useState<string[]>([])
    const [selector, setSelector]= useState<{ id: number, topic?: string  }[]>([])
    const [addSelectButtonDisable, setAddSelectButtonDisable]= useState(false)

    const submitFunction = () => {
        setReportInput((prevInput) => ({ ...prevInput, selectedTopics: selectedTopics }));
        setCurrentSlideIndex(3);
    }

    const handleSelectChange = ( value:string, id:number) => {
        const updateSelectedTopics=[...selectedTopics];
        updateSelectedTopics[id] = value;
        setSelectedTopics(updateSelectedTopics);
        setSelector((prevSelector) => [...prevSelector, { id: id, topic: value }]);
    }

    const previusSlide = () => {
        setCurrentSlideIndex(1)
    }

    const addTopicSelector = () => {
        if (selector.length < reportInput.selectedDate.length) {
            setSelector((preSelectors) => [...preSelectors, { id: preSelectors.length }]);
            console.log(selectedTopics);
         } else{
            setAddSelectButtonDisable(true)
         }
    }

    return (
        <div className='flex flex-col px-5'>


            {selector?.map((selector, index) => (
                <Select key={index} onValueChange={(value) => handleSelectChange(value, selector.id)} >
                    <SelectTrigger className="w-full my-3 bg-gray-100">
                        <SelectValue placeholder="Сэдэв сонгох" />
                    </SelectTrigger>
                    <SelectContent >
                        {topicsDataByClassId?.map((topic: Topic, index) => <SelectItem key={index} value={topic._id} >{topic.name}</SelectItem>)}
                    </SelectContent>
                </Select>

            ))}

            <Button variant="outline" className='w-full' onClick={addTopicSelector} disabled={addSelectButtonDisable}>Сэдэв +</Button>


            <footer className='flex justify-between items-end mt-10'>
                <button className='bg-black text-white p-2 rounded-lg' onClick={previusSlide} >
                    <ArrowLeft />
                </button>
                <button className='bg-black text-white p-2 rounded-lg' onClick={submitFunction} disabled={selectedTopics.length == 0}>
                    Үргэлжлүүлэх
                </button>
            </footer>
        </div>
    )
}
