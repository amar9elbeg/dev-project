import React, { Dispatch, SetStateAction } from 'react'
import { Formik, Form } from 'formik';
import { DatePicker } from '@/pages/(common)/components/DatePicker';
import * as Yup from 'yup';
import { reportInputType } from '../utils/ReportFormik';

export interface AddReportStepProps  {
    reportInput: reportInputType;
    setReportInput: Dispatch<SetStateAction<reportInputType>>;
    currentSlideIndex: number;
    setCurrentSlideIndex: Dispatch<SetStateAction<number>>;
}

export const AddReportStep1 = ({ reportInput, setReportInput, currentSlideIndex, setCurrentSlideIndex }: AddReportStepProps) => {
    const datesInitialValue = {
        startDate: reportInput?.startDate,
        endDate: reportInput?.endDate
    }    

    const datesValidation = Yup.object({
        startDate: Yup.string().required('Required'),
        endDate: Yup.string().required('Required'),
    });

    type datesType = {
        startDate: string, 
        endDate: string
    }

    const submitFunction = (value: datesType) => {
        setReportInput((prevInput) => ({ ...prevInput, ...value }));
        setCurrentSlideIndex(1);
    }

    return (
        <div>
            <Formik
                initialValues={datesInitialValue}
                validationSchema={datesValidation}
                onSubmit={(values) => { submitFunction(values) }}
            >
                {({ isValid, values }) => {
                    return (
                        <Form>
                            <DatePicker label="Эхлэх огноо:" name="startDate" />
                            <DatePicker label="Дуусах огноо:" name="endDate" />
                            <footer className='flex justify-end items-end'>
                                <button className='bg-black text-white p-2 rounded-lg' type='submit' disabled={!isValid}>
                                    Үргэлжлүүлэх
                                </button>
                            </footer>
                        </Form>
                    )
                }}
            </Formik>

        </div>
    )
}


