import * as Yup from 'yup';

export const classDataInitialValue = {
    name: '',
    teacherName1: '',
    teacherName2: '',
    startDate: '',
    endDate: '',
    type: "CODING",
  }

  export type formikValue = {
    name: String | undefined,
    teacherName1: String | undefined,
    teacherName2: String | undefined,
    startDate: String | undefined,
    endDate: String | undefined,
    type: String | undefined,
  }
  export const classDataValidation = Yup.object({
    name: Yup.string().min(2, "Must be 2 characters or more")
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
    type: Yup.string()
      .oneOf(['CODING', 'DESIGN'], 'Invalid class type')
      .required('Required')
  });
