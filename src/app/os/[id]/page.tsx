'use client'
import { ChangeEvent, useState, useRef,} from "react"




export default function Os({params}:{params:{id: string }}){
    const [imgUp, setImgUp] = useState<File | null>(null)
    const file = useRef<HTMLInputElement | null>(null)

    const handleImg = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files != null){
            setImgUp(e.target.files[0])
        }
    }
    const handleDelete = ()=>{
        setImgUp(null)
        if(!file.current) return
        file.current.value = ""
    }
    
    return(
        <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center mx-auto my-1  w-11/12 gap-2 p-4 rounded-xl  bg-gradient-to-r from-cyan-500 to-blue-500">
            <h1 className=" text-2xl font-bold">Os: {params.id}</h1>
                <div className="flex flex-col gap-2 mb-4">
                    <div className="flex justify-between items-center">
                        <label className="">Nome do Solicitante: </label>
                        <input type="text" value="Nome do Solicitante" className="border-2 w-1/2 rounded-xl px-2"></input>
                    </div>
                    <div className="flex justify-between items-center">
                        <label>Descrição do Problema: </label>
                        <input type="text" value="Ar condicionando ruim " className="border-2 w-1/2 rounded-xl px-2"></input>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <label className="">Nome do Técnico: </label>
                        <input type="text" value="Nome do Técnico" className="border-2 w-1/2 rounded-xl px-2"></input>
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="w-1/2">Descrição do serviço executado: </label>
                        <textarea  className="border-2 h-16 resize-none w-1/2 rounded-xl px-2"></textarea>
                    </div>
                        <input type="file" name='escolher Imagem' onChange={handleImg} ref={file} accept="image/png, image/jpeg" />
                        
                        {
                            imgUp ? <div><img src={URL.createObjectURL(imgUp)} alt="image" width='150' height="100"/>
                            <button className="border rounded-md text-white bg-cyan-700 p-1" onClick={handleDelete}>Delete</button></div>:<img/>
                        } 
               </div>     
               <input type="submit" className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-grren-500 rounded"/>   
            
        </div>
        </div>
    )
}