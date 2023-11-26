"use client"

import { GetUser } from "@/services/user";
import { useEffect, useState } from "react";
import {useUser} from "@/services/userContext"
import { useAuth } from '@/services/authContext'



export default function ProfileCard(){

    const {idUser} = useUser()
    const [info, setInfo] = useState("")
    const [nameUser, setNameUser] = useState("")
    const {logout} = useAuth()
    var btn
    

    useEffect(()=>{
        const getUser = async()=>{
            const token = localStorage.getItem("token")
                if (token){
                    console.log("ate aqui funciona")
                    const response = await GetUser(token,idUser)
                    console.log(response)
                    setInfo(response.username)
                    setNameUser(response.fullname)
                } 
                
        }
        getUser()
    },[])

    if(info === "admin"){
        btn = 
        <div>
            <button className=" mb-2">Criar usuario</button>
        </div>
    }else{
        btn = <button className=" hidden"></button>
    }

    return(
        <div className="p-3 flex flex-col justify-center items-center h-20 gap-1 bg-gradient-to-r rounded-b-md from-cyan-500 to-blue-500 text-white">
            <p className=" mt-2">Nome: {nameUser}</p>
            <button onClick = {logout}>Logout</button>
            {btn}
        </div>
    )
} 