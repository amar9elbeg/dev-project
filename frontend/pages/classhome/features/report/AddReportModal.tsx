import React, { Dispatch, SetStateAction, useEffect } from 'react';
import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose
} from "@/components/ui/dialog";
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddReportStep1 } from './AddReportStep1';
import { initialReportInput, reportInputType } from '../utils/ReportFormik';
import { AddReportStep2 } from './AddReportStep2';
import { AddReportStep3 } from './AddReportStep3';
import { AddReportStep4 } from './AddReportStep4';

import { Topic } from '@/generated';


interface AddReportModalProps {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
    refreshReportsData: () => void;
    topicsDataByClassId: Topic[],
}


export const AddReportModal = ({ value, setValue, refreshReportsData , topicsDataByClassId}: AddReportModalProps) => {

    useEffect(() => {
        setCurrentSlideIndex(0);
        setReportInput(initialReportInput);
    }, [value])

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [reportInput, setReportInput] = useState<reportInputType>(initialReportInput)

    const slides = [
        <AddReportStep1 reportInput={reportInput} setReportInput={setReportInput} currentSlideIndex={currentSlideIndex} setCurrentSlideIndex={setCurrentSlideIndex} />,
        <AddReportStep2 reportInput={reportInput} setReportInput={setReportInput} currentSlideIndex={currentSlideIndex} setCurrentSlideIndex={setCurrentSlideIndex} />,
        <AddReportStep3 reportInput={reportInput} setReportInput={setReportInput} currentSlideIndex={currentSlideIndex} setCurrentSlideIndex={setCurrentSlideIndex} topicsDataByClassId={topicsDataByClassId} />,
        <AddReportStep4 reportInput={reportInput} setReportInput={setReportInput} currentSlideIndex={currentSlideIndex} setCurrentSlideIndex={setCurrentSlideIndex} topicsDataByClassId={topicsDataByClassId} setValue={setValue} value={value} refreshReportData={refreshReportsData}/>];

    const submitFunction = (value: any) => {
        console.log(value);
    };


    return (
        <div>
            <Dialog open={value} onOpenChange={setValue}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Репорт үүсгэх</DialogTitle>
                    </DialogHeader>
                    <div className="gap-10 my-5">
                        <ul className="steps lg:steps-horizontal w-full text-sm pb-10">
                            <li className="step step-neutral">Ирц</li>
                            <li className={`step ${currentSlideIndex >= 2 ? 'step-neutral' : ''}`}>Сэдэв</li>
                            <li className={`step ${currentSlideIndex == 3 ? 'step-neutral' : ''}`}>Хянах</li>
                        </ul>
                        {slides[currentSlideIndex] && (
                            <div style={{ width: '100%' }}>
                                {slides[currentSlideIndex]}
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

