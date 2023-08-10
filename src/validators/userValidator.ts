import * as yup from 'yup'

export const loginUser = yup.object({
    username: yup.string().required('Campo Obrigatório'),
    password: yup.string().required('Campo Obrigatório')
}).required()