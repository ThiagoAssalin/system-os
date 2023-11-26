'use client'

import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'


import Login from '@/services/auth'
import { loginUser } from '@/validators/userValidator'
import { useAuth } from '@/services/authContext'
import { useUser } from '@/services/userContext'





export default  function LoginContainer(){
    const {login} = useAuth()
    const {saveId} = useUser()
    const {idUser} = useUser()
    
    const router = useRouter()
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(loginUser)
    })
    
    const onSubmit = async ({username, password}:{username:string, password:string}) => {
        const result = await Login(username, password)
        if(result){
            localStorage.setItem("token", result.data.data.token)
            saveId(result.data.data.user.id)
            login()
            router.push('/dashboard')
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-9 rounded-md w-60 h-72 bg-gradient-to-r from-cyan-500 to-blue-500" >
                <input type="text" placeholder="Username"  {...register("username")} className="border border-sky-500 rounded-md p-1"  ></input>
                <input type="password" placeholder="Password" {...register("password")}  className="border border-sky-500 rounded-md p-1" ></input>
                <button type='submit' className="border rounded-md text-white bg-cyan-700 p-1" >Enviar</button>
            </form>      
        </div>
    )
}