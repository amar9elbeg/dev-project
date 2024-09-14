import * as Yup from 'yup';

export const studentDataInitialValue = {
    studentCode: '',
    firstName: '',
    lastName: '',
    phoneNumber: "",
    email: '',
    profileImageUrl: "",
}

export type studentFormikValue = {
    studentCode: String | undefined,
    firstName: String | undefined,
    lastName: String | undefined,
    phoneNumber: String | undefined,
    email: String | undefined,
    profileImageUrl: String | undefined,
}
export const studentDataValidation = Yup.object({
    studentCode: Yup.string().min(8, "Must be 8 characters")
        .max(8, 'Must be 8 characters')
        .required('Required'),
    firstName: Yup.string().min(2, "Must be 2 characters or more")
        .max(25, 'Must be 25 characters or less')
        .required('Required'),
    lastName: Yup.string().min(2, "Must be 2 characters or more")
        .max(25, 'Must be 25 characters or less')
        .required('Required'),
    phoneNumber: Yup.string().matches(/^\d{8}$/, 'Phone number must be exactly 8 digits'),
    email: Yup.string().email(),
    profileImageUrl: Yup.string(),
});
