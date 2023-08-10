"use client"

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useAuth } from "@/services/authContext";

interface childrenProps{
 children:ReactNode
}

const PrivateRoutes = ({children}:childrenProps) =>{
    const router = useRouter()
    const {isAuthenticated} = useAuth()

    useEffect(()=>{
        if(!isAuthenticated){
            router.push('/')
        }
    },[isAuthenticated])

    return isAuthenticated ? children : null
}

export default PrivateRoutes