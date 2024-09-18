import React, { Dispatch, SetStateAction } from 'react';
import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose
} from "@/components/ui/dialog";
import { Formik, Form } from 'formik';
import { Input } from '@/pages/(common)/components/Input';
import { Button } from '@/pages/(common)/components/Button';
import { useCreateStudentMutationMutation } from "@/generated";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { studentDataInitialValue, studentDataValidation, studentFormikValue } from '../utils/StudentFormik';
import { RadioButton } from '@/pages/(common)/components/RadioButton';

interface AddStudentModalProps {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
    refreshStudentsData: () => void;
}
export const AddStudentModal = ({ value, setValue, refreshStudentsData}: AddStudentModalProps) => {
    const router = useRouter();
    const { classId } = router.query;
    const [createStudentMutation] = useCreateStudentMutationMutation();

    const submitFunction = async (values: studentFormikValue) => {
        const { studentCode, firstName, lastName, phoneNumber, email, active, profileImageUrl } = values
        const promise = createStudentMutation({
            variables: {
                input: {
                    studentCode, firstName, lastName, phoneNumber, email, "classId": classId, "active": active == 'active' ? true : false, profileImageUrl
                }
            }
        });
        toast.promise(promise, {
            pending: 'Adding student ' + values.firstName,
            success: values.firstName + ' student added successfully!',
            error: 'Error adding student.',
        }, {
            autoClose: 2000,
            position: 'bottom-right'
        });
        try {
            await promise;
            await refreshStudentsData()
        } catch (err) {
            console.error("Error adding student:", err);
        }
    }

    return (
        <div>
            <Dialog open={value} onOpenChange={setValue}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Бүртгэл үүсгэх</DialogTitle>
                    </DialogHeader>
                    <div className="gap-10 my-5">
                        <Formik
                            initialValues={studentDataInitialValue}
                            validationSchema={studentDataValidation}
                            onSubmit={(values) => { submitFunction(values) }}
                        >
                            {({ isValid, values }) => {
                                return (
                                    <Form>
                                        <Input
                                            label="Сурагчийн код:" name="studentCode" type='text' placeholder='Сурагчийн кодыг оруулна уу.'
                                        />
                                        <div className='grid grid-cols-2 gap-x-5'>
                                            <Input
                                                label="Овог:" name="firstName" type='text' placeholder='Last name'
                                            />
                                            <Input
                                                label="Нэр:" name="lastName" type='text' placeholder='First name'
                                            />
                                        </div>
                                        <Input
                                            label="Утасны дугаар:" name="phoneNumber" type='text' placeholder='Сурагчийн утасны дугаарыг оруулна уу.'
                                        />
                                        <Input
                                            label="Цахим хаяг:" name="email" type='text' placeholder='Сурагчийн цахим хаягийг оруулна уу.'
                                        />
                                        {/* <Input
                                            label="Профайл зураг:" name="profileImageUrl" type='file' placeholder='Татах'
                                        /> */}
                                        {/* <StudentPicture/> */}
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
