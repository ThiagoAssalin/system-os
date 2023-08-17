import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

import { createOsValidator } from '@/validators/osValidator'
import { CreateOs } from '@/services/os'
import { useOther } from '@/services/otherContext'

interface ModalProps {
    visible: boolean;
    closeHandler: () => void;
  }


export default function Modal({visible, closeHandler}:ModalProps){

    const {changeUpdate} = useOther()

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(createOsValidator)
    })

    const onSubmit = async({requester, problemDescription}:{requester:string, problemDescription:string})=>{
        const token = localStorage.getItem("token")
        if(token){
            const response =  await CreateOs(token, requester, problemDescription)
            console.log(token)
            console.log(response)
            changeUpdate()
            closeHandler()
        }
    }

    if(!visible) return null 

    return(
        <div  className=' absolute bg-slate-500  w-full h-full flex justify-center items-center rounded-md'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1 w-1/2  '>
                <input type="text" placeholder="Nome do Solicitante" {...register("requester")} className='rounded-md p-2'/>
                <textarea placeholder="Descrição do Problema"{...register("problemDescription")} className='rounded-md p-2 resize-none'/>
                <button type="submit" className='border rounded-md text-white bg-cyan-700 p-1'>Enviar</button>
                <button onClick={closeHandler} className='border rounded-md text-white bg-red-500 p-1'>Fechar</button>
            </form>
        </div>
    )
}