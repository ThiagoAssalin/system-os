"use client"

import { GetUser } from "@/services/user";
import { useEffect, useState } from "react";
import {useUser} from "@/services/userContext"
import { useOther } from "@/services/otherContext";
import { useAuth } from "@/services/authContext";


export default function ProfileCard(){

    const {idUser} = useUser()
    const [userName, setUserName] = useState("")
    const {updatePage} = useOther()
    const {isAuthenticated} = useAuth()

    useEffect(()=>{
        const getUser = async()=>{
            const token = localStorage.getItem("token")
                if (token){
                    console.log("ate aqui funciona")
                    const response = await GetUser(token,idUser)
                    console.log(response.fullname)
                    setUserName(response.fullname)
                }  
        }
        getUser()
    },[])

    return(
        <div className="p-2 flex flex-col justify-center items-center h-20   bg-gradient-to-r rounded-b-md from-cyan-500 to-blue-500 text-white">
            <p>Nome: {userName}</p>
            <button>Logout</button>
        </div>
    )
} 