"use client"

import React, {ReactNode, createContext, useContext, useEffect, useState} from 'react'

interface AuthContextProps{
    isAuthenticated: boolean,
    login:()=>void,
    logout:()=>void
}

interface childrenProps{
    children: ReactNode
}

const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    login:()=>{},
    logout:()=>{}
});

export const AuthProvider = ({children}:childrenProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            setIsAuthenticated(true)
        }
    },[])

    const login = ()=>{
        setIsAuthenticated(true)
    }
    const logout = ()=>{
        setIsAuthenticated(false)
    }
    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=>{
    return useContext(AuthContext)
}