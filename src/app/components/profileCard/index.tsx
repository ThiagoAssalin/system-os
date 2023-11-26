"use client"

import { GetUser } from "@/services/user";
import { useEffect, useState } from "react";
import {useUser} from "@/services/userContext"



export default function ProfileCard(){

    const {idUser} = useUser()
    const [info, setInfo] = useState("")
    const [nameUser, setNameUser] = useState("")
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
            <button>Criar usuario</button>
        </div>
    }else{
        btn = <button className=" hidden"></button>
    }

    return(
        <div className="p-2 flex flex-col justify-center items-center h-20   bg-gradient-to-r rounded-b-md from-cyan-500 to-blue-500 text-white">
            <p>Nome: {nameUser}</p>
            <button>Logout</button>
            {btn}
        </div>
    )
} 