import React, { Dispatch, SetStateAction } from 'react';
import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose
} from "@/components/ui/dialog";
import { Formik, Form } from 'formik';
import { Input } from '@/pages/(common)/components/Input';
import { Button } from '@/pages/(common)/components/Button';
import { Topic, useEditTopicMutationMutation } from "@/generated";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { RadioButton } from '@/pages/(common)/components/RadioButton';
import { TextArea } from '@/pages/(common)/components/TextArea';
import { topicDataValidation, topicFormikValue } from '../utils/TopicFormik';

interface AdjustTopicModalProps {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
    refreshTopicsData: () => void;
    adjustTopicData: Topic | undefined
}
export const AdjustTopicModal = ({ value, setValue, refreshTopicsData, adjustTopicData }: AdjustTopicModalProps) => {
    const router = useRouter();
    const { classId } = router.query;
    const [updateTopicMutation] = useEditTopicMutationMutation();

    const adjustTopicDataInitialValue = {
        name: adjustTopicData?.name,
        description: adjustTopicData?.description,
        defaultFeedbackGood: adjustTopicData?.defaultFeedbackGood,
        defaultFeedbackMedium: adjustTopicData?.defaultFeedbackMedium,
        defaultFeedbackNotEnough: adjustTopicData?.defaultFeedbackNotEnough,
        active: adjustTopicData?.active ? 'active' : 'inactive',
    }

    const submitFunction = async (values: topicFormikValue) => {
        const { name, description, defaultFeedbackGood, defaultFeedbackMedium, defaultFeedbackNotEnough, active } = values
        const promise = updateTopicMutation({
            variables: {
                topicId: adjustTopicData?._id,
                topicInput: {
                    name, description, defaultFeedbackGood, defaultFeedbackMedium, defaultFeedbackNotEnough, "active": active == 'active' ? true : false, "classId": classId
                }
            }
        });
        toast.promise(promise, {
            pending: 'updating topic ' + values.name,
            success: values.name + ' topic updated successfully!',
            error: 'Error updating topic.',
        }, {
            autoClose: 2000,
            position: 'bottom-right'
        });
        try {
            await promise;
            await refreshTopicsData()
        } catch (err) {
            console.error("Error updating topic:", err);
        }
    }

    return (
        <div>
            <Dialog open={value} onOpenChange={setValue}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Сэдэв үүсгэх:</DialogTitle>
                    </DialogHeader>
                    <div className="gap-10 my-5">
                        <Formik
                            initialValues={adjustTopicDataInitialValue}
                            validationSchema={topicDataValidation}
                            onSubmit={(values) => { submitFunction(values) }}
                        >
                            {({ isValid, values }) => {
                                return (
                                    <Form>
                                        <Input
                                            label="Нэр:" name="name" type='text' placeholder='Хичээлийн нэрийг оруулна уу.'
                                        />
                                        <Input
                                            label="Тайлбар:" name="description" type='text' placeholder='Хичээлийн тайлбарыг оруулна уу.'
                                        />
                                        <TextArea
                                            label="Сэтгэгдэл/ Good:" name="defaultFeedbackGood" type='text' placeholder='Хичээлийн тайлбарыг оруулна уу.'
                                        />
                                        <TextArea
                                            label="Сэтгэгдэл/ Medium:" name="defaultFeedbackMedium" type='text' placeholder='Хичээлийн тайлбарыг оруулна уу.'
                                        />
                                        <TextArea
                                            label="Сэтгэгдэл/ Not enough:" name="defaultFeedbackNotEnough" type='text' placeholder='Хичээлийн тайлбарыг оруулна уу.'
                                        />
                                        <div role="group" aria-labelledby="my-radio-group" className='grid grid-cols-2 gap-x-5'>
                                            <RadioButton label='Идэвхтэй' name='active' value='active' radioButtonValue={values.active} />
                                            <RadioButton label='Идэвхгүй' name='active' value='inactive' radioButtonValue={values.active} />
                                        </div>
                                        <DialogFooter className='mt-5'>
                                            <DialogClose asChild>
                                                <Button
                                                    text={`Хадгалах`}
                                                    value={value}
                                                    setValue={setValue}
                                                    disabled={!isValid}
                                                />
                                            </DialogClose>
                                        </DialogFooter>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
