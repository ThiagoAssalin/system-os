import api from "../axiosClient";


export const GetUser= async (token:string , id:number)=>{
    try{
        const response = api.get(`/user/search/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return (await response).data.user
    }catch(err){
        console.log(err)
    }
}