import React, { Dispatch, SetStateAction } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Input } from '@/pages/(common)/components/Input';
import { DatePicker } from '@/pages/(common)/components/DatePicker';
import { Button } from '@/pages/(common)/components/Button';
import { Class, useCreateClassMutationMutation, useGetClassesQueryQuery } from "@/generated";


interface AddClassModal {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}
export const AddClassModal = ({ ...props }: AddClassModal) => {
  const { value, setValue } = props;
  const classDataInitialValue = {
    className: '',
    teacherName1: '',
    teacherName2: '',
    startDate: '',
    endDate: '',
    classType: "CODING",
  }
  type formikValue = {
    className: String,
    teacherName1: String,
    teacherName2: String,
    startDate: String
    endDate: String,
    classType: String
  }
  const classDataValidation = Yup.object({
    className: Yup.string().min(2, "Must be 2 characters or more")
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    teacherName1: Yup.string().min(2, "Must be 2 characters or more")
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    teacherName2: Yup.string().min(2, "Must be 2 characters or more")
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    startDate: Yup.string().required('Required'),
    endDate: Yup.string().required('Required'),
    classType: Yup.string()
      .oneOf(['CODING', 'DESIGN'], 'Invalid class type')
      .required('Required')
  });
  const [createClass] = useCreateClassMutationMutation();
  const { data, loading, error } = useGetClassesQueryQuery();

  const submitFunction = async( values : formikValue)=>{
    await createClass({variables:{
        name: values.className,
        teachers: [values.teacherName1, values.teacherName2],
        type: values.classType,
        startDate: values.startDate,
        endDate: values.endDate,
    }})
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
                submitFunction(values) }}
            >
              {({ isValid, values }) => {
                return (
                  <Form>
                    <Input
                      label="Ангиин нэр:"
                      name="className"
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
                      <label className={`border rounded-md py-2 px-2 ${values.classType == 'CODING' ? 'bg-gray-100 border-gray-300' : "border-gray-100"}`}>
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
