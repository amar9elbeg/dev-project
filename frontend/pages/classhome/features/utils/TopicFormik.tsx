import * as Yup from 'yup';

export const topicDataInitialValue = {
    name: '',
    description: '',
    defaultFeedbackGood: '',
    defaultFeedbackMedium: '',
    defaultFeedbackNotEnough: '',
    active: 'active',
}

export type topicFormikValue = {
    name: string | null | undefined;
    description: string | null | undefined;
    defaultFeedbackGood: string | null | undefined;
    defaultFeedbackMedium: string | null | undefined;
    defaultFeedbackNotEnough: string | null | undefined;
    active: string;
}
export const topicDataValidation = Yup.object({
    name: Yup.string().min(2, "Must be 2 characters")
        .max(20, 'Must be 20 characters')
        .required('Required'),
    description: Yup.string().min(2, "Must be 2 characters")
        .max(50, 'Must be 50 characters')
        .required('Required'),
    defaultFeedbackGood: Yup.string().min(2, "Must be 2 characters")
        .max(200, 'Must be 200 characters')
        .required('Required'),
    defaultFeedbackMedium: Yup.string().min(2, "Must be 2 characters")
        .max(200, 'Must be 200 characters')
        .required('Required'),
    defaultFeedbackNotEnough: Yup.string().min(2, "Must be 2 characters")
        .max(200, 'Must be 200 characters')
        .required('Required'),

    active: Yup.string()
});
