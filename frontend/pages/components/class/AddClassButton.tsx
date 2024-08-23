import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,DialogFooter
  } from "@/components/ui/dialog"
  import { Label } from "@/components/ui/label"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
  import { Formik, Form, useField } from 'formik';
  import * as Yup from 'yup';
import AddClassInput from './AddClassInput'
import DatePicker from './DatePicker'

 

const AddClassButton = () => {
  return (
    <div>
        <Dialog>
            <DialogTrigger className='w-28 h-12 bg-gray-200 rounded-lg'> Анги + </DialogTrigger>
            <DialogContent >
                <DialogHeader>
                <DialogTitle>Анги нэмэх</DialogTitle>
                </DialogHeader>
                <div className=" h-96 gap-10 my-10">
                    <Formik 
                        initialValues={{
                            className: '',
                            teacherName1: '',
                            teacherName2: '',
                            startDate: '', 
                            endDate: '',
                        }}
                        validationSchema={Yup.object({
                            className: Yup.string()
                              .max(15, 'Must be 15 characters or less')
                              .required('Required'),
                            teacherName1: Yup.string()
                              .max(20, 'Must be 20 characters or less')
                              .required('Required'),
                            teacherName2: Yup.string()
                              .max(20, 'Must be 20 characters or less')
                              .required('Required'),
                            startDate: Yup.string().required('Required'),
                            endDate: Yup.string().required('Required'),
                          })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                              alert(JSON.stringify(values, null, 2));
                              setSubmitting(false);
                            }, 400);
                        }}
                        >
                        <Form>
                            <AddClassInput
                                label="Ангиин нэр:"
                                name="className"
                                type='text'
                            />
                            <div className='grid grid-cols-2 gap-5'>
                                <AddClassInput
                                    label="Багш 1-н нэр:"
                                    name="teacherName1"
                                    type='text'
                                />
                                <AddClassInput
                                    label="Багш 2-н нэр:"
                                    name="teacherName2"
                                    type='text'
                                />
                                <DatePicker/>

                            </div>



                        </Form>
                    </Formik>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
            </DialogContent>
            </Dialog>
      
    </div>
  )
}

export default AddClassButton
