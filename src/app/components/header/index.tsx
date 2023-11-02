'use client'

import Link from "next/link";
import { useAuth } from "@/services/authContext"
import { useState } from "react";
import ProfileCard from "../profileCard";


export default function Header(){
    const [isOpen, setIsOpen] = useState(false)
    const {isAuthenticated} = useAuth()

    function handleClick(){
        setIsOpen(!isOpen)
    }

    if(isAuthenticated){
        return(
            <header className="  h-16 flex items-center justify-between p-4 border-b-2 fixed w-screen top-0 ">
                <h1>OsSystem</h1>
                <nav className="flex gap-2">
                    <button onClick={handleClick} className="flex flex-col justify-center items-center">
                        Admin   
                    </button>
                    {isOpen?<div className="absolute right-1 top-16">
                        <ProfileCard/>
                    </div>:<></>}
                 </nav>
                
                    
            </header>
        )
    }
    return(
        <header className="  h-16 flex items-center justify-between p-4 border-b-2 fixed w-screen top-0 ">
            <h1>OsSystem</h1>
            <nav className="flex gap-2">
                <Link className=" cursor-pointer" href={'../dashboard'}>DashBoard</Link>
                <Link className=" cursor-pointer" href={'/'}>Login</Link>
            </nav>
        </header>
    )
}