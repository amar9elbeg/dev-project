import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,DialogFooter,
    DialogClose
  } from "@/components/ui/dialog"
  import { Label } from "@/components/ui/label"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
  import { Formik, Form, useField } from 'formik';
  import * as Yup from 'yup';
import AddClassInput from './AddClassInput'
import DatePicker from './DatePicker'
import RightVector from '../icons/RightVector'

 

const AddClassButton = () => {
  return (
    <div>
        <Dialog>
            <DialogTrigger className='w-28 h-12 text-lg font-semibold bg-white rounded-lg'> Анги + </DialogTrigger>
            <DialogContent >
                <DialogHeader>
                <DialogTitle>Анги нэмэх</DialogTitle>
                </DialogHeader>
                <div className=" gap-10 my-5">
                    <Formik 
                        initialValues={{
                            className: '',
                            teacherName1: '',
                            teacherName2: '',
                            startDate: '', 
                            endDate: '',
                        }}
                        validationSchema={Yup.object({
                            className: Yup.string().min(2,"Must be 2 characters or more")
                              .max(15, 'Must be 15 characters or less')
                              .required('Required'),
                            teacherName1: Yup.string().min(2,"Must be 2 characters or more")
                              .max(20, 'Must be 20 characters or less')
                              .required('Required'),
                            teacherName2: Yup.string().min(2,"Must be 2 characters or more")
                              .max(20, 'Must be 20 characters or less')
                              .required('Required'),
                            startDate: Yup.string().required('Required'),
                            endDate: Yup.string().required('Required'),
                          })}
                        onSubmit={(values, { setSubmitting }) => {
                          console.log(values);
                        }}
                        >
                        <Form>
                            <AddClassInput
                                label="Ангиин нэр:"
                                name="className"
                                type='text'
                                placeholder='Ангийн кодыг оруулна уу.'
                            />
                            <div className='grid grid-cols-2 gap-x-5'>
                                <AddClassInput
                                    label="Багш 1-н нэр:"
                                    name="teacherName1"
                                    type='text'
                                    placeholder='Багшийн нэр оруулна уу.'
                                />
                                <AddClassInput
                                    label="Багш 2-н нэр:"
                                    name="teacherName2"
                                    type='text'
                                    placeholder='Багшийн нэр оруулна уу.'
                                />
                                <DatePicker label="Эхлэх огноо:" name="startDate"/>
                                <DatePicker label="Дуусах огноо:" name="endDate" />
                            </div>
                            <DialogFooter>
                              <DialogClose asChild>
                                  <Button type="submit" className='text-lg gap-2'>Хадгалах <RightVector/> </Button>
                              </DialogClose>
                            </DialogFooter>


                        </Form>
                    </Formik>
                    </div>

            </DialogContent>
            </Dialog>
      
    </div>
  )
}

export default AddClassButton
