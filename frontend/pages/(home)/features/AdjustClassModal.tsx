import React, { Dispatch, SetStateAction } from 'react';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose
} from "@/components/ui/dialog";
import { Formik, Form } from 'formik';
import { Input } from '@/pages/(common)/components/Input';
import { DatePicker } from '@/pages/(common)/components/DatePicker';
import { Button } from '@/pages/(common)/components/Button';
import { Class, useEditClassMutationMutation } from "@/generated";
import { RadioButton } from '@/pages/(common)/components/RadioButton';
import { classDataValidation, formikValue } from './utils/ClassFormik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AdjustClassModal {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  adjustClassData: Class | undefined;
  refreshClassesData: () => void;
}

export const AdjustClassModal = ({ value, setValue, adjustClassData, refreshClassesData }: AdjustClassModal) => {
  const [editClassMutation] = useEditClassMutationMutation()

  const adjustClassDataInitialValue = {
    name: adjustClassData?.name,
    teacherName1: adjustClassData?.teachers?.[0] ?? '',
    teacherName2: adjustClassData?.teachers?.[1] ?? '',
    startDate: adjustClassData?.startDate,
    endDate: adjustClassData?.endDate,
    type: adjustClassData?.type,
  }

  const updateFunction = async (values: formikValue) => {
    const { name, teacherName1, teacherName2, type, startDate, endDate } = values;
    const promise = editClassMutation({
      variables: {
        classId: adjustClassData?._id,
        classInput: {
          name, teachers: [teacherName1, teacherName2], type, startDate, endDate
        }
      }
    });
    toast.promise(promise, {
      pending: 'Updating class ' + values.name,
      success: values.name + ' class updated successfully!',
      error: 'Error updating class.',
    }, {
      autoClose: 2000,
      position: 'bottom-right'
    });
    try {
      await promise;
      await refreshClassesData();
    } catch (err) {
      console.error("Error updating class:", err);
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
              initialValues={adjustClassDataInitialValue}
              validationSchema={classDataValidation}
              onSubmit={(values) => { updateFunction(values) }}
            >
              {({ isValid, values }) => {
                return (
                  <Form>
                    <Input
                      label="Ангиин нэр:" name="name" type='text' placeholder='Ангийн кодыг оруулна уу.'
                    />
                    <div className='grid grid-cols-2 gap-x-5'>
                      <Input
                        label="Багш 1-н нэр:" name="teacherName1" type='text' placeholder='Багшийн нэр оруулна уу.'
                      />
                      <Input
                        label="Багш 2-н нэр:" name="teacherName2" type='text' placeholder='Багшийн нэр оруулна уу.'
                      />
                      <DatePicker label="Эхлэх огноо:" name="startDate" />
                      <DatePicker label="Дуусах огноо:" name="endDate" />
                    </div>
                    <div role="group" aria-labelledby="my-radio-group" className='grid grid-cols-2 gap-x-5'>
                      <RadioButton label='Кодинг анги' name='type' value='CODING' radioButtonValue={values.type ?? 'CODING'} />
                      <RadioButton label='Дизайн анги' name='type' value='DESIGN' radioButtonValue={values.type ?? 'CODING'} />
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
