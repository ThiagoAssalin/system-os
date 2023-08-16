import { AxiosError } from "axios";
import api from "../axiosClient";


export const CreateOs = async (token:string, requester:string, problemDescription:string)=>{
    try{
        const response = await api.post('/service-order/create', {
            requester,
            problemDescription
        },{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return response
    }catch(err){
        console.log(err)
    }
}

