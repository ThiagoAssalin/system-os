'use client'
import { useEffect, useState } from "react";
import CardOs from "../cardOs";
import { GetOs } from "@/services/os";

export default function OsList(){
    const[osList , setOsList] = useState([])
    
    
    useEffect(()=>{
        const getOss = async ()=>{
            const token = localStorage.getItem("token")
            if(token){
                const response = await GetOs(token)
                setOsList(response)
                console.log(osList)
            } 
        }
        getOss()
    },[])

    return(

        <div className="  w-4/5  mt-5 flex flex-col gap-2 p-2">
            {osList && (osList.map((os)=>(
                <>
                    <CardOs 
                        id={os.id}
                        requester={os.requester}
                        finished={os.finished}

                    />
                </>
            )

            ))}
        </div>
    )
}