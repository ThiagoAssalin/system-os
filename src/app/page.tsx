'use client'
import { useRouter } from "next/navigation";
import LoginContainer from "./components/containerLogin";
import { useAuth } from "@/services/authContext";
import { useEffect } from "react";

export default function LoginPage(){
    const router = useRouter()
    const{isAuthenticated} = useAuth()

    useEffect(()=>{
        if(isAuthenticated){
            router.push('/dashboard')
        }
    },[isAuthenticated])

    return(
        
        <div className="flex items-center justify-center h-screen">
           <LoginContainer/>
        </div>
    )

}