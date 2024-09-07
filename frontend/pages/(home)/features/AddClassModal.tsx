import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { classDataValidation, formikValue, classDataInitialValue } from './utils/ClassFormik';
import { Formik, Form, Field } from 'formik';
import { Input } from '@/pages/(common)/components/Input';
import { DatePicker } from '@/pages/(common)/components/DatePicker';
import { Button } from '@/pages/(common)/components/Button';
import { useCreateClassMutationMutation } from "@/generated";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AddClassModal {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}
export const AddClassModal = ({ ...props }: AddClassModal) => {
  const { value, setValue } = props;
  const [radioValue, setRadioValue] =  useState('CODING')

  const [createClassMutation] = useCreateClassMutationMutation();

  const submitFunction = async (values: formikValue) => {
    const promise = createClassMutation({
      variables: {
        input: {
          name: values.name,
          teachers: [values.teacherName1, values.teacherName2],
          type: values.classType,
          startDate: values.startDate,
          endDate: values.endDate,
        }
      }
    });
    toast.promise(promise, {
      pending: 'Creating class ' + values.name,
      success: values.name +' class created successfully!',
      error: 'Error creating class.',
    }, {
      autoClose: 2000,
      position: 'bottom-right'
    });
    try {
      await promise;
    } catch (err) {
      console.error("Error creating class:", err);
    }
  }

  return (
    <div>
      <Dialog open={value} onOpenChange={setValue}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Анги нэмэх</DialogTitle>
          </DialogHeader>
          <div className="gap-10 my-5">
            <Formik
              initialValues={classDataInitialValue}
              validationSchema={classDataValidation}
              onSubmit={(values) => {
                submitFunction(values)
              }}
            >
              {({ isValid, values }) => {
                return (
                  <Form>
                    <Input
                      label="Ангиин нэр:"
                      name="name"
                      type='text'
                      placeholder='Ангийн кодыг оруулна уу.'
                    />
                    <div className='grid grid-cols-2 gap-x-5'>
                      <Input
                        label="Багш 1-н нэр:"
                        name="teacherName1"
                        type='text'
                        placeholder='Багшийн нэр оруулна уу.'
                      />
                      <Input
                        label="Багш 2-н нэр:"
                        name="teacherName2"
                        type='text'
                        placeholder='Багшийн нэр оруулна уу.'
                      />
                      <DatePicker label="Эхлэх огноо:" name="startDate" />
                      <DatePicker label="Дуусах огноо:" name="endDate" />
                    </div>
                    <div role="group" aria-labelledby="my-radio-group" className='grid grid-cols-2 gap-x-5'>
                      <label className={`border rounded-md py-2 px-2 ${values.classType == 'CODING' ? 'bg-gray-100 border-gray-300' : "border-gray-100"} checked:bg-red-500`}>
                        <Field type="radio" name="classType" value="CODING" />
                        <span className='ml-2'>Кодинг анги</span>
                      </label>
                      <label className={`border rounded-md py-2 px-2 ${values.classType == 'DESIGN' ? 'bg-gray-100 border-gray-300' : "border-gray-100"}`}>
                        <Field type="radio" name="classType" value="DESIGN" />
                        <span className='ml-2'>Дизайн анги</span>
                      </label>
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
