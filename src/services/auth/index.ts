import api from "../axiosClient";

interface CustonError{
    response?:{
        status: number
    }
}
const Login = async(username:string, password:string) => {
    try{
        const result =  await api.post('/auth/login',{
            username,
            password

        })

    return result
    }catch(error){
        const typedError = error as CustonError
        if(typedError.response && typedError.response.status != 200){
            console.log(error)
            return
        }
        
    }
}
export default Login