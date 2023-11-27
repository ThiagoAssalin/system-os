
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

export const GetOs= async (token:string)=>{
    try{
        const response = api.get("/service-order",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        
        return (await response).data.serviceOrders
    }catch(err){
        console.log(err)
    }
}

export const DeleteOs =async (token:string, id :number) => {
    try{
        const response = await api.delete(`/service-order/delete/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return response
    }catch(err){
        console.log(err)
    }
}

