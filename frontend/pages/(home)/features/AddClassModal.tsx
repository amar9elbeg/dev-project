import React, { Dispatch, SetStateAction } from 'react';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose
} from "@/components/ui/dialog";
import { classDataValidation, formikValue, classDataInitialValue } from './utils/ClassFormik';
import { Formik, Form } from 'formik';
import { Input } from '@/pages/(common)/components/Input';
import { DatePicker } from '@/pages/(common)/components/DatePicker';
import { Button } from '@/pages/(common)/components/Button';
import { useCreateClassMutationMutation } from "@/generated";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RadioButton } from '@/pages/(common)/components/RadioButton';

interface AddClassModal {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  refreshClassesData: () => void;
}
export const AddClassModal = ({ ...props }: AddClassModal) => {
  const { value, setValue, refreshClassesData } = props;
  const [createClassMutation] = useCreateClassMutationMutation();

  const submitFunction = async (values: formikValue) => {
    const { name, teacherName1, teacherName2, type, startDate, endDate } = values;
    const promise = createClassMutation({
      variables: {
        input: {
          name, teachers: [teacherName1, teacherName2], type, startDate, endDate
        }
      }
    });
    toast.promise(promise, {
      pending: 'Creating class ' + values.name,
      success: values.name + ' class created successfully!',
      error: 'Error creating class.',
    }, {
      autoClose: 2000,
      position: 'bottom-right'
    });
      await promise;
      await refreshClassesData();
  }

  return (
    <div >
      <Dialog open={value} onOpenChange={setValue} >
        <DialogContent data-cy='Add-Class-Modal'>
          <DialogHeader>
            <DialogTitle>Анги нэмэх</DialogTitle>
          </DialogHeader>
          <div className="gap-10 my-5">
            <Formik
              initialValues={classDataInitialValue}
              validationSchema={classDataValidation}
              onSubmit={(values) => { submitFunction(values) }}
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
                      <DatePicker label="Дуусах огноо:" name="endDate"/>
                    </div>
                    <div role="group" aria-labelledby="my-radio-group" className='grid grid-cols-2 gap-x-5'>
                      <RadioButton label='Кодинг анги' name='type' value='CODING' radioButtonValue={values.type} />
                      <RadioButton label='Дизайн анги' name='type' value='DESIGN' radioButtonValue={values.type} />
                    </div>
                    <DialogFooter className='mt-5'>
                      <DialogClose asChild>
                        <Button
                          text={`Хадгалах`}
                          value={value}
                          setValue={setValue}
                          disabled={!isValid}
                          dataCy='HomePage-AddClassModal-Submit-Button'
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
