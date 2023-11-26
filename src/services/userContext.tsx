'use client'

import React, {ReactNode, createContext, useContext, useState} from 'react'

interface childrenProps{
    children:ReactNode
}

const UserContext = createContext({
    idUser:"",
    saveId:(id:string)=>{}
})

export const UserProvider = ({children}:childrenProps)=>{
    const [idUser, setIdUser] = useState("")

    const saveId = (id:string)=>{
        console.log(id)
        setIdUser(id)
    }

    return(
        <UserContext.Provider value={{idUser, saveId}}>
            {children}
        </UserContext.Provider>
    )
}


export const useUser = ()=>{
    return useContext(UserContext)
}