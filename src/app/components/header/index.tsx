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
                {isOpen?<div className="absolute transition-all top-16 right-0 opacity-100 duration-500 translate-x-0 ">
                        <ProfileCard/>
                    </div>:<div className="absolute transition-all top-16 right-0 overflow-hidden opacity-0 translate-x-36 ">
                        <ProfileCard/>
                    </div>}
                    <nav className="flex gap-2 z-index: 50 opacity-100">                    
                    <button onClick={handleClick} className=" flex flex-col justify-center items-center">
                        Admin   
                    </button>
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