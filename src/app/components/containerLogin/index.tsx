'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import {SyntheticEvent, useState} from 'react'


export default  function LoginContainer(){

    const [username, setUsername] = useState<String>('')
    const [password, setPassword] = useState<String>('')

    const router = useRouter()



    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault()

        const result = await signIn('credentials',{
            username, 
            password,
            redirect: false
        })

        if(result?.error){
            console.log(result)
            return
        }

        router.replace('/')
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-9 rounded-md w-60 h-72 bg-gradient-to-r from-cyan-500 to-blue-500" >
                <input type="text" placeholder="Username" required onChange={(e)=>{setUsername(e.target.value)}} className="border border-sky-500 rounded-md p-1"  ></input>
                <input type="password" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}}  className="border border-sky-500 rounded-md p-1" ></input>
                <button type='submit' className="border rounded-md text-white bg-cyan-700 p-1" >Enviar</button>
            </form>      
        </div>
    )
}