'use client'
import { useEffect, useState } from "react";
import CardOs from "../cardOs";
import { GetOs } from "@/services/os";
import PaginationComponent from "../pagination";

interface OsProps{
    id:number,
    requester:string,
    finished:boolean
}


export default function OsList(){
    const[osList , setOsList] = useState<OsProps[]>([])
    const[itemsPerPage, setItemsPerPage] = useState(5)
    const[currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(osList.length / itemsPerPage)
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = osList.slice(startIndex, endIndex)
    
    
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

        <div className="w-4/5 mt-5 flex flex-col gap-2 p-2">
            <PaginationComponent pages={pages} currentPage={currentPage} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage}/>
            {osList && (currentItems.map((os)=>(
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