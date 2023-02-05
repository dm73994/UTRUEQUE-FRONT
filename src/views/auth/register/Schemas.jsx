import * as yup from 'yup';

export const defaultRegisterValues = {
    user: '',
    email: '',
    password: ''
}

export const RegisterSchema = yup.object().shape({
    user: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
}).required();