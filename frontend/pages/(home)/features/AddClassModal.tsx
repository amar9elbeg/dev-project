import React, { Dispatch, SetStateAction }  from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger, DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {  Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '@/pages/(common)/components/Input';
import { DatePicker } from '@/pages/(common)/components/DatePicker';
import { RightVector } from '@/pages/components/icons/RightVector';
import { ButtonComponent } from '@/pages/(common)/components/ButtonComponent';


interface AddClassModal {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
}

export const AddClassModal = ({...props} :  AddClassModal) => {
    const {value, setValue} = props
    const formik = useFormik({
        initialValues: {
          className: '',
          teacherName1: '',
          teacherName2: '',
          startDate: '',
          endDate: '',
        },
        validationSchema: Yup.object({
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
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

  return (
    <div>
      <Dialog open={value} onOpenChange={setValue}>
        <DialogContent >
          <DialogHeader>
            <DialogTitle>Анги нэмэх</DialogTitle>
          </DialogHeader>
          <div className=" gap-10 my-5">
              <Form onSubmit={formik.handleSubmit}>
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
                <DialogFooter>
                  <DialogClose asChild>
                    <ButtonComponent text="Хадгалах" value={value} setValue={setValue} />
                  </DialogClose>
                </DialogFooter>
              </Form>

          </div>

        </DialogContent>
      </Dialog>

    </div>
  )
}
