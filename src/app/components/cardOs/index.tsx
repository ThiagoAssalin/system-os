import { AiFillDelete } from "react-icons/ai";

export default function CardOs({id, requester, finished}){

    var complete

    if(finished === true){
        return complete = <p className=" text-xs">completo</p>
    }else{
        complete = <p className=" text-xs">incompleta</p>
    }



    return(
        <div className="flex justify-between p-3 h-1/5 border-2 bg-slate-100 rounded-lg">
            <div>
                <h2>OS: {id}</h2>
                <p className=" text-xs">Nome: {requester}</p>
            </div>
            <div className="flex flex-col justify-center items-end gap-2 ">
                <div className="flex justify-center items-center gap-1">
                    <div className=" bg-green-500 w-2 h-2 rounded"></div>
                    {complete}
                </div>
                    <button><AiFillDelete/></button>
            </div>
        </div>
    )
}