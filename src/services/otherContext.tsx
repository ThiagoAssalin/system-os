'use client'

import React, {ReactNode, createContext, useContext, useState} from 'react'

interface childrenProps{
    children:ReactNode
}

const OtherContext = createContext({
    updatePage:true,
    changeUpdate:()=>{}
})

export const OtherProvider = ({children}:childrenProps)=>{
    const [updatePage, setUpdatePage] = useState(true)

    const changeUpdate = ()=>{
        if(updatePage === true){
            setUpdatePage(false)
        }else{
            setUpdatePage(true)
        }
    }

    return(
        <OtherContext.Provider value={{updatePage, changeUpdate}}>
            {children}
        </OtherContext.Provider>
    )
}


export const useOther = ()=>{
    return useContext(OtherContext)
}