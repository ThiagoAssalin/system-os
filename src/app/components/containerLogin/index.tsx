
import api from "@/services/axiosClient"
import{useState, ChangeEvent} from 'react'

export default function LoginContainer(){

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    
    const handleForm = (e:ChangeEvent<HTMLInputElement>, name:string) =>{
        setFormData(
            {...formData,
                [name]:e.target.value}
            
        )
    }
    const login = async  (event)=> {
        
        try{
            event.preventDefalt()
            const result = await api.post('/auth/login')
            console.log(result)
        }catch(err){

        }
        
        
        
    }

    return(
        <div>
            <div   className="flex flex-col justify-center items-center gap-9 rounded-md w-60 h-72 bg-gradient-to-r from-cyan-500 to-blue-500" >
                <input type="text" placeholder="Login" required value={formData.username} className="border border-sky-500 rounded-md p-1" onChange={(e)=>{handleForm(e,'username')}} ></input>
                <input type="password" placeholder="Password" required value={formData.password} className="border border-sky-500 rounded-md p-1" onChange={(e)=>{handleForm(e,'password')}}></input>
                <button  className="border rounded-md text-white bg-cyan-700 p-1" onClick={login}>Enviar</button>
            </div>      
        </div>
    )
}