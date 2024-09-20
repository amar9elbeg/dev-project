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


interface AddReportModalProps {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
    refreshReportsData: () => void;
}


export const AddReportModal = ({ value, setValue, refreshReportsData }: AddReportModalProps) => {

    useEffect(()=>{
        setCurrentSlideIndex(0);
        setReportInput(initialReportInput);        
    },[value])

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [reportInput, setReportInput] = useState<reportInputType>(initialReportInput)

    const slides = [<AddReportStep1 reportInput={reportInput} setReportInput={setReportInput} currentSlideIndex={currentSlideIndex} setCurrentSlideIndex={setCurrentSlideIndex} />, 
        <AddReportStep2 reportInput={reportInput} setReportInput={setReportInput} currentSlideIndex={currentSlideIndex} setCurrentSlideIndex={setCurrentSlideIndex} />
        , 3, 4];

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
                        <ul className="steps steps-vertical lg:steps-horizontal w-full text-sm pb-10">
                            <li className="step step-neutral">Ирц</li>
                            <li className={`step ${currentSlideIndex == 3 ? 'step-neutral' : ''}`}>Сэдэв</li>
                            <li className={`step ${currentSlideIndex == 4 ? 'step-neutral' : ''}`}>Хянах</li>
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
