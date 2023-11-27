import { DeleteOs } from "@/services/os";
import { useOther } from "@/services/otherContext";
import { AiFillDelete } from "react-icons/ai";


export default function CardOs({id, requester, finished}:{id:number, requester:string, finished:boolean}){

    var complete
    const {changeUpdate} = useOther()

    const handleDelete = async (id:number)=>{
        const token = localStorage.getItem("token")
        if(token){
            const response = await DeleteOs(token, id)
            changeUpdate()
        }
    }

    if(finished === true){
        return complete = 
        <div className="flex justify-center items-center gap-1">
            <div className=" bg-green-500 w-2 h-2 rounded"></div>
            <p className=" text-xs">completo</p>
        </div>
    }else{
        complete = <div className="flex justify-center items-center gap-1">
                        <div className=" bg-yellow-500 w-2 h-2 rounded"></div>
                        <p className=" text-xs">incompleto</p>
                    </div>
    }

    return(
        <div className="flex justify-between p-3 h-1/5 border-2 bg-slate-100 rounded-lg" key={id}>
            <div>
                <h2>OS: {id}</h2>
                <p className=" text-xs">Nome: {requester}</p>
            </div>
            <div className="flex flex-col justify-center items-end gap-2 ">
                    {complete}
                    <button onClick={()=>{handleDelete(id)}}><AiFillDelete/></button>
            </div>
        </div>
    )
}