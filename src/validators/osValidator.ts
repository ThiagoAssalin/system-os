import * as yup from "yup"

export const createOsValidator = yup.object({
    requester: yup.string().required("Diga quem solicitou o chamado"),
    problemDescription: yup.string().required("Descreva o problema")
}).required()