'use client'
import api from "@/services/axiosClient"
import{useState, ChangeEvent} from 'react'

export default function LoginContainer(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e:ChangeEvent<HTMLInputElement>)=>{
        setUsername(e.target.value)
    }
    const handlePassword = (e:ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }

    async function login(username: string, password:string) {
        const result = await api.post('/auth/login',{username, password})
        console.log(result)
        
        
    }

    return(
        <div>
            <div className="flex flex-col justify-center items-center gap-9 rounded-md w-60 h-72 bg-gradient-to-r from-cyan-500 to-blue-500" >
                <input type="text" placeholder="Login" onChange={handleUsername} className="border border-sky-500 rounded-md p-1" ></input>
                <input type="text" placeholder="Password" onChange={handlePassword} className="border border-sky-500 rounded-md p-1"></input>
                <input type="submit" className="border rounded-md text-white bg-cyan-700 p-1" onClick={()=>{login(username, password)}} ></input>
            </div>      
        </div>
    )
}