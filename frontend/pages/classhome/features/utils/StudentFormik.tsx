import * as Yup from 'yup';

export const studentDataInitialValue = {
    studentCode: '',
    firstName: '',
    lastName: '',
    phoneNumber: "",
    email: '',
    profileImageUrl: "https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
    active: 'active',
}

export type studentFormikValue = {
    studentCode: string | null | undefined;
    firstName: string | null | undefined;
    lastName: string | null | undefined;
    phoneNumber: string | null | undefined;
    email: string | null | undefined;
    profileImageUrl: string | null | undefined;
    active: string;
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
    active: Yup.string()
});
